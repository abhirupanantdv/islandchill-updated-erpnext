# Copyright (c) 2026, Frappe Technologies Pvt. Ltd. and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class IncubatorTemperatureRecord(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from erpnext.manufacturing.doctype.incubator_temperature_check.incubator_temperature_check import IncubatorTemperatureCheck
		from frappe.types import DF

		amended_from: DF.Link | None
		approved_by: DF.Link | None
		checked_by: DF.Link | None
		comments: DF.SmallText | None
		date: DF.Date | None
		form_revision_date: DF.Date | None
		revision_no: DF.Data | None
		table_wahj: DF.Table[IncubatorTemperatureCheck]
		verified_by: DF.Link | None
		work_order: DF.Data | None
	# end: auto-generated types

	pass
