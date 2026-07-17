# Copyright (c) 2026, Frappe Technologies Pvt. Ltd. and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class CustomerTrainingDetails(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from frappe.types import DF

		attach_photo: DF.Attach | None
		consumption: DF.Link | None
		description: DF.Data | None
		parent: DF.Data
		parentfield: DF.Data
		parenttype: DF.Data
		police_record: DF.Data | None
		purpose: DF.Data | None
		qty: DF.Float
		time_stamp: DF.Datetime | None
	# end: auto-generated types

	pass
