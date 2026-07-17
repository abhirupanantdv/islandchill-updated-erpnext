frappe.pages["work_order_main_page"].on_page_load = function (wrapper) {
	frappe.ui.make_app_page({
		parent: wrapper,
		title: __("Work_Order_Main_Page_Test"),
		single_column: true,
	});
};

frappe.pages["work_order_main_page"].on_page_show = function (wrapper) {
	load_desk_page(wrapper);
};

function load_desk_page(wrapper) {
	let $parent = $(wrapper).find(".layout-main-section");
	$parent.empty();

	frappe.require("work_order_main_page.bundle.jsx").then(() => {
		frappe.work_order_main_page = new frappe.ui.Work_Order_Main_Page({
			wrapper: $parent,
			page: wrapper.page,
		});
	});
}