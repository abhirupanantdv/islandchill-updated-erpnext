# Copyright (c) 2026, Frappe Technologies Pvt. Ltd. and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class ChemicalTest(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from erpnext.manufacturing.doctype.product_water_table.product_water_table import ProductWaterTable
		from erpnext.manufacturing.doctype.taste_and_particle_table.taste_and_particle_table import TasteandParticleTable
		from frappe.types import DF

		alocohol__check_after_change_from_rtd_to_csd: DF.Percent
		amended_from: DF.Link | None
		analyst: DF.Link | None
		brix_check_after_change_over_rtd_to_water: DF.Float
		check_using: DF.Float
		comments: DF.SmallText | None
		date: DF.Date | None
		ph_check_for_buffer_no: DF.Data | None
		ph_check_for_buffer_no_2: DF.Data | None
		ph_check_for_buffer_result: DF.Float
		ph_check_for_buffer_result_2: DF.Float
		ph_level: DF.Float
		result: DF.Float
		result_2: DF.Float
		table_tncp: DF.Table[ProductWaterTable]
		taste_and_particle_check: DF.Table[TasteandParticleTable]
		tds_level: DF.Float
		time: DF.Time | None
		time_2: DF.Time | None
		type_of_water: DF.Literal["", "PET", "BIB"]
		verified_by: DF.Link | None
		work_order: DF.Data | None
	# end: auto-generated types

	pass
