import frappe
import logging
import requests
from PIL import Image
from io import BytesIO
import qrcode
from qrcode.image.styledpil import StyledPilImage
from qrcode.image.styles.moduledrawers import RoundedModuleDrawer

logger = logging.getLogger(__name__)


@frappe.whitelist()
def get_purchase_order_qr(po_name: str, logo_url: str = None) -> str:

    if not frappe.db.exists("Purchase Order", po_name):
        frappe.throw(f"Purchase Order {po_name} not found.")

    existing_url = frappe.db.get_value("Purchase Order", po_name, "qr_code")
    if existing_url:
        return existing_url

    base_url = "http://192.168.101.186"
    po_url = f"{base_url}/desk/print/Purchase%20Order/{po_name}"

    qr_code_bytes = get_qr_code_bytes(po_url, logo_url, format="PNG")

    file_name = f"qr_{po_name}.png"

    existing_file = frappe.db.get_value(
        "File",
        {
            "attached_to_doctype": "Purchase Order",
            "attached_to_name": po_name,
            "file_name": file_name
        },
        "name"
    )
    if existing_file:
        frappe.delete_doc("File", existing_file, ignore_permissions=True)

    file_doc = frappe.get_doc({
        "doctype": "File",
        "file_name": file_name,
        "attached_to_doctype": "Purchase Order",
        "attached_to_name": po_name,
        "attached_to_field": "qr_code",
        "content": qr_code_bytes,
        "decode": False,
        "is_private": 0
    })
    file_doc.insert(ignore_permissions=True)

    frappe.db.set_value(
        "Purchase Order",
        po_name,
        "qr_code",
        file_doc.file_url,
        update_modified=False
    )
    frappe.db.commit()

    return file_doc.file_url


def get_qr_code_bytes(data: str, logo_url: str = None, format: str = "PNG") -> bytes:
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_H,
        box_size=10,
        border=4
    )
    qr.add_data(data)
    qr.make(fit=True)

    img = qr.make_image(
        fill_color="blue",
        back_color="white",
        image_factory=StyledPilImage,
        module_drawer=RoundedModuleDrawer()
    )

    if logo_url:
        try:
            response = requests.get(logo_url, timeout=10, verify=False)
            response.raise_for_status()
            logo = Image.open(BytesIO(response.content))

            logo_size = int(min(img.size) / 4)
            logo = logo.resize((logo_size, logo_size), Image.LANCZOS)

            pos = (
                (img.size[0] - logo.size[0]) // 2,
                (img.size[1] - logo.size[1]) // 2
            )

            img = img.convert('RGBA')
            logo = logo.convert('RGBA')
            img.paste(logo, pos, logo)

        except Exception as e:
            logger.error(f"Logo processing error (PO QR): {e}")

    buffered = BytesIO()
    img.save(buffered, format=format)
    return buffered.getvalue()