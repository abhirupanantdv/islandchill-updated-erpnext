# Copyright (c) 2026, Frappe Technologies Pvt. Ltd. and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class CleaningofLabandOffice(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from erpnext.manufacturing.doctype.cleaning_of_lab_and_office_table.cleaning_of_lab_and_office_table import CleaningofLabandOfficeTable
		from frappe.types import DF

		amended_from: DF.Link | None
		table_ntim: DF.Table[CleaningofLabandOfficeTable]
		work_order: DF.Data | None
	# end: auto-generated types

	pass
