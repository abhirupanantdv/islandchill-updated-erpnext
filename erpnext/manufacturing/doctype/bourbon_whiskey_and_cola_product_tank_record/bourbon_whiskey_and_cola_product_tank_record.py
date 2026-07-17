# Copyright (c) 2026, Frappe Technologies Pvt. Ltd. and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class BourbonWhiskeyAndColaProductTankRecord(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from erpnext.manufacturing.doctype.bourbon_whiskey_and_cola_recipe_item.bourbon_whiskey_and_cola_recipe_item import BourbonWhiskeyandColaRecipeItem
		from frappe.types import DF

		amended_from: DF.Link | None
		analysed_by: DF.Link | None
		brix_mixer: DF.Float
		brix_mixer_by: DF.Data | None
		brix_product: DF.Float
		brix_product_by: DF.Data | None
		comments: DF.Text | None
		date: DF.Date | None
		finished_ph: DF.Float
		gas_level: DF.Float
		lab_alc: DF.Float
		prepared_by: DF.Link | None
		recipe_checklist: DF.Table[BourbonWhiskeyandColaRecipeItem]
		tank_no: DF.Data | None
		tank_ph: DF.Float
		verified_by: DF.Link | None
		volume: DF.Data | None
		work_order: DF.Data | None
	# end: auto-generated types

	pass
