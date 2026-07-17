# Copyright (c) 2026, Frappe Technologies Pvt. Ltd. and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class equipmentsanitationandcip(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from frappe.types import DF

		amended_from: DF.Link | None
		chemicalmethod_used: DF.Link
		concentration_ppm__: DF.Data | None
		contact_time_mins: DF.Int
		date: DF.Date
		equipmentline_cleaned: DF.Link
		observations__remarks: DF.SmallText | None
		performed_by_operator: DF.Link
		sanitation_result: DF.Literal["", "Satisfactory", "Unsatisfactory"]
		time: DF.Time
		verified_by_supervisor: DF.Link | None
		work_order: DF.Data | None
	# end: auto-generated types

	pass
