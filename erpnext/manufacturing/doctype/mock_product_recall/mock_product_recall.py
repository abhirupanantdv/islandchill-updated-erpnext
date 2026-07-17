# Copyright (c) 2026, Frappe Technologies Pvt. Ltd. and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class MockProductRecall(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from erpnext.manufacturing.doctype.mock_producttable.mock_producttable import MockProductTable
		from frappe.types import DF

		amended_from: DF.Link | None
		cases_in_distribution: DF.Data | None
		cases_stock_on_hand: DF.Data | None
		comments_or_issues_faced_to_obtain_any_information: DF.SmallText | None
		date: DF.Date | None
		details: DF.Table[MockProductTable]
		info_by: DF.Link | None
		info_by_1: DF.Link | None
		info_by_2: DF.Link | None
		product_date_to_recall: DF.Date | None
		product_name: DF.Data | None
		recall_initiated_by: DF.Link | None
		time_taken: DF.Data | None
		time_taken_1: DF.Data | None
		time_taken_2: DF.Data | None
		total_amount_produced: DF.Data | None
		total_time_required_obtaining_customer_information: DF.Data | None
		total_time_required_obtaining_information: DF.Data | None
		total_time_required_obtaining_information_1: DF.Data | None
	# end: auto-generated types

	pass
