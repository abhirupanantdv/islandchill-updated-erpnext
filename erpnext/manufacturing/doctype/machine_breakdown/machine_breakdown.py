# Copyright (c) 2026, Frappe Technologies Pvt. Ltd. and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class MachineBreakdown(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from frappe.types import DF

		amended_from: DF.Link | None
		approved_by: DF.Link | None
		approved_by_1: DF.Link | None
		approved_by_2: DF.Link | None
		breakdown_date: DF.Date | None
		breakdown_description: DF.SmallText | None
		breakdown_time: DF.Time | None
		checked_by: DF.Link | None
		checked_by_1: DF.Link | None
		date_repaired: DF.Date | None
		descriptionof_work_carried_out: DF.SmallText | None
		machine_name: DF.Data | None
		machine_no: DF.Data | None
		overall_comments: DF.SmallText | None
		parts_used: DF.SmallText | None
		received_by: DF.Link | None
		repaired_done_by: DF.Link | None
		requestor_name: DF.Link | None
		time_repaired: DF.Time | None
		work_in_charge_assessment: DF.Literal["", "Maintenance", "Contractor"]
		work_order: DF.Data | None
	# end: auto-generated types

	pass
