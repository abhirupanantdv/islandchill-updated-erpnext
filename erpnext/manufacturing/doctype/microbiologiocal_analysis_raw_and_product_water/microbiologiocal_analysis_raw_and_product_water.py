# Copyright (c) 2026, Frappe Technologies Pvt. Ltd. and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class MicrobiologiocalAnalysisRawandProductWater(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from erpnext.manufacturing.doctype.microbiological_sample_table.microbiological_sample_table import Microbiologicalsampletable
		from frappe.types import DF

		amended_from: DF.Link | None
		analyst: DF.Link | None
		approved_by: DF.Link | None
		comments: DF.SmallText | None
		compact_dry_ec: DF.Data | None
		date_of_analysis: DF.Date | None
		date_of_product: DF.Date | None
		hpc_incubation_in_date_and_time: DF.Datetime | None
		hpc_incubation_out_date: DF.Datetime | None
		incubator_no_tcc_and_hpc: DF.Literal["", "1", "2", "3"]
		market: DF.Literal["", "Local", "Export"]
		pipette_lot: DF.Data | None
		product_size: DF.Data | None
		spc_agar_date: DF.Date | None
		table_aqat: DF.Table[Microbiologicalsampletable]
		tcc_incubation_in_date_and_time: DF.Datetime | None
		tcc_incubation_out_date_and_time: DF.Datetime | None
		vessel: DF.Data | None
		work_order: DF.Data | None
	# end: auto-generated types

	pass
