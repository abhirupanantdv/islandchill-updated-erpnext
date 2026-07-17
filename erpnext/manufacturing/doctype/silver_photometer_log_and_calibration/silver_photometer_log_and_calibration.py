# Copyright (c) 2026, Frappe Technologies Pvt. Ltd. and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class SilverPhotometerLogandCalibration(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from erpnext.manufacturing.doctype.silver_photometer_readings.silver_photometer_readings import SilverPhotometerReadings
		from frappe.types import DF

		amended_from: DF.Link | None
		calibration1: DF.Data | None
		calibration2: DF.Data | None
		calibration3: DF.Data | None
		date1: DF.Date | None
		date2: DF.Date | None
		date3: DF.Date | None
		rows1: DF.Table[SilverPhotometerReadings]
		rows2: DF.Table[SilverPhotometerReadings]
		rows3: DF.Table[SilverPhotometerReadings]
		tech1: DF.Link | None
		tech2: DF.Link | None
		tech3: DF.Link | None
		verifier1: DF.Link | None
		verifier2: DF.Link | None
		verifier3: DF.Link | None
		work_order: DF.Data | None
	# end: auto-generated types

	pass
