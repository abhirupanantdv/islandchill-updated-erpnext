frappe.pages["operational-dashboar"].on_page_load = function (wrapper) {
	frappe.ui.make_app_page({
		parent: wrapper,
		title: __("Operational Dashboard"),
		single_column: true,
	});
};

frappe.pages["operational-dashboar"].on_page_show = function (wrapper) {
	load_desk_page(wrapper);
};

function load_desk_page(wrapper) {
	let $parent = $(wrapper).find(".layout-main-section");
	$parent.empty();

	frappe.require("operational_dashboar.bundle.jsx").then(() => {
		frappe.operational_dashboar = new frappe.ui.OperationalDashboar({
			wrapper: $parent,
			page: wrapper.page,
		});
	});
}