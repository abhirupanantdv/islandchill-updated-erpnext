# Copyright (c) 2026, Frappe Technologies Pvt. Ltd. and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class ContainerInspection(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from frappe.types import DF

		any_damages: DF.Data | None
		any_odour_observed: DF.Data | None
		comments: DF.SmallText | None
		container_no: DF.Data | None
		date: DF.Date | None
		inspected_by: DF.Link | None
		market: DF.Data | None
		odour_check_done: DF.Literal["", "Yes", "No"]
		verified_by: DF.Link | None
		visual_inspection_done: DF.Literal["", "Yes", "No"]
	# end: auto-generated types

	pass
