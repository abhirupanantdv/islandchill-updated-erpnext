# Copyright (c) 2026, Frappe Technologies Pvt. Ltd. and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class SwabTesttable(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from frappe.types import DF

		blowing: DF.Data | None
		clean_room: DF.Data | None
		filteration_area: DF.Data | None
		infeed: DF.Data | None
		labelling: DF.Data | None
		parent: DF.Data
		parentfield: DF.Data
		parenttype: DF.Data
		warehouse: DF.Link | None
	# end: auto-generated types

	pass
