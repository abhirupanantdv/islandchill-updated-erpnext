# Copyright (c) 2026, Frappe Technologies Pvt. Ltd. and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class TasteTestandVisualInspection(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from frappe.model.document import Document
		from frappe.types import DF

		amended_from: DF.Link | None
		approved_by: DF.Link | None
		form_date: DF.Date | None
		particle_count_details: DF.Table[Document]
		revision_date: DF.Date | None
		revision_no: DF.Data | None
		taste_test_details: DF.Table[Document]
	# end: auto-generated types

	pass
