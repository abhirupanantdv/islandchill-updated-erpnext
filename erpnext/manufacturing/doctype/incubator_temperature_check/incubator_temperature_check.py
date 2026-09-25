# Copyright (c) 2026, Frappe Technologies Pvt. Ltd. and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class IncubatorTemperatureCheck(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from frappe.types import DF

		check_no: DF.Int
		incubator_no: DF.Int
		parent: DF.Data
		parentfield: DF.Data
		parenttype: DF.Data
		thermometer_reading: DF.Float
		time: DF.Time | None
		unit: DF.Literal["", "\u00b0C", "\u00b0F"]
	# end: auto-generated types

	pass
