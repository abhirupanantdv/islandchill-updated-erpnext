# Copyright (c) 2026, Frappe Technologies Pvt. Ltd. and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class CleaningofLabandOfficeTable(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from frappe.types import DF

		checked_by: DF.Link | None
		cleaning_done: DF.Literal["Completed", "Not Completed"]
		cleaning_purpose: DF.Link | None
		date_time: DF.Datetime | None
		duties_performed_by: DF.Link | None
		parent: DF.Data
		parentfield: DF.Data
		parenttype: DF.Data
	# end: auto-generated types

	pass
