# Copyright (c) 2026, Frappe Technologies Pvt. Ltd. and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class Sanitation(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from erpnext.manufacturing.doctype.sanitation_table.sanitation_table import SanitationTable
		from frappe.types import DF

		amended_from: DF.Link | None
		sanitation_details: DF.Table[SanitationTable]
	# end: auto-generated types

	pass
