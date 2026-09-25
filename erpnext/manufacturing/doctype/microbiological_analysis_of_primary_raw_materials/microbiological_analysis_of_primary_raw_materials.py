# Copyright (c) 2026, Frappe Technologies Pvt. Ltd. and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class MicrobiologicalAnalysisofPrimaryRawMaterials(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from frappe.model.document import Document
		from frappe.types import DF

		amended_from: DF.Link | None
		analysis_results: DF.Table[Document]
		analyst: DF.Link | None
		closures_lot_no: DF.Data | None
		comments: DF.SmallText | None
		date: DF.Date | None
		date_of_analysis: DF.Date | None
		incubation_in_date: DF.Datetime | None
		incubation_out_date: DF.Datetime | None
		incubator_no: DF.Literal["", "1", "2", "3"]
		incubator_type: DF.Literal["", "TCC", "E-Coli", "Both"]
		negative_or_absent_for_coliform_and_ecoli: DF.Data | None
		overall_result: DF.Literal["", "Pass", "Fail"]
		preform_lot_no: DF.Data | None
		work_order: DF.Data | None
	# end: auto-generated types

	pass
