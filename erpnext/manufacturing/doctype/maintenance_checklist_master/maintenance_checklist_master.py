# Copyright (c) 2026, Frappe Technologies Pvt. Ltd. and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class MaintenanceChecklistMaster(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from erpnext.manufacturing.doctype.maintenance_checklist_item.maintenance_checklist_item import MaintenanceChecklistItem
		from frappe.types import DF

		area: DF.Link | None
		checklist_items: DF.Table[MaintenanceChecklistItem]
		equipment: DF.Link | None
	# end: auto-generated types

	pass
