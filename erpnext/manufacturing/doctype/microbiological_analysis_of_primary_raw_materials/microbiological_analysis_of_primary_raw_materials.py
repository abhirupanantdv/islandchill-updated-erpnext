# Copyright (c) 2026, Frappe Technologies Pvt. Ltd. and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class MicrobiologicalAnalysisofPrimaryRawMaterials(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from erpnext.manufacturing.doctype.analysis_and_results_table.analysis_and_results_table import AnalysisandResultsTable
		from erpnext.manufacturing.doctype.result_analysis_table.result_analysis_table import ResultAnalysisTable
		from frappe.types import DF

		amended_from: DF.Link | None
		analyst: DF.Link | None
		bib_inner_bag: DF.Data | None
		closures_lot_no: DF.Data | None
		comments: DF.SmallText | None
		date: DF.Date | None
		date_of_analysis: DF.Date | None
		negative_or_absent_for_coliform_and_ecoli: DF.Data | None
		preform_lot_no: DF.Data | None
		table_gdru: DF.Table[ResultAnalysisTable]
		table_kzci: DF.Table[AnalysisandResultsTable]
		work_order: DF.Data | None
	# end: auto-generated types

	pass
