# Copyright (c) 2026, Frappe Technologies Pvt. Ltd. and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class TrainingEventChildTable(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from frappe.types import DF

		company: DF.Data | None
		end_time: DF.Datetime | None
		event_status: DF.Data | None
		parent: DF.Data
		parentfield: DF.Data
		parenttype: DF.Data
		start_time: DF.Datetime | None
		training_event_name: DF.Link | None
		training_program: DF.Data | None
		type: DF.Data | None
	# end: auto-generated types

	pass
