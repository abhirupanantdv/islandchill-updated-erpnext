# Copyright (c) 2026, Frappe Technologies Pvt. Ltd. and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class TasteTestandVisualInspection(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from erpnext.manufacturing.doctype.taste_result.taste_result import TasteResult
		from erpnext.manufacturing.doctype.visual_inspection_table.visual_inspection_table import VisualInspectionTable
		from frappe.types import DF

		amended_from: DF.Link | None
		taste_test: DF.Table[TasteResult]
		visual_inspection: DF.Table[VisualInspectionTable]
		work_order: DF.Data | None
	# end: auto-generated types

	pass
