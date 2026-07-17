# Copyright (c) 2026, Frappe Technologies Pvt. Ltd. and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class StandardForm17ForFirstAid(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from frappe.types import DF

		amended_from: DF.Link | None
		causes_of_injury: DF.SmallText | None
		date: DF.Date | None
		employee__person_injured: DF.Link | None
		first_aid_given_by: DF.SmallText | None
		first_aid_treatment_given: DF.SmallText | None
		further_treatment_if_any: DF.SmallText | None
		time: DF.Time | None
		type_of_injury: DF.Literal["", "Minor (small cuts, bruises etc.)", "Serious (major injury such as fracture)", "Need Immediate Medical Attention"]
		verified_by: DF.Link | None
		work_order: DF.Data | None
	# end: auto-generated types

	pass
