# Copyright (c) 2026, Frappe Technologies Pvt. Ltd. and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class HourlyWeightCheckForm(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from erpnext.manufacturing.doctype.hourly_check_table.hourly_check_table import HourlyCheckTable
		from frappe.types import DF

		amended_from: DF.Link | None
		date: DF.Date | None
		line: DF.Link | None
		product: DF.Data | None
		qc_name: DF.Data | None
		size: DF.Data | None
		supervisor_name: DF.Link | None
		supervisor_review: DF.SmallText | None
		table_ycve: DF.Table[HourlyCheckTable]
		target_fill_weight: DF.Float
		tolerance_limit_max: DF.Float
		tolerance_limit_min: DF.Float
	# end: auto-generated types

	pass
