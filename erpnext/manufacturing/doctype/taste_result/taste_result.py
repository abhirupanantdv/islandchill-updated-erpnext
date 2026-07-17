# Copyright (c) 2026, Frappe Technologies Pvt. Ltd. and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class TasteResult(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from frappe.types import DF

		parent: DF.Data
		parentfield: DF.Data
		parenttype: DF.Data
		sample_date: DF.Date | None
		sample_size: DF.Data | None
		taste_done_by: DF.Link | None
		taste_result: DF.Link | None
		test_result: DF.Data | None
		verified_by: DF.Link | None
	# end: auto-generated types

	pass
