# Copyright (c) 2026, Frappe Technologies Pvt. Ltd. and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class InjuryReport(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from frappe.model.document import Document
		from frappe.types import DF

		activity_being_performed: DF.SmallText | None
		agency_of_accidentincidentdisease: DF.Data | None
		apprentice: DF.Check
		body_location_of_injury: DF.Data | None
		both_training_types: DF.Check
		causes_of_injury: DF.SmallText | None
		contractor__subcontractor: DF.Check
		corrective_action_identified: DF.SmallText | None
		date: DF.Date | None
		date_completed: DF.Date | None
		date_notified_to_chief_inspector: DF.Date | None
		date_of_action_taken: DF.Date | None
		date_of_birth: DF.Date | None
		date_of_resumption_of_work: DF.Date | None
		date_reported: DF.Date | None
		days: DF.Int
		description_and_location_of_personal_damage: DF.TextEditor | None
		description_of_occurrence: DF.TextEditor | None
		dob: DF.Date | None
		employee__person_injured: DF.Link | None
		employee_of_company: DF.Check
		employees_preferred_language: DF.Data | None
		employer__principal_contractor: DF.Data | None
		employment_status: DF.Literal["", "Permanent", "Temporary", "Contract", "Casual", "Part Time", "Full Time"]
		employment_type: DF.Literal["", "Full Time", "Part Time", "Casual", "Temporary", "Contract", "Apprentice", "Self Employed"]
		first_aid_given_by: DF.Link | None
		first_aid_treatment_given: DF.SmallText | None
		first_name: DF.Data | None
		form_completed_by: DF.Data | None
		further_treatment_if_any: DF.SmallText | None
		given_names: DF.Data | None
		how_and_where_did_accidentdiseaseincident_happen: DF.SmallText | None
		how_injury_was_sustained: DF.TextEditor | None
		how_long_in_this_occupation_years: DF.Int
		induction_training: DF.Check
		main_activity_at_workplace: DF.Data | None
		main_task_performed: DF.SmallText | None
		medical_treatment: DF.Check
		months: DF.Int
		name_of_injured_person: DF.Link | None
		name_of_medical_practitioner: DF.Data | None
		nature_of_injurydisease: DF.Literal["", "Cut / Laceration", "Bruise", "Burn", "Fracture", "Sprain / Strain", "Dislocation", "Eye Injury", "Disease", "Hearing Loss", "Fatality", "Other"]
		no_training: DF.Check
		number_of_employees_at_site: DF.Int
		occupation__job_title: DF.Data | None
		occupational_job_title: DF.Data | None
		ohs_committee_at_workplace: DF.Check
		other_employment_type: DF.Data | None
		other_name: DF.Data | None
		outcome_of_injurydisease: DF.Literal["", "Recovered", "Recovering", "Permanent Disability", "Temporary Disability", "Fatality", "Unknown"]
		outworker: DF.Check
		period_of_incapacity_days: DF.Int
		period_of_incapacity_months: DF.Int
		period_of_incapacity_years: DF.Int
		pieceworker: DF.Check
		position: DF.Data | None
		preventative_actions: DF.Table[Document]
		registered_company_name: DF.Link | None
		registered_office_address: DF.SmallText | None
		rehabilitation_required: DF.Literal["", "Required", "Not Required"]
		rehabilitation_start_date: DF.Date | None
		residential_address: DF.SmallText | None
		self_employed: DF.Check
		sex: DF.Literal["", "Male", "Female", "Other"]
		sex_type: DF.Literal["", "Male", "Female", "Other"]
		shift_arrangement: DF.Literal["", "Fixed Standard Hours", "Flexible Hours", "Rotating Shift"]
		signature: DF.AttachImage | None
		signature_date: DF.Date | None
		sur_name: DF.Data | None
		surname: DF.Data | None
		task_specific_training: DF.Check
		time: DF.Time | None
		time_and_date_of_accidentdiseaseincident: DF.Datetime | None
		time_of_injurydisease: DF.Time | None
		total_working_days_lost: DF.Int
		trading_name: DF.Data | None
		trainee: DF.Check
		type_of_incident: DF.Literal["", "Accident", "Disease", "Near Miss", "Injury", "Property Damage", "Other"]
		type_of_injury: DF.Literal["", "Minor (small cuts, bruises, etc.)", "Serious (major injury such as fracture)", "Need Immediate Medical Attention"]
		unexpected_event_description: DF.TextEditor | None
		verified_by: DF.Link | None
		wage__salary_earner: DF.Check
		work_experience_months: DF.Int
		work_experience_years: DF.Int
		working_hours: DF.Literal["", "8 Hours or Less", "More Than 8 Hours (excluding overtime)"]
		workplace__accident_location: DF.SmallText | None
		workplace_area_of_occurrence: DF.Data | None
		workplace_relationship: DF.Data | None
	# end: auto-generated types

	pass
