# Copyright (c) 2026, Frappe Technologies Pvt. Ltd. and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class EnviromentalSwabTest(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from erpnext.manufacturing.doctype.incubator_info_and_result_analysis.incubator_info_and_result_analysis import IncubatorInfoandResultAnalysis
		from erpnext.manufacturing.doctype.swab_test_report_table.swab_test_report_table import SwabTestReportTable
		from erpnext.manufacturing.doctype.swab_test_table.swab_test_table import SwabTesttable
		from frappe.types import DF

		amended_from: DF.Link | None
		analyst: DF.Link | None
		approved_by: DF.Link | None
		comments: DF.SmallText | None
		date_1: DF.Date | None
		date_of_swab: DF.Date | None
		hpc_agar_date_prepared: DF.Date | None
		table_hovh: DF.Table[SwabTestReportTable]
		table_mxza: DF.Table[SwabTesttable]
		table_tmcr: DF.Table[IncubatorInfoandResultAnalysis]
		test_for: DF.Link | None
		work_order: DF.Data | None
		yeast_and_mold_agar_date_prepared: DF.Date | None
	# end: auto-generated types

	pass
