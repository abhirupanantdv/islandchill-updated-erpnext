# Copyright (c) 2026, Frappe Technologies Pvt. Ltd. and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class DailyPreventativeMaintenanceSchedule(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from erpnext.manufacturing.doctype.daily_pm_schedule_item.daily_pm_schedule_item import DailyPMScheduleItem
		from frappe.types import DF

		amended_from: DF.Link | None
		area: DF.Link | None
		computed_metrics: DF.Data | None
		equipment: DF.Link | None
		maintenance_details: DF.Table[DailyPMScheduleItem]
		overall_remarks: DF.Data | None
		sign_of_supervisor: DF.Link | None
		sign_of_the_operator: DF.Link | None
		work_order: DF.Data | None
	# end: auto-generated types

	pass
