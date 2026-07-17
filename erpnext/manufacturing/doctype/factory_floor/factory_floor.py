# Copyright (c) 2026, Frappe Technologies Pvt. Ltd. and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class FactoryFloor(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from erpnext.manufacturing.doctype.factory_floor_cleaning_table.factory_floor_cleaning_table import FactoryFloorCleaningTable
		from frappe.types import DF

		amended_from: DF.Link | None
		table_oftv: DF.Table[FactoryFloorCleaningTable]
		work_order: DF.Data | None
	# end: auto-generated types

	pass
