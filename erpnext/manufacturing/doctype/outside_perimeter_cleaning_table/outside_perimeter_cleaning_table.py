# Copyright (c) 2026, Frappe Technologies Pvt. Ltd. and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class OutsidePerimeterCleaningTable(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from frappe.types import DF

		actions_taken_for_the_perimeter_clearing: DF.SmallText | None
		amended_from: DF.Link | None
		date: DF.Date | None
		employee: DF.Link | None
		employee_name: DF.Data | None
		verified_by: DF.Link | None
	# end: auto-generated types

	pass
