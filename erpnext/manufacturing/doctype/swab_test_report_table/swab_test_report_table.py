# Copyright (c) 2026, Frappe Technologies Pvt. Ltd. and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class SwabTestReportTable(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from frappe.types import DF

		hpc: DF.Data | None
		location: DF.Data | None
		mould: DF.Data | None
		parent: DF.Data
		parentfield: DF.Data
		parenttype: DF.Data
		yeast: DF.Data | None
	# end: auto-generated types

	pass
