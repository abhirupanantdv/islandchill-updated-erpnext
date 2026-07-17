# Copyright (c) 2026, Frappe Technologies Pvt. Ltd. and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class Induction(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from erpnext.manufacturing.doctype.induction_areas_checklist.induction_areas_checklist import INDUCTIONAREASCHECKLIST
		from frappe.types import DF

		amended_from: DF.Link | None
		comments: DF.SmallText | None
		induction_areas_checklist: DF.Table[INDUCTIONAREASCHECKLIST]
		inductors_date: DF.Date | None
		inductors_name: DF.Link | None
		name1: DF.Data | None
		names: DF.Data | None
		reason_for_visit: DF.Literal["", "Audit", "Tour", "Other"]
		specify_other_reason: DF.Data | None
		visiting_areas: DF.Data | None
		work_order: DF.Data | None
	# end: auto-generated types

	pass
