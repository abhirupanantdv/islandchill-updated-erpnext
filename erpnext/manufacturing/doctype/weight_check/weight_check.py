# Copyright (c) 2026, Frappe Technologies Pvt. Ltd. and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class WeightCheck(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from erpnext.manufacturing.doctype.weight_check_table.weight_check_table import WeightCheckTable
		from frappe.types import DF

		amended_from: DF.Link | None
		weight_check_data: DF.Table[WeightCheckTable]
		work_order: DF.Data | None
	# end: auto-generated types

	pass
