# Copyright (c) 2026, Frappe Technologies Pvt. Ltd. and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class ChemicalTest(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from erpnext.manufacturing.doctype.taste_and_particle_table.taste_and_particle_table import TasteandParticleTable
		from frappe.model.document import Document
		from frappe.types import DF

		alocohol__check_after_change_from_rtd_to_csd: DF.Percent
		amended_from: DF.Link | None
		analyst: DF.Link | None
		brix_check_after_change_over_rtd_to_water: DF.Float
		comments: DF.SmallText | None
		date: DF.Date | None
		ph_level: DF.Float
		reagents: DF.Table[Document]
		sanitation_and_cip_check: DF.Table[Document]
		table_tncp: DF.Table[Document]
		taste_and_particle_check: DF.Table[TasteandParticleTable]
		tds_level: DF.Float
		time: DF.Time | None
		time_2: DF.Time | None
		type_of_water: DF.Literal["", "PET", "BIB"]
		verified_by: DF.Link | None
		work_order: DF.Data | None
	# end: auto-generated types

	pass
