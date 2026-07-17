# Copyright (c) 2026, Frappe Technologies Pvt. Ltd. and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class VisualInspectionTable(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from frappe.types import DF

		parent: DF.Data
		parentfield: DF.Data
		parenttype: DF.Data
		particle_count: DF.Data | None
		particle_count_done_by: DF.Link | None
		particle_count_type: DF.Link | None
		sample_date: DF.Date | None
		sample_size: DF.Data | None
		verified_by: DF.Link | None
	# end: auto-generated types

	pass
