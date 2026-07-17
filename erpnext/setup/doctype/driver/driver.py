# Copyright (c) 2017, Frappe Technologies Pvt. Ltd. and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class Driver(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from erpnext.setup.doctype.driving_license_category.driving_license_category import DrivingLicenseCategory
		from frappe.model.document import Document
		from frappe.types import DF

		address: DF.Link | None
		cell_number: DF.Data | None
		driver_category: DF.Literal["Employee", "Contract"]
		driver_documents: DF.Table[Document]
		driving_license_category: DF.Table[DrivingLicenseCategory]
		employee: DF.Link | None
		expiry_date: DF.Date | None
		full_name: DF.Data
		issuing_date: DF.Date | None
		license_number: DF.Data | None
		naming_series: DF.Literal["HR-DRI-.YYYY.-"]
		profile_photo: DF.Attach | None
		status: DF.Literal["Active", "Suspended", "Left"]
		transporter: DF.Link | None
		user: DF.Link | None
	# end: auto-generated types

	def validate(self):
		if self.employee:
			self.user = frappe.get_value("Employee", self.employee, "user_id")
