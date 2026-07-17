# Copyright (c) 2026, Frappe Technologies Pvt. Ltd. and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class RecallReview(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from erpnext.manufacturing.doctype.employee_table.employee_table import employeetable
		from frappe.types import DF

		amended_from: DF.Link | None
		attendees: DF.TableMultiSelect[employeetable]
		how_can_we_improve_next_time_and_be_quickaccurate: DF.SmallText | None
		total_cost_of_recall: DF.Data | None
		total_length_of_time_for_recall: DF.Data | None
		what_actions_were_taken_to_ensure_this_issue_does_not_reoccur: DF.SmallText | None
		what_course_of_action_was_taken_to_resolve_the_issue: DF.SmallText | None
		who_were_responsible_for_verifying_and_monitoring: DF.TableMultiSelect[employeetable]
		why_was_there_a_recall: DF.SmallText | None
	# end: auto-generated types

	pass
