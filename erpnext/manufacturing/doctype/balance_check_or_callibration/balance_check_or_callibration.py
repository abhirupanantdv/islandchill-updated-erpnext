# Copyright (c) 2026, Frappe Technologies Pvt. Ltd. and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class BalanceCheckorCallibration(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from frappe.types import DF

		amended_from: DF.Link | None
		calibration_verification_status: DF.Literal["Pass", "Fail"]
		checked_by: DF.Link | None
		cleaning_of_the_balance_done_by: DF.Link | None
		comments: DF.SmallText | None
		date: DF.Date | None
		tolerance: DF.Data | None
		using: DF.Data | None
		verified_by: DF.Link | None
		weight_10g: DF.Float
		weight_20g: DF.Float
		weight_50g: DF.Float
		work_order: DF.Data | None
	# end: auto-generated types

	pass
