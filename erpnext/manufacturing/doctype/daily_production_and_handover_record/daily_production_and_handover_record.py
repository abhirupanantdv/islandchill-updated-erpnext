# Copyright (c) 2026, Frappe Technologies Pvt. Ltd. and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class DailyProductionAndHandoverRecord(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from frappe.types import DF

		amended_from: DF.Link | None
		boc_start: DF.Data | None
		boc_stop: DF.Data | None
		comments: DF.Text | None
		crew_blowing: DF.Data | None
		crew_filler: DF.Data | None
		crew_infeed: DF.Data | None
		crew_lab: DF.Data | None
		crew_labeller: DF.Data | None
		crew_water: DF.Data | None
		date: DF.Date | None
		efl_start: DF.Data | None
		efl_stop: DF.Data | None
		endorsed_by: DF.Link | None
		filler_counter: DF.Data | None
		labeller_counter: DF.Data | None
		lpg_start: DF.Data | None
		lpg_stop: DF.Data | None
		market: DF.Data | None
		packing_type: DF.Data | None
		product_desc: DF.Data | None
		product_size: DF.Data | None
		received_by: DF.Link | None
		supervisor: DF.Link | None
		time_start: DF.Time | None
		time_stop: DF.Time | None
		warehouse_cases: DF.Int
		waste_bottles: DF.Int
		waste_caps: DF.Int
		waste_cartons: DF.Int
		waste_ldpe: DF.Data | None
		waste_preform: DF.Int
		waste_samples: DF.Int
		work_order: DF.Data | None
	# end: auto-generated types

	pass
