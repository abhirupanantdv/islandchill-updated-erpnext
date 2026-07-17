# Copyright (c) 2026, Frappe Technologies Pvt. Ltd. and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class CSD_RTD_Line_Data_Coder(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from frappe.types import DF

		approval: DF.Literal["", "Yes", "No"]
		date: DF.Date | None
		description: DF.Link | None
		parent: DF.Data
		parentfield: DF.Data
		parenttype: DF.Data
		remarks: DF.Data | None
		standard_time_min: DF.Data | None
	# end: auto-generated types

	pass
