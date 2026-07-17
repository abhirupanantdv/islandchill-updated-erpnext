# Copyright (c) 2026, Frappe Technologies Pvt. Ltd. and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class INDUCTIONAREASCHECKLIST(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from frappe.types import DF

		approval: DF.Literal["", "YES", "NO"]
		areas: DF.Literal["", "Company Policy (ISO 9001:2015, HACCP, Harassment, Health & Safety )", "Dress Code (jewelry policy, sanitizing hands, hair nets/face masks, safety shoes)", "No use of Mobile Phones in Production area", "No use of ear plugs or ear muffs in following section", "Toilets/ Change Rooms", "Smoking/Non Smoking Areas", "Authorized/Unauthorized Areas", "Hazard Reporting Procedures (Damaged Bait Stations, incomplete structures, etc.)", "Accident/Incident Reporting Procedures", "Evacuation Procedures", "Nearest Exit in the Case of Emergency", "Location of Nearest Fire Fighting Equipment", "Location of First Aid Kit/Certified first aiders", "Any health issues or food poisoning has occurred at least 2 weeks prior to factory visit", "Location of MSDS"]
		parent: DF.Data
		parentfield: DF.Data
		parenttype: DF.Data
	# end: auto-generated types

	pass
