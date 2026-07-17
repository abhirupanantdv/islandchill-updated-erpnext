# Copyright (c) 2026, Frappe Technologies Pvt. Ltd. and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class AccidentandDiseaseNotificationReport(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from frappe.types import DF

		address: DF.SmallText | None
		amended_from: DF.Link | None
		corrective_action: DF.Data | None
		date_action_taken: DF.Date | None
		date_notified: DF.Date | None
		date_resumption: DF.Date | None
		days_lost: DF.Int
		details: DF.SmallText | None
		dob: DF.Date | None
		experience: DF.Data | None
		experience_days: DF.Int
		experience_months: DF.Int
		experience_years: DF.Int
		incapacity_period: DF.Data | None
		incident_agency: DF.Data | None
		incident_location: DF.SmallText | None
		incident_time: DF.Datetime | None
		incident_type: DF.Literal["", "Accident", "Disease", "Near Miss"]
		injured_person: DF.Data | None
		job_title: DF.Data | None
		medical_treatment: DF.Data | None
		operator: DF.Data | None
		overall_comments: DF.SmallText | None
		practitioner_name: DF.Data | None
		relationship: DF.Literal["", "Employee", "Contractor", "Trainee", "Apprentice", "Visitor"]
		sex: DF.Literal["", "Male", "Female"]
		supervisor: DF.Data | None
		work_order: DF.Data | None
	# end: auto-generated types

	pass
