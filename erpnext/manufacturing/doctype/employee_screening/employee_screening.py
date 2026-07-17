# Copyright (c) 2026, Frappe Technologies Pvt. Ltd. and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class EmployeeScreening(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from frappe.types import DF

		above_done_by: DF.Link | None
		blood_pressure: DF.Data | None
		comments: DF.SmallText | None
		date: DF.Date | None
		employee_name: DF.Link | None
		hygiene: DF.Data | None
		physical_appearance: DF.Data | None
		skin_infection_and_sores: DF.Data | None
		verified_by: DF.Link | None
	# end: auto-generated types

	pass
