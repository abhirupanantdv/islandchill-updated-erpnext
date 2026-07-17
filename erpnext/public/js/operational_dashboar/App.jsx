// // // // // import * as React from "react";

// // // // // export function App() {
// // // // //   const dynamicMessage = React.useState("Hello from App.jsx");
// // // // //   return (
// // // // //     <div className="m-4">
// // // // //       <h3>{dynamicMessage}</h3>
// // // // //       <h4>Start editing at erpnext/public/js/operational_dashboar/App.jsx</h4>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // import * as React from "react";

// // // // // import fillingLineImage from "./assets/filling-line-1.png";
// // // // // import storeDispatchImage from "./assets/store-dispatch.png";

// // // // export function App() {
// // // // 	const sidebarItems = [
// // // // 		{ label: "Dashboard", icon: "⌘", active: true },
// // // // 		{ label: "Work Orders", icon: "▣" },
// // // // 		{ label: "Job Cards", icon: "▤" },
// // // // 		{ label: "Stock", icon: "◫" },
// // // // 		{ label: "Stock Entries", icon: "▧" },
// // // // 		{ label: "Reports", icon: "▥" },
// // // // 		{ label: "Analytics", icon: "◩" },
// // // // 		{ label: "Settings", icon: "⚙" },
// // // // 	];

// // // // 	const kpis = [
// // // // 		{
// // // // 			title: "Good Quantity (Box)",
// // // // 			value: "204.99",
// // // // 			subtitle: "↑ 2.4% vs yesterday",
// // // // 			icon: "🍾",
// // // // 			color: "green",
// // // // 			trend: "up",
// // // // 		},
// // // // 		{
// // // // 			title: "Loose Quantity (Box)",
// // // // 			value: "197.00",
// // // // 			subtitle: "↑ 9.8% vs yesterday",
// // // // 			icon: "🧃",
// // // // 			color: "yellow",
// // // // 			trend: "up",
// // // // 		},
// // // // 		{
// // // // 			title: "Active Work Orders",
// // // // 			value: "24",
// // // // 			subtitle: "Active",
// // // // 			icon: "📋",
// // // // 			color: "blue",
// // // // 			trend: "bars",
// // // // 		},
// // // // 		{
// // // // 			title: "Job Cards In Progress",
// // // // 			value: "42",
// // // // 			subtitle: "In Progress",
// // // // 			icon: "🧾",
// // // // 			color: "purple",
// // // // 			trend: "bars",
// // // // 		},
// // // // 		{
// // // // 			title: "Stock Items",
// // // // 			value: "128",
// // // // 			subtitle: "Active",
// // // // 			icon: "🏬",
// // // // 			color: "orange",
// // // // 			trend: "bars",
// // // // 		},
// // // // 	];

// // // // 	const workOrders = [
// // // // 		{
// // // // 			id: "WO-00045",
// // // // 			item: "Mango Drink 250ml",
// // // // 			target: "300 Box",
// // // // 			good: "197 Box",
// // // // 			loose: "12 Box",
// // // // 			status: "Ready for QC",
// // // // 			statusClass: "warning",
// // // // 		},
// // // // 		{
// // // // 			id: "WO-00046",
// // // // 			item: "Lemon Drink 250ml",
// // // // 			target: "150 Box",
// // // // 			good: "136 Box",
// // // // 			loose: "8 Box",
// // // // 			status: "Completed",
// // // // 			statusClass: "success",
// // // // 		},
// // // // 		{
// // // // 			id: "WO-00047",
// // // // 			item: "Orange Drink 250ml",
// // // // 			target: "300 Box",
// // // // 			good: "285 Box",
// // // // 			loose: "15 Box",
// // // // 			status: "In Progress",
// // // // 			statusClass: "info",
// // // // 		},
// // // // 		{
// // // // 			id: "WO-00048",
// // // // 			item: "Apple Drink 250ml",
// // // // 			target: "250 Box",
// // // // 			good: "241 Box",
// // // // 			loose: "9 Box",
// // // // 			status: "Job Card Open",
// // // // 			statusClass: "purple",
// // // // 		},
// // // // 	];

// // // // 	return (
// // // // 		<>
// // // // 			<style>{`
// // // // 				* {
// // // // 					box-sizing: border-box;
// // // // 				}

// // // // 				body {
// // // // 					margin: 0;
// // // // 					font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
// // // // 					background: #f8fafc;
// // // // 					color: #111827;
// // // // 				}

// // // // 				button {
// // // // 					font-family: inherit;
// // // // 				}

// // // // 				.waters-dashboard {
// // // // 					min-height: 100vh;
// // // // 					display: flex;
// // // // 					background:
// // // // 						radial-gradient(circle at top right, rgba(255, 196, 0, 0.08), transparent 28%),
// // // // 						#f8fafc;
// // // // 				}

// // // // 				.sidebar {
// // // // 					width: 270px;
// // // // 					min-height: 100vh;
// // // // 					background: linear-gradient(180deg, #030405 0%, #07090d 100%);
// // // // 					color: white;
// // // // 					padding: 28px 16px;
// // // // 					display: flex;
// // // // 					flex-direction: column;
// // // // 					position: fixed;
// // // // 					left: 0;
// // // // 					top: 0;
// // // // 					bottom: 0;
// // // // 					z-index: 10;
// // // // 				}

// // // // 				.brand {
// // // // 					display: flex;
// // // // 					align-items: center;
// // // // 					gap: 12px;
// // // // 					margin-bottom: 38px;
// // // // 					padding-left: 12px;
// // // // 				}

// // // // 				.brand-logo {
// // // // 					width: 42px;
// // // // 					height: 42px;
// // // // 					border-radius: 50%;
// // // // 					background: linear-gradient(145deg, #ffd21f, #ff8a00);
// // // // 					display: flex;
// // // // 					align-items: center;
// // // // 					justify-content: center;
// // // // 					font-size: 24px;
// // // // 					font-weight: 900;
// // // // 					color: #111;
// // // // 					box-shadow: 0 0 24px rgba(255, 196, 0, 0.35);
// // // // 				}

// // // // 				.brand h2 {
// // // // 					margin: 0;
// // // // 					font-size: 30px;
// // // // 					line-height: 1;
// // // // 					font-weight: 800;
// // // // 				}

// // // // 				.brand span {
// // // // 					font-size: 13px;
// // // // 					letter-spacing: 1.6px;
// // // // 					font-weight: 700;
// // // // 					color: #e5e7eb;
// // // // 				}

// // // // 				.sidebar-menu {
// // // // 					display: flex;
// // // // 					flex-direction: column;
// // // // 					gap: 10px;
// // // // 				}

// // // // 				.sidebar-item {
// // // // 					border: none;
// // // // 					background: transparent;
// // // // 					color: #e5e7eb;
// // // // 					display: flex;
// // // // 					align-items: center;
// // // // 					gap: 16px;
// // // // 					font-size: 17px;
// // // // 					padding: 14px 16px;
// // // // 					border-radius: 12px;
// // // // 					cursor: pointer;
// // // // 					text-align: left;
// // // // 					transition: 0.25s;
// // // // 				}

// // // // 				.sidebar-item:hover {
// // // // 					background: rgba(255, 255, 255, 0.08);
// // // // 				}

// // // // 				.sidebar-item.active {
// // // // 					background: linear-gradient(135deg, #ffc400, #7a5a00);
// // // // 					color: #111;
// // // // 					font-weight: 700;
// // // // 					box-shadow: 0 12px 28px rgba(255, 196, 0, 0.22);
// // // // 				}

// // // // 				.sidebar-icon {
// // // // 					font-size: 20px;
// // // // 					width: 24px;
// // // // 					text-align: center;
// // // // 				}

// // // // 				.sidebar-bottom {
// // // // 					margin-top: auto;
// // // // 					display: flex;
// // // // 					flex-direction: column;
// // // // 					gap: 18px;
// // // // 				}

// // // // 				.system-card,
// // // // 				.profile-card {
// // // // 					background: rgba(255, 255, 255, 0.04);
// // // // 					border: 1px solid rgba(255, 255, 255, 0.12);
// // // // 					border-radius: 14px;
// // // // 					padding: 18px;
// // // // 				}

// // // // 				.status-dot-row {
// // // // 					display: flex;
// // // // 					align-items: center;
// // // // 					gap: 10px;
// // // // 					color: #d1d5db;
// // // // 					font-size: 14px;
// // // // 					margin-bottom: 10px;
// // // // 				}

// // // // 				.green-dot {
// // // // 					width: 9px;
// // // // 					height: 9px;
// // // // 					border-radius: 999px;
// // // // 					background: #22c55e;
// // // // 					box-shadow: 0 0 14px #22c55e;
// // // // 				}

// // // // 				.system-card strong {
// // // // 					color: #39ff14;
// // // // 					font-size: 14px;
// // // // 				}

// // // // 				.mini-wave {
// // // // 					margin-top: 20px;
// // // // 					height: 26px;
// // // // 					background:
// // // // 						linear-gradient(90deg, transparent 0 5%, #28ff1d 5% 6%, transparent 6% 12%),
// // // // 						linear-gradient(90deg, transparent 0 16%, #28ff1d 16% 18%, transparent 18% 100%);
// // // // 					border-bottom: 2px solid #28ff1d;
// // // // 					opacity: 0.85;
// // // // 				}

// // // // 				.profile-card {
// // // // 					display: flex;
// // // // 					align-items: center;
// // // // 					gap: 12px;
// // // // 				}

// // // // 				.avatar,
// // // // 				.user-avatar {
// // // // 					background: #1f2937;
// // // // 					color: white;
// // // // 					border-radius: 999px;
// // // // 					display: flex;
// // // // 					align-items: center;
// // // // 					justify-content: center;
// // // // 					font-weight: 700;
// // // // 				}

// // // // 				.avatar {
// // // // 					width: 42px;
// // // // 					height: 42px;
// // // // 				}

// // // // 				.profile-card strong {
// // // // 					display: block;
// // // // 					font-size: 15px;
// // // // 				}

// // // // 				.profile-card span {
// // // // 					font-size: 13px;
// // // // 					color: #d1d5db;
// // // // 				}

// // // // 				.down-arrow {
// // // // 					margin-left: auto;
// // // // 				}

// // // // 				.main-content {
// // // // 					margin-left: 270px;
// // // // 					width: calc(100% - 270px);
// // // // 					padding: 28px 34px 34px;
// // // // 				}

// // // // 				.top-header {
// // // // 					display: flex;
// // // // 					justify-content: space-between;
// // // // 					align-items: flex-start;
// // // // 					margin-bottom: 34px;
// // // // 				}

// // // // 				.top-header h1 {
// // // // 					margin: 0;
// // // // 					font-size: 31px;
// // // // 					font-weight: 800;
// // // // 				}

// // // // 				.top-header p {
// // // // 					margin: 8px 0 0;
// // // // 					color: #475569;
// // // // 					font-size: 16px;
// // // // 				}

// // // // 				.top-actions {
// // // // 					display: flex;
// // // // 					align-items: center;
// // // // 					gap: 14px;
// // // // 					flex-wrap: wrap;
// // // // 					justify-content: flex-end;
// // // // 				}

// // // // 				.search-box,
// // // // 				.date-pill {
// // // // 					background: white;
// // // // 					border: 1px solid #e5e7eb;
// // // // 					border-radius: 10px;
// // // // 					box-shadow: 0 8px 22px rgba(15, 23, 42, 0.05);
// // // // 					color: #475569;
// // // // 					font-size: 14px;
// // // // 				}

// // // // 				.search-box {
// // // // 					width: 340px;
// // // // 					padding: 13px 16px;
// // // // 				}

// // // // 				.date-pill {
// // // // 					padding: 11px 16px;
// // // // 					font-weight: 700;
// // // // 					color: #111827;
// // // // 				}

// // // // 				.notification {
// // // // 					width: 38px;
// // // // 					height: 38px;
// // // // 					border-radius: 999px;
// // // // 					background: white;
// // // // 					display: flex;
// // // // 					align-items: center;
// // // // 					justify-content: center;
// // // // 					position: relative;
// // // // 					box-shadow: 0 8px 22px rgba(15, 23, 42, 0.06);
// // // // 				}

// // // // 				.notification span {
// // // // 					position: absolute;
// // // // 					top: -6px;
// // // // 					right: -5px;
// // // // 					background: #ffc400;
// // // // 					color: #111;
// // // // 					font-size: 11px;
// // // // 					font-weight: 800;
// // // // 					width: 20px;
// // // // 					height: 20px;
// // // // 					border-radius: 999px;
// // // // 					display: flex;
// // // // 					align-items: center;
// // // // 					justify-content: center;
// // // // 				}

// // // // 				.user-avatar {
// // // // 					width: 42px;
// // // // 					height: 42px;
// // // // 					background: #050505;
// // // // 				}

// // // // 				.workflow-row {
// // // // 					display: grid;
// // // // 					grid-template-columns: 1fr 88px 1fr 88px 1fr;
// // // // 					align-items: center;
// // // // 					gap: 0;
// // // // 					margin-bottom: 26px;
// // // // 				}

// // // // 				.workflow-card {
// // // // 					background: rgba(255, 255, 255, 0.9);
// // // // 					border: 1px solid #e5e7eb;
// // // // 					box-shadow: 0 16px 35px rgba(15, 23, 42, 0.06);
// // // // 					backdrop-filter: blur(20px);
// // // // 					border-radius: 26px;
// // // // 					padding: 22px 28px;
// // // // 					display: flex;
// // // // 					align-items: center;
// // // // 					gap: 28px;
// // // // 					min-height: 138px;
// // // // 				}

// // // // 				.workflow-icon {
// // // // 					width: 92px;
// // // // 					height: 92px;
// // // // 					border-radius: 999px;
// // // // 					background: #eefbe9;
// // // // 					display: flex;
// // // // 					align-items: center;
// // // // 					justify-content: center;
// // // // 					font-size: 48px;
// // // // 				}

// // // // 				.workflow-card h3 {
// // // // 					margin: 0 0 8px;
// // // // 					font-size: 22px;
// // // // 				}

// // // // 				.workflow-card strong {
// // // // 					font-size: 38px;
// // // // 					line-height: 1;
// // // // 					display: block;
// // // // 					margin-bottom: 10px;
// // // // 				}

// // // // 				.workflow-card p {
// // // // 					margin: 0;
// // // // 					font-size: 16px;
// // // // 					color: #475569;
// // // // 					display: flex;
// // // // 					align-items: center;
// // // // 					gap: 9px;
// // // // 				}

// // // // 				.dot {
// // // // 					width: 12px;
// // // // 					height: 12px;
// // // // 					border-radius: 999px;
// // // // 					display: inline-block;
// // // // 				}

// // // // 				.dot.green {
// // // // 					background: #34c924;
// // // // 				}

// // // // 				.dot.orange {
// // // // 					background: #ff5b1a;
// // // // 				}

// // // // 				.dot.blue {
// // // // 					background: #0066ff;
// // // // 				}

// // // // 				.flow-connector {
// // // // 					display: flex;
// // // // 					align-items: center;
// // // // 					justify-content: center;
// // // // 					gap: 6px;
// // // // 				}

// // // // 				.flow-connector span {
// // // // 					flex: 1;
// // // // 					border-top: 4px dotted #f6b800;
// // // // 				}

// // // // 				.flow-connector button {
// // // // 					width: 38px;
// // // // 					height: 38px;
// // // // 					border-radius: 999px;
// // // // 					border: none;
// // // // 					background: #ffc400;
// // // // 					font-size: 28px;
// // // // 					line-height: 1;
// // // // 					font-weight: 900;
// // // // 					box-shadow: 0 10px 20px rgba(255, 196, 0, 0.25);
// // // // 				}

// // // // 				.kpi-grid {
// // // // 					display: grid;
// // // // 					grid-template-columns: repeat(5, minmax(0, 1fr));
// // // // 					gap: 16px;
// // // // 					margin-bottom: 20px;
// // // // 				}

// // // // 				.kpi-card {
// // // // 					background: white;
// // // // 					border: 1px solid #e5e7eb;
// // // // 					border-radius: 16px;
// // // // 					min-height: 132px;
// // // // 					padding: 20px;
// // // // 					display: flex;
// // // // 					align-items: center;
// // // // 					gap: 16px;
// // // // 					position: relative;
// // // // 					overflow: hidden;
// // // // 					box-shadow: 0 10px 24px rgba(15, 23, 42, 0.05);
// // // // 				}

// // // // 				.kpi-icon {
// // // // 					width: 62px;
// // // // 					height: 62px;
// // // // 					border-radius: 999px;
// // // // 					display: flex;
// // // // 					align-items: center;
// // // // 					justify-content: center;
// // // // 					font-size: 31px;
// // // // 					flex: 0 0 auto;
// // // // 				}

// // // // 				.kpi-icon.green {
// // // // 					background: #e9fbe8;
// // // // 				}

// // // // 				.kpi-icon.yellow {
// // // // 					background: #fff3d1;
// // // // 				}

// // // // 				.kpi-icon.blue {
// // // // 					background: #eaf1ff;
// // // // 				}

// // // // 				.kpi-icon.purple {
// // // // 					background: #f2e7ff;
// // // // 				}

// // // // 				.kpi-icon.orange {
// // // // 					background: #fff5d9;
// // // // 				}

// // // // 				.kpi-info p {
// // // // 					margin: 0;
// // // // 					font-size: 13px;
// // // // 					color: #334155;
// // // // 					font-weight: 700;
// // // // 				}

// // // // 				.kpi-info strong {
// // // // 					display: block;
// // // // 					font-size: 28px;
// // // // 					margin: 7px 0;
// // // // 				}

// // // // 				.kpi-info span {
// // // // 					font-size: 12px;
// // // // 					color: #16a34a;
// // // // 					font-weight: 700;
// // // // 				}

// // // // 				.sparkline {
// // // // 					margin-left: auto;
// // // // 					width: 72px;
// // // // 					height: 38px;
// // // // 					background:
// // // // 						linear-gradient(135deg, transparent 0 16%, #28b42b 16% 18%, transparent 18%),
// // // // 						linear-gradient(45deg, transparent 0 45%, #28b42b 45% 48%, transparent 48%);
// // // // 				}

// // // // 				.bar-chart {
// // // // 					margin-left: auto;
// // // // 					height: 52px;
// // // // 					width: 64px;
// // // // 					display: flex;
// // // // 					align-items: flex-end;
// // // // 					gap: 4px;
// // // // 				}

// // // // 				.bar-chart i {
// // // // 					width: 5px;
// // // // 					background: linear-gradient(180deg, #ffc400, #ffa000);
// // // // 					border-radius: 8px 8px 0 0;
// // // // 				}

// // // // 				.bar-chart i:nth-child(1) { height: 18px; }
// // // // 				.bar-chart i:nth-child(2) { height: 26px; }
// // // // 				.bar-chart i:nth-child(3) { height: 34px; }
// // // // 				.bar-chart i:nth-child(4) { height: 44px; }
// // // // 				.bar-chart i:nth-child(5) { height: 31px; }
// // // // 				.bar-chart i:nth-child(6) { height: 50px; }

// // // // 				.image-grid {
// // // // 					display: grid;
// // // // 					grid-template-columns: 1fr 1fr;
// // // // 					gap: 16px;
// // // // 					margin-bottom: 20px;
// // // // 				}

// // // // 				.live-card {
// // // // 					height: 290px;
// // // // 					border-radius: 16px;
// // // // 					overflow: hidden;
// // // // 					position: relative;
// // // // 					background: #111;
// // // // 					box-shadow: 0 16px 34px rgba(15, 23, 42, 0.12);
// // // // 				}

// // // // 				.live-card img {
// // // // 					width: 100%;
// // // // 					height: 100%;
// // // // 					object-fit: cover;
// // // // 					display: block;
// // // // 					filter: contrast(0.9) saturate(0.82) brightness(0.9);
// // // // 				}

// // // // 				.live-overlay {
// // // // 					position: absolute;
// // // // 					inset: auto 0 0 0;
// // // // 					padding: 28px 24px 20px;
// // // // 					display: flex;
// // // // 					justify-content: space-between;
// // // // 					align-items: flex-end;
// // // // 					background: linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.78));
// // // // 					color: white;
// // // // 				}

// // // // 				.live-overlay h3 {
// // // // 					margin: 0;
// // // // 					font-size: 19px;
// // // // 					display: flex;
// // // // 					align-items: center;
// // // // 					gap: 9px;
// // // // 				}

// // // // 				.live-overlay h3 span {
// // // // 					width: 10px;
// // // // 					height: 10px;
// // // // 					border-radius: 999px;
// // // // 					background: #ffc400;
// // // // 				}

// // // // 				.live-overlay p {
// // // // 					margin: 6px 0 0;
// // // // 					color: #e5e7eb;
// // // // 				}

// // // // 				.live-overlay button {
// // // // 					background: rgba(22, 163, 74, 0.25);
// // // // 					border: 1px solid rgba(34, 197, 94, 0.55);
// // // // 					color: #39ff14;
// // // // 					padding: 9px 18px;
// // // // 					border-radius: 9px;
// // // // 					font-weight: 800;
// // // // 				}

// // // // 				.bottom-grid {
// // // // 					display: grid;
// // // // 					grid-template-columns: 1.35fr 0.85fr 1fr;
// // // // 					gap: 16px;
// // // // 				}

// // // // 				.panel {
// // // // 					background: white;
// // // // 					border: 1px solid #e5e7eb;
// // // // 					border-radius: 16px;
// // // // 					box-shadow: 0 12px 28px rgba(15, 23, 42, 0.05);
// // // // 					padding: 20px;
// // // // 					min-height: 280px;
// // // // 				}

// // // // 				.panel-header {
// // // // 					display: flex;
// // // // 					align-items: center;
// // // // 					justify-content: space-between;
// // // // 					margin-bottom: 14px;
// // // // 				}

// // // // 				.panel h3,
// // // // 				.panel-header h3 {
// // // // 					margin: 0;
// // // // 					font-size: 18px;
// // // // 				}

// // // // 				.panel-header button {
// // // // 					background: white;
// // // // 					border: 1px solid #e5e7eb;
// // // // 					border-radius: 10px;
// // // // 					padding: 9px 15px;
// // // // 					font-weight: 800;
// // // // 				}

// // // // 				table {
// // // // 					width: 100%;
// // // // 					border-collapse: collapse;
// // // // 					font-size: 13px;
// // // // 				}

// // // // 				th {
// // // // 					text-align: left;
// // // // 					color: #64748b;
// // // // 					font-weight: 700;
// // // // 					padding: 12px 8px;
// // // // 					border-bottom: 1px solid #edf2f7;
// // // // 				}

// // // // 				td {
// // // // 					padding: 13px 8px;
// // // // 					font-weight: 700;
// // // // 					border-bottom: 1px solid #f1f5f9;
// // // // 				}

// // // // 				.status-badge {
// // // // 					display: inline-block;
// // // // 					border-radius: 7px;
// // // // 					padding: 6px 10px;
// // // // 					font-size: 12px;
// // // // 					font-weight: 800;
// // // // 				}

// // // // 				.status-badge.warning {
// // // // 					background: #fff3dc;
// // // // 					color: #ff5b1a;
// // // // 				}

// // // // 				.status-badge.success {
// // // // 					background: #e6f8e6;
// // // // 					color: #168b2e;
// // // // 				}

// // // // 				.status-badge.info {
// // // // 					background: #e8f0ff;
// // // // 					color: #1d5cff;
// // // // 				}

// // // // 				.status-badge.purple {
// // // // 					background: #f1e7ff;
// // // // 					color: #7c3aed;
// // // // 				}

// // // // 				.eye-btn {
// // // // 					border: none;
// // // // 					background: transparent;
// // // // 					cursor: pointer;
// // // // 				}

// // // // 				.quantity-content {
// // // // 					display: flex;
// // // // 					align-items: center;
// // // // 					justify-content: space-around;
// // // // 					margin-top: 22px;
// // // // 					gap: 26px;
// // // // 				}

// // // // 				.donut {
// // // // 					width: 180px;
// // // // 					height: 180px;
// // // // 					border-radius: 50%;
// // // // 					background: conic-gradient(#4cc82d 0 96%, #ffc400 96% 100%);
// // // // 					display: flex;
// // // // 					align-items: center;
// // // // 					justify-content: center;
// // // // 				}

// // // // 				.donut-inner {
// // // // 					width: 112px;
// // // // 					height: 112px;
// // // // 					background: white;
// // // // 					border-radius: 50%;
// // // // 					display: flex;
// // // // 					flex-direction: column;
// // // // 					align-items: center;
// // // // 					justify-content: center;
// // // // 				}

// // // // 				.donut-inner span {
// // // // 					color: #475569;
// // // // 				}

// // // // 				.donut-inner strong {
// // // // 					font-size: 28px;
// // // // 					margin: 4px 0;
// // // // 				}

// // // // 				.legend-list {
// // // // 					display: flex;
// // // // 					flex-direction: column;
// // // // 					gap: 22px;
// // // // 				}

// // // // 				.legend-list div {
// // // // 					position: relative;
// // // // 					padding-left: 24px;
// // // // 				}

// // // // 				.legend-list p {
// // // // 					margin: 0 0 5px;
// // // // 					color: #475569;
// // // // 				}

// // // // 				.legend-list strong {
// // // // 					font-size: 18px;
// // // // 					margin-right: 6px;
// // // // 				}

// // // // 				.legend-list small {
// // // // 					color: #64748b;
// // // // 				}

// // // // 				.legend-dot {
// // // // 					position: absolute;
// // // // 					left: 0;
// // // // 					top: 3px;
// // // // 					width: 12px;
// // // // 					height: 12px;
// // // // 					border-radius: 999px;
// // // // 				}

// // // // 				.legend-dot.green {
// // // // 					background: #4cc82d;
// // // // 				}

// // // // 				.legend-dot.yellow {
// // // // 					background: #ffc400;
// // // // 				}

// // // // 				.chart {
// // // // 					position: relative;
// // // // 					height: 230px;
// // // // 					margin-top: 12px;
// // // // 					padding-top: 10px;
// // // // 				}

// // // // 				.chart svg {
// // // // 					width: 100%;
// // // // 					height: 170px;
// // // // 					position: absolute;
// // // // 					left: 0;
// // // // 					bottom: 30px;
// // // // 				}

// // // // 				.chart::before {
// // // // 					content: "";
// // // // 					position: absolute;
// // // // 					left: 0;
// // // // 					right: 0;
// // // // 					top: 32px;
// // // // 					height: 1px;
// // // // 					background: #e5e7eb;
// // // // 					box-shadow:
// // // // 						0 43px #e5e7eb,
// // // // 						0 86px #e5e7eb,
// // // // 						0 129px #e5e7eb;
// // // // 				}

// // // // 				.chart-labels {
// // // // 					position: absolute;
// // // // 					left: 0;
// // // // 					right: 0;
// // // // 					bottom: 0;
// // // // 					display: flex;
// // // // 					justify-content: space-between;
// // // // 					color: #64748b;
// // // // 					font-size: 12px;
// // // // 				}

// // // // 				.chart-point {
// // // // 					position: absolute;
// // // // 					font-size: 13px;
// // // // 					font-weight: 800;
// // // // 					z-index: 2;
// // // // 					color: #111827;
// // // // 				}

// // // // 				.p1 { left: 5%; top: 92px; }
// // // // 				.p2 { left: 18%; top: 55px; }
// // // // 				.p3 { left: 32%; top: 118px; }
// // // // 				.p4 { left: 49%; top: 18px; }
// // // // 				.p5 { left: 64%; top: 64px; }
// // // // 				.p6 { left: 78%; top: 90px; }
// // // // 				.p7 { right: 2%; top: 24px; }

// // // // 				@media (max-width: 1300px) {
// // // // 					.kpi-grid {
// // // // 						grid-template-columns: repeat(3, 1fr);
// // // // 					}

// // // // 					.bottom-grid {
// // // // 						grid-template-columns: 1fr;
// // // // 					}

// // // // 					.workflow-row {
// // // // 						grid-template-columns: 1fr;
// // // // 						gap: 14px;
// // // // 					}

// // // // 					.flow-connector {
// // // // 						display: none;
// // // // 					}
// // // // 				}

// // // // 				@media (max-width: 900px) {
// // // // 					.sidebar {
// // // // 						position: static;
// // // // 						width: 100%;
// // // // 						min-height: auto;
// // // // 					}

// // // // 					.waters-dashboard {
// // // // 						flex-direction: column;
// // // // 					}

// // // // 					.main-content {
// // // // 						margin-left: 0;
// // // // 						width: 100%;
// // // // 					}

// // // // 					.image-grid,
// // // // 					.kpi-grid {
// // // // 						grid-template-columns: 1fr;
// // // // 					}

// // // // 					.top-header {
// // // // 						flex-direction: column;
// // // // 						gap: 18px;
// // // // 					}

// // // // 					.search-box {
// // // // 						width: 100%;
// // // // 					}
// // // // 				}
// // // // 			`}</style>

// // // // 			<div className="waters-dashboard">
// // // // 				<aside className="sidebar">
// // // // 					<div className="brand">
// // // // 						<div className="brand-logo">W</div>
// // // // 						<div>
// // // // 							<h2>Waters</h2>
// // // // 							<span>MANUFACTURING</span>
// // // // 						</div>
// // // // 					</div>

// // // // 					<nav className="sidebar-menu">
// // // // 						{sidebarItems.map((item) => (
// // // // 							<button
// // // // 								key={item.label}
// // // // 								className={`sidebar-item ${item.active ? "active" : ""}`}
// // // // 							>
// // // // 								<span className="sidebar-icon">{item.icon}</span>
// // // // 								<span>{item.label}</span>
// // // // 							</button>
// // // // 						))}
// // // // 					</nav>

// // // // 					<div className="sidebar-bottom">
// // // // 						<div className="system-card">
// // // // 							<div className="status-dot-row">
// // // // 								<span className="green-dot"></span>
// // // // 								<span>System Status</span>
// // // // 							</div>
// // // // 							<strong>All Systems Operational</strong>
// // // // 							<div className="mini-wave"></div>
// // // // 						</div>

// // // // 						<div className="profile-card">
// // // // 							<div className="avatar">AM</div>
// // // // 							<div>
// // // // 								<strong>Alex Morgan</strong>
// // // // 								<span>Administrator</span>
// // // // 							</div>
// // // // 							<span className="down-arrow">⌄</span>
// // // // 						</div>
// // // // 					</div>
// // // // 				</aside>

// // // // 				<main className="main-content">
// // // // 					<header className="top-header">
// // // // 						<div>
// // // // 							<h1>Welcome back, Alex 👋</h1>
// // // // 							<p>Here's what's happening on the shop floor today.</p>
// // // // 						</div>

// // // // 						<div className="top-actions">
// // // // 							<div className="search-box">⌕ Search or type a command (Ctrl + G)</div>
// // // // 							<div className="notification">
// // // // 								🔔<span>3</span>
// // // // 							</div>
// // // // 							<div className="user-avatar">AM</div>
// // // // 							<div className="date-pill">▣ May 13, 2025</div>
// // // // 						</div>
// // // // 					</header>

// // // // 					<section className="workflow-row">
// // // // 						<WorkflowCard
// // // // 							icon="🍾"
// // // // 							title="Work Orders"
// // // // 							value="24"
// // // // 							status="Active"
// // // // 							statusColor="green"
// // // // 						/>

// // // // 						<div className="flow-connector">
// // // // 							<span></span>
// // // // 							<button>›</button>
// // // // 							<span></span>
// // // // 						</div>

// // // // 						<WorkflowCard
// // // // 							icon="🧾"
// // // // 							title="Job Cards"
// // // // 							value="11"
// // // // 							status="In Progress"
// // // // 							statusColor="orange"
// // // // 						/>

// // // // 						<div className="flow-connector">
// // // // 							<span></span>
// // // // 							<button>›</button>
// // // // 							<span></span>
// // // // 						</div>

// // // // 						<WorkflowCard
// // // // 							icon="📦"
// // // // 							title="Stock Entries"
// // // // 							value="8"
// // // // 							status="Pending Submit"
// // // // 							statusColor="blue"
// // // // 						/>
// // // // 					</section>

// // // // 					<section className="kpi-grid">
// // // // 						{kpis.map((kpi) => (
// // // // 							<KpiCard key={kpi.title} {...kpi} />
// // // // 						))}
// // // // 					</section>

// // // // 					<section className="image-grid">
// // // // 						<LiveImageCard
// // // // 							image={fillingLineImage}
// // // // 							title="Filling Line 1"
// // // // 							subtitle="Running smoothly"
// // // // 						/>

// // // // 						<LiveImageCard
// // // // 							image={storeDispatchImage}
// // // // 							title="Store & Dispatch"
// // // // 							subtitle="Running smoothly"
// // // // 						/>
// // // // 					</section>

// // // // 					<section className="bottom-grid">
// // // // 						<div className="panel work-order-panel">
// // // // 							<div className="panel-header">
// // // // 								<h3>Work Order Monitor</h3>
// // // // 								<button>View All</button>
// // // // 							</div>

// // // // 							<table>
// // // // 								<thead>
// // // // 									<tr>
// // // // 										<th>Work Order</th>
// // // // 										<th>Item</th>
// // // // 										<th>Target Qty</th>
// // // // 										<th>Good Qty</th>
// // // // 										<th>Loose Qty</th>
// // // // 										<th>Status</th>
// // // // 										<th>Action</th>
// // // // 									</tr>
// // // // 								</thead>

// // // // 								<tbody>
// // // // 									{workOrders.map((row) => (
// // // // 										<tr key={row.id}>
// // // // 											<td>{row.id}</td>
// // // // 											<td>{row.item}</td>
// // // // 											<td>{row.target}</td>
// // // // 											<td>{row.good}</td>
// // // // 											<td>{row.loose}</td>
// // // // 											<td>
// // // // 												<span className={`status-badge ${row.statusClass}`}>
// // // // 													{row.status}
// // // // 												</span>
// // // // 											</td>
// // // // 											<td>
// // // // 												<button className="eye-btn">◉</button>
// // // // 											</td>
// // // // 										</tr>
// // // // 									))}
// // // // 								</tbody>
// // // // 							</table>
// // // // 						</div>

// // // // 						<div className="panel quantity-panel">
// // // // 							<h3>Manufacturing Quantity Breakdown</h3>

// // // // 							<div className="quantity-content">
// // // // 								<div className="donut">
// // // // 									<div className="donut-inner">
// // // // 										<span>Total</span>
// // // // 										<strong>204.99</strong>
// // // // 										<span>Box</span>
// // // // 									</div>
// // // // 								</div>

// // // // 								<div className="legend-list">
// // // // 									<div>
// // // // 										<span className="legend-dot green"></span>
// // // // 										<p>Good Quantity</p>
// // // // 										<strong>197 Box</strong>
// // // // 										<small>(96.50%)</small>
// // // // 									</div>

// // // // 									<div>
// // // // 										<span className="legend-dot yellow"></span>
// // // // 										<p>Loose Quantity</p>
// // // // 										<strong>7.73 Box</strong>
// // // // 										<small>(3.79%)</small>
// // // // 									</div>
// // // // 								</div>
// // // // 							</div>
// // // // 						</div>

// // // // 						<div className="panel trend-panel">
// // // // 							<div className="panel-header">
// // // // 								<h3>Loose Quantity Trend (Nos)</h3>
// // // // 								<button>7 Days⌄</button>
// // // // 							</div>

// // // // 							<div className="chart">
// // // // 								<div className="chart-point p1">28</div>
// // // // 								<div className="chart-point p2">44</div>
// // // // 								<div className="chart-point p3">22</div>
// // // // 								<div className="chart-point p4">61</div>
// // // // 								<div className="chart-point p5">48</div>
// // // // 								<div className="chart-point p6">36</div>
// // // // 								<div className="chart-point p7">61</div>

// // // // 								<svg viewBox="0 0 500 190" preserveAspectRatio="none">
// // // // 									<defs>
// // // // 										<linearGradient id="yellowFill" x1="0" y1="0" x2="0" y2="1">
// // // // 											<stop offset="0%" stopColor="#ffc400" stopOpacity="0.45" />
// // // // 											<stop offset="100%" stopColor="#ffc400" stopOpacity="0" />
// // // // 										</linearGradient>
// // // // 									</defs>

// // // // 									<path
// // // // 										d="M20 135 C70 90, 80 88, 120 75 C160 150, 170 150, 205 128 C250 25, 270 22, 305 70 C350 85, 355 95, 390 112 C430 128, 430 127, 470 35"
// // // // 										fill="none"
// // // // 										stroke="#f7b500"
// // // // 										strokeWidth="4"
// // // // 									/>

// // // // 									<path
// // // // 										d="M20 135 C70 90, 80 88, 120 75 C160 150, 170 150, 205 128 C250 25, 270 22, 305 70 C350 85, 355 95, 390 112 C430 128, 430 127, 470 35 L470 190 L20 190 Z"
// // // // 										fill="url(#yellowFill)"
// // // // 									/>
// // // // 								</svg>

// // // // 								<div className="chart-labels">
// // // // 									<span>May 8</span>
// // // // 									<span>May 9</span>
// // // // 									<span>May 10</span>
// // // // 									<span>May 11</span>
// // // // 									<span>May 12</span>
// // // // 									<span>May 13</span>
// // // // 									<span>May 14</span>
// // // // 								</div>
// // // // 							</div>
// // // // 						</div>
// // // // 					</section>
// // // // 				</main>
// // // // 			</div>
// // // // 		</>
// // // // 	);
// // // // }

// // // // function WorkflowCard({ icon, title, value, status, statusColor }) {
// // // // 	return (
// // // // 		<div className="workflow-card">
// // // // 			<div className="workflow-icon">{icon}</div>
// // // // 			<div>
// // // // 				<h3>{title}</h3>
// // // // 				<strong>{value}</strong>
// // // // 				<p>
// // // // 					<span className={`dot ${statusColor}`}></span>
// // // // 					{status}
// // // // 				</p>
// // // // 			</div>
// // // // 		</div>
// // // // 	);
// // // // }

// // // // function KpiCard({ icon, title, value, subtitle, color, trend }) {
// // // // 	return (
// // // // 		<div className="kpi-card">
// // // // 			<div className={`kpi-icon ${color}`}>{icon}</div>
// // // // 			<div className="kpi-info">
// // // // 				<p>{title}</p>
// // // // 				<strong>{value}</strong>
// // // // 				<span>{subtitle}</span>
// // // // 			</div>

// // // // 			{trend === "bars" ? (
// // // // 				<div className="bar-chart">
// // // // 					<i></i>
// // // // 					<i></i>
// // // // 					<i></i>
// // // // 					<i></i>
// // // // 					<i></i>
// // // // 					<i></i>
// // // // 				</div>
// // // // 			) : (
// // // // 				<div className="sparkline"></div>
// // // // 			)}
// // // // 		</div>
// // // // 	);
// // // // }

// // // // function LiveImageCard({ image, title, subtitle }) {
// // // // 	return (
// // // // 		<div className="live-card">
// // // // 			<img src={image} alt={title} />
// // // // 			<div className="live-overlay">
// // // // 				<div>
// // // // 					<h3>
// // // // 						<span></span>
// // // // 						{title}
// // // // 					</h3>
// // // // 					<p>{subtitle}</p>
// // // // 				</div>

// // // // 				<button>Live</button>
// // // // 			</div>
// // // // 		</div>
// // // // 	);
// // // // }

// // // import * as React from "react";

// // // // ─── MOCK DATA ───────────────────────────────────────────────────────────────

// // // const TREND_DATA = [
// // //   { date: "May 8", value: 28 },
// // //   { date: "May 9", value: 44 },
// // //   { date: "May 10", value: 22 },
// // //   { date: "May 11", value: 61 },
// // //   { date: "May 12", value: 48 },
// // //   { date: "May 13", value: 36 },
// // //   { date: "May 14", value: 61 },
// // // ];

// // // const SIDEBAR_ITEMS = [
// // //   { label: "Dashboard", icon: "⊞", active: true },
// // //   { label: "Work Orders", icon: "📋" },
// // //   { label: "Job Cards", icon: "🧾" },
// // //   { label: "Stock", icon: "📦" },
// // //   { label: "Stock Entries", icon: "📑" },
// // //   { label: "Reports", icon: "📊" },
// // //   { label: "Analytics", icon: "📈" },
// // //   { label: "Settings", icon: "⚙️" },
// // // ];

// // // const KPIS = [
// // //   { title: "Good Quantity (Box)", value: "204.99", sub: "↑ 2.4% vs yesterday", icon: "🍾", color: "green", trend: "line" },
// // //   { title: "Loose Quantity (Box)", value: "197.00", sub: "↑ 9.8% vs yesterday", icon: "🧃", color: "yellow", trend: "line" },
// // //   { title: "Active Work Orders", value: "24", sub: "Active", icon: "📋", color: "blue", trend: "bars" },
// // //   { title: "Job Cards In Progress", value: "42", sub: "In Progress", icon: "🧾", color: "purple", trend: "bars" },
// // //   { title: "Stock Items", value: "128", sub: "Active", icon: "🏬", color: "orange", trend: "bars" },
// // // ];

// // // const WORK_ORDERS = [
// // //   { id: "WO-00045", item: "Mango Drink 250ml", target: "300 Box", good: "197 Box", loose: "12 Box", status: "Ready for QC", badge: "warning" },
// // //   { id: "WO-00046", item: "Lemon Drink 250ml", target: "150 Box", good: "136 Box", loose: "8 Box", status: "Completed", badge: "success" },
// // //   { id: "WO-00047", item: "Orange Drink 250ml", target: "300 Box", good: "285 Box", loose: "15 Box", status: "In Progress", badge: "info" },
// // //   { id: "WO-00048", item: "Apple Drink 250ml", target: "250 Box", good: "241 Box", loose: "9 Box", status: "Job Card Open", badge: "purple" },
// // // ];

// // // // ─── STYLES ───────────────────────────────────────────────────────────────────

// // // const CSS = `
// // //   @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');

// // //   *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

// // //   .wd-root {
// // //     font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif;
// // //     background: #f0f2f5;
// // //     color: #111827;
// // //     display: grid;
// // //     grid-template-columns: 220px 1fr;
// // //     height: 100vh;
// // //     overflow: hidden;
// // //   }

// // //   /* ── SIDEBAR ── */
// // //   .wd-sidebar {
// // //     background: linear-gradient(180deg, #0a0c10 0%, #111520 100%);
// // //     color: #fff;
// // //     display: flex;
// // //     flex-direction: column;
// // //     padding: 20px 12px;
// // //     overflow-y: auto;
// // //     position: relative;
// // //   }
// // //   .wd-sidebar::after {
// // //     content: '';
// // //     position: absolute;
// // //     top: 0; right: 0;
// // //     width: 1px; height: 100%;
// // //     background: linear-gradient(180deg, transparent, rgba(255,196,0,.15), transparent);
// // //   }
// // //   .wd-brand {
// // //     display: flex; align-items: center; gap: 10px;
// // //     padding: 0 6px; margin-bottom: 28px;
// // //   }
// // //   .wd-brand-logo {
// // //     width: 38px; height: 38px; border-radius: 50%;
// // //     background: linear-gradient(135deg, #ffd21f, #ff8a00);
// // //     display: flex; align-items: center; justify-content: center;
// // //     font-size: 20px; font-weight: 900; color: #111;
// // //     box-shadow: 0 0 20px rgba(255,196,0,.4); flex-shrink: 0;
// // //   }
// // //   .wd-brand-text h2 { font-size: 22px; font-weight: 800; line-height: 1; letter-spacing: -.5px; }
// // //   .wd-brand-text span { font-size: 10px; letter-spacing: 2px; color: #9ca3af; font-weight: 600; }
// // //   .wd-nav { display: flex; flex-direction: column; gap: 4px; }
// // //   .wd-nav-item {
// // //     display: flex; align-items: center; gap: 12px;
// // //     padding: 11px 12px; border-radius: 10px;
// // //     font-size: 14px; font-weight: 500; color: #9ca3af;
// // //     border: none; background: transparent; text-align: left;
// // //     cursor: pointer; transition: .2s; width: 100%;
// // //   }
// // //   .wd-nav-item:hover { background: rgba(255,255,255,.06); color: #fff; }
// // //   .wd-nav-item.active { background: linear-gradient(135deg, #ffc400, #b38000); color: #111; font-weight: 700; }
// // //   .wd-nav-icon { font-size: 16px; width: 22px; text-align: center; flex-shrink: 0; }
// // //   .wd-sidebar-bottom { margin-top: auto; display: flex; flex-direction: column; gap: 10px; padding-top: 16px; }
// // //   .wd-sys-card {
// // //     background: rgba(255,255,255,.04); border: 1px solid rgba(255,255,255,.08);
// // //     border-radius: 12px; padding: 12px;
// // //   }
// // //   .wd-sys-row { display: flex; align-items: center; gap: 8px; font-size: 12px; color: #9ca3af; margin-bottom: 6px; }
// // //   .wd-green-pulse {
// // //     width: 8px; height: 8px; border-radius: 50%;
// // //     background: #22c55e; box-shadow: 0 0 10px #22c55e;
// // //     animation: wdPulse 2s infinite; flex-shrink: 0;
// // //   }
// // //   @keyframes wdPulse { 0%,100%{opacity:1} 50%{opacity:.4} }
// // //   .wd-sys-card strong { font-size: 12px; color: #4ade80; }
// // //   .wd-wave {
// // //     height: 16px; margin-top: 10px;
// // //     background: repeating-linear-gradient(90deg, transparent 0, transparent 4px, rgba(74,222,128,.55) 4px, rgba(74,222,128,.55) 5px);
// // //     border-bottom: 1px solid rgba(74,222,128,.35);
// // //   }
// // //   .wd-profile {
// // //     display: flex; align-items: center; gap: 10px;
// // //     background: rgba(255,255,255,.04); border: 1px solid rgba(255,255,255,.08);
// // //     border-radius: 12px; padding: 10px 12px;
// // //   }
// // //   .wd-avatar {
// // //     width: 34px; height: 34px; border-radius: 50%;
// // //     background: #1f2937; display: flex; align-items: center;
// // //     justify-content: center; font-size: 12px; font-weight: 700; flex-shrink: 0;
// // //   }
// // //   .wd-profile strong { display: block; font-size: 13px; font-weight: 700; }
// // //   .wd-profile span { font-size: 11px; color: #9ca3af; }
// // //   .wd-profile-arrow { margin-left: auto; color: #9ca3af; font-size: 12px; }

// // //   /* ── MAIN ── */
// // //   .wd-main {
// // //     overflow-y: auto; padding: 20px 24px 28px;
// // //     display: flex; flex-direction: column; gap: 14px;
// // //     background: radial-gradient(ellipse at 80% 0%, rgba(255,196,0,.06) 0%, transparent 50%), #f0f2f5;
// // //   }

// // //   /* ── TOPBAR ── */
// // //   .wd-topbar { display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 12px; }
// // //   .wd-topbar h1 { font-size: 26px; font-weight: 800; letter-spacing: -.5px; color: #111827; }
// // //   .wd-topbar p { font-size: 14px; color: #64748b; margin-top: 3px; }
// // //   .wd-top-actions { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
// // //   .wd-search {
// // //     background: #fff; border: 1px solid #e5e7eb; border-radius: 10px;
// // //     padding: 9px 14px; font-size: 13px; color: #94a3b8;
// // //     width: 260px; box-shadow: 0 2px 8px rgba(0,0,0,.04);
// // //   }
// // //   .wd-notif-btn {
// // //     position: relative; width: 36px; height: 36px; border-radius: 50%;
// // //     background: #fff; border: 1px solid #e5e7eb;
// // //     display: flex; align-items: center; justify-content: center;
// // //     font-size: 16px; box-shadow: 0 2px 8px rgba(0,0,0,.04); cursor: pointer;
// // //   }
// // //   .wd-notif-badge {
// // //     position: absolute; top: -4px; right: -4px;
// // //     background: #ffc400; color: #111; font-size: 10px; font-weight: 800;
// // //     width: 17px; height: 17px; border-radius: 50%;
// // //     display: flex; align-items: center; justify-content: center;
// // //   }
// // //   .wd-user-chip {
// // //     width: 36px; height: 36px; border-radius: 50%;
// // //     background: #0a0c10; color: #fff;
// // //     font-size: 12px; font-weight: 700;
// // //     display: flex; align-items: center; justify-content: center;
// // //   }
// // //   .wd-date-chip {
// // //     background: #fff; border: 1px solid #e5e7eb; border-radius: 10px;
// // //     padding: 8px 14px; font-size: 13px; font-weight: 700;
// // //     box-shadow: 0 2px 8px rgba(0,0,0,.04);
// // //     display: flex; align-items: center; gap: 6px;
// // //   }

// // //   /* ── WORKFLOW ── */
// // //   .wd-workflow {
// // //     display: grid;
// // //     grid-template-columns: 1fr auto 1fr auto 1fr;
// // //     align-items: center;
// // //   }
// // //   .wd-wf-card {
// // //     background: #fff; border: 1px solid #e5e7eb; border-radius: 18px;
// // //     padding: 16px 20px; display: flex; align-items: center; gap: 16px;
// // //     box-shadow: 0 4px 16px rgba(0,0,0,.05); min-width: 0;
// // //   }
// // //   .wd-wf-icon {
// // //     width: 68px; height: 68px; border-radius: 50%;
// // //     display: flex; align-items: center; justify-content: center;
// // //     font-size: 32px; flex-shrink: 0;
// // //   }
// // //   .wd-wf-icon.green  { background: #f0fdf4; }
// // //   .wd-wf-icon.blue   { background: #eff6ff; }
// // //   .wd-wf-icon.orange { background: #fff7ed; }
// // //   .wd-wf-info { display: flex; flex-direction: column; min-width: 0; }
// // //   .wd-wf-info h3     { font-size: 13px; font-weight: 600; color: #64748b; margin-bottom: 4px; white-space: nowrap; }
// // //   .wd-wf-info strong { font-size: 32px; font-weight: 800; line-height: 1; display: block; color: #111827; }
// // //   .wd-wf-status      { display: flex; align-items: center; gap: 6px; font-size: 13px; color: #64748b; margin-top: 5px; }
// // //   .wd-dot { width: 9px; height: 9px; border-radius: 50%; flex-shrink: 0; }
// // //   .wd-dot.green  { background: #22c55e; }
// // //   .wd-dot.orange { background: #f97316; }
// // //   .wd-dot.blue   { background: #3b82f6; }
// // //   .wd-connector  { display: flex; align-items: center; justify-content: center; padding: 0 4px; }
// // //   .wd-conn-line  { border-top: 2.5px dashed #fbbf24; width: 28px; }
// // //   .wd-conn-btn {
// // //     width: 30px; height: 30px; border-radius: 50%;
// // //     background: #ffc400; border: none; font-size: 18px; font-weight: 900;
// // //     box-shadow: 0 4px 12px rgba(255,196,0,.35); cursor: pointer; color: #111;
// // //     display: flex; align-items: center; justify-content: center;
// // //     transition: transform .2s;
// // //   }
// // //   .wd-conn-btn:hover { transform: scale(1.15); }

// // //   /* ── KPI ── */
// // //   .wd-kpi-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 12px; }
// // //   .wd-kpi-card {
// // //     background: #fff; border: 1px solid #e5e7eb; border-radius: 14px;
// // //     padding: 14px; display: flex; align-items: center; gap: 12px;
// // //     box-shadow: 0 2px 10px rgba(0,0,0,.04); overflow: hidden;
// // //   }
// // //   .wd-kpi-ico {
// // //     width: 50px; height: 50px; border-radius: 50%;
// // //     display: flex; align-items: center; justify-content: center;
// // //     font-size: 24px; flex-shrink: 0;
// // //   }
// // //   .wd-kpi-ico.green  { background: #dcfce7; }
// // //   .wd-kpi-ico.yellow { background: #fef9c3; }
// // //   .wd-kpi-ico.blue   { background: #dbeafe; }
// // //   .wd-kpi-ico.purple { background: #f3e8ff; }
// // //   .wd-kpi-ico.orange { background: #fff7ed; }
// // //   .wd-kpi-body { flex: 1; min-width: 0; }
// // //   .wd-kpi-body p      { font-size: 11px; color: #64748b; font-weight: 600; margin-bottom: 4px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
// // //   .wd-kpi-body strong { font-size: 22px; font-weight: 800; display: block; line-height: 1; }
// // //   .wd-kpi-body span   { font-size: 11px; font-weight: 700; }
// // //   .wd-kpi-body span.green  { color: #16a34a; }
// // //   .wd-kpi-body span.blue   { color: #3b82f6; }
// // //   .wd-kpi-body span.purple { color: #7c3aed; }
// // //   .wd-kpi-body span.orange { color: #ea580c; }

// // //   /* ── LIVE CARDS ── */
// // //   .wd-img-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
// // //   .wd-live-card {
// // //     height: 196px; border-radius: 16px; overflow: hidden;
// // //     position: relative; background: #1a1f2e;
// // //     box-shadow: 0 8px 24px rgba(0,0,0,.12);
// // //   }
// // //   .wd-live-placeholder {
// // //     width: 100%; height: 100%;
// // //     display: flex; align-items: center; justify-content: center;
// // //     background: linear-gradient(135deg, #1a1f2e, #0f1623);
// // //   }
// // //   .wd-live-overlay {
// // //     position: absolute; inset: auto 0 0;
// // //     padding: 18px 18px 14px;
// // //     background: linear-gradient(0deg, rgba(0,0,0,.82), transparent);
// // //     color: #fff; display: flex; justify-content: space-between; align-items: flex-end;
// // //   }
// // //   .wd-live-title { display: flex; align-items: center; gap: 8px; font-size: 15px; font-weight: 700; }
// // //   .wd-live-dot {
// // //     width: 9px; height: 9px; border-radius: 50%; background: #ffc400;
// // //     animation: wdPulse 1.5s infinite; flex-shrink: 0;
// // //   }
// // //   .wd-live-sub { font-size: 12px; color: #d1d5db; margin-top: 3px; }
// // //   .wd-live-btn {
// // //     background: rgba(34,197,94,.2); border: 1px solid rgba(34,197,94,.5);
// // //     color: #4ade80; padding: 7px 14px; border-radius: 8px;
// // //     font-size: 12px; font-weight: 800; cursor: pointer; font-family: inherit;
// // //   }

// // //   /* ── BOTTOM ── */
// // //   .wd-bottom-grid { display: grid; grid-template-columns: 1.4fr .85fr 1fr; gap: 14px; }
// // //   .wd-panel {
// // //     background: #fff; border: 1px solid #e5e7eb; border-radius: 14px;
// // //     padding: 16px; box-shadow: 0 2px 10px rgba(0,0,0,.04);
// // //   }
// // //   .wd-panel-hdr { display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; }
// // //   .wd-panel-hdr h3 { font-size: 15px; font-weight: 800; }
// // //   .wd-view-btn {
// // //     background: #fff; border: 1px solid #e5e7eb; border-radius: 8px;
// // //     padding: 6px 12px; font-size: 12px; font-weight: 700;
// // //     cursor: pointer; font-family: inherit; transition: .2s;
// // //   }
// // //   .wd-view-btn:hover { background: #f8fafc; }

// // //   /* TABLE */
// // //   .wd-table { width: 100%; border-collapse: collapse; font-size: 11.5px; }
// // //   .wd-table th {
// // //     text-align: left; color: #94a3b8; font-weight: 700;
// // //     padding: 8px 6px; border-bottom: 1px solid #f1f5f9; white-space: nowrap;
// // //   }
// // //   .wd-table td { padding: 10px 6px; font-weight: 600; border-bottom: 1px solid #f8fafc; white-space: nowrap; }
// // //   .wd-table tr:last-child td { border-bottom: none; }
// // //   .wd-table tbody tr:hover td { background: #fafbfc; }
// // //   .wd-badge { display: inline-block; border-radius: 6px; padding: 4px 8px; font-size: 11px; font-weight: 700; }
// // //   .wd-badge.warning { background: #fff7ed; color: #ea580c; }
// // //   .wd-badge.success { background: #dcfce7; color: #16a34a; }
// // //   .wd-badge.info    { background: #dbeafe; color: #2563eb; }
// // //   .wd-badge.purple  { background: #f3e8ff; color: #7c3aed; }
// // //   .wd-eye-btn { border: none; background: none; font-size: 14px; cursor: pointer; color: #94a3b8; transition: .2s; }
// // //   .wd-eye-btn:hover { color: #111; }

// // //   /* DONUT */
// // //   .wd-donut-panel h3 { font-size: 14px; font-weight: 800; margin-bottom: 4px; }
// // //   .wd-donut-wrap { display: flex; align-items: center; justify-content: space-around; margin-top: 14px; }
// // //   .wd-donut-svg { cursor: pointer; transition: transform .2s, filter .2s; overflow: visible; }
// // //   .wd-donut-svg:hover { transform: scale(1.05); filter: drop-shadow(0 8px 16px rgba(34,197,94,.22)); }
// // //   .wd-legend { display: flex; flex-direction: column; gap: 14px; }
// // //   .wd-legend-item {
// // //     display: flex; align-items: flex-start; gap: 10px;
// // //     cursor: pointer; padding: 6px 8px; border-radius: 10px; transition: .2s;
// // //   }
// // //   .wd-legend-item:hover, .wd-legend-item.active { background: #f8fafc; }
// // //   .wd-legend-color { width: 11px; height: 11px; border-radius: 50%; margin-top: 3px; flex-shrink: 0; }
// // //   .wd-legend-label { font-size: 12px; color: #64748b; font-weight: 600; }
// // //   .wd-legend-val   { font-size: 16px; font-weight: 800; }
// // //   .wd-legend-pct   { font-size: 11px; color: #94a3b8; }

// // //   /* TREND CHART */
// // //   .wd-trend-panel { display: flex; flex-direction: column; }
// // //   .wd-chart-wrap  { position: relative; flex: 1; }
// // //   .wd-chart-svg   { width: 100%; display: block; overflow: visible; }
// // //   .wd-chart-labels {
// // //     display: flex; justify-content: space-between;
// // //     font-size: 10px; color: #94a3b8; margin-top: 4px; padding: 0 2px;
// // //   }
// // //   .wd-chart-dots { position: absolute; top: 0; left: 0; width: 100%; pointer-events: none; }
// // //   .wd-chart-dot-btn {
// // //     position: absolute; width: 16px; height: 16px; border-radius: 50%;
// // //     background: #fbbf24; border: 2.5px solid #fff;
// // //     box-shadow: 0 3px 10px rgba(251,191,36,.45);
// // //     cursor: pointer; transform: translate(-50%, -50%);
// // //     transition: transform .2s, background .2s;
// // //     pointer-events: all; font-family: inherit;
// // //   }
// // //   .wd-chart-dot-btn:hover { transform: translate(-50%,-50%) scale(1.4); background: #fcd34d; }
// // //   .wd-chart-tooltip {
// // //     position: absolute; top: 4px; right: 4px;
// // //     background: #111; color: #fff; border-radius: 8px;
// // //     padding: 8px 12px; font-size: 12px; font-weight: 700;
// // //     box-shadow: 0 8px 20px rgba(0,0,0,.2); pointer-events: none; z-index: 10;
// // //   }
// // //   .wd-chart-tooltip span { display: block; font-size: 11px; color: #9ca3af; font-weight: 500; margin-top: 2px; }

// // //   @media (max-width: 1280px) {
// // //     .wd-kpi-grid       { grid-template-columns: repeat(3, 1fr); }
// // //     .wd-bottom-grid    { grid-template-columns: 1fr; }
// // //     .wd-workflow       { grid-template-columns: 1fr 1fr 1fr; }
// // //     .wd-connector      { display: none; }
// // //   }
// // //   @media (max-width: 900px) {
// // //     .wd-root           { grid-template-columns: 1fr; }
// // //     .wd-sidebar        { height: auto; }
// // //     .wd-main           { height: auto; }
// // //     .wd-img-grid,
// // //     .wd-kpi-grid       { grid-template-columns: 1fr; }
// // //   }
// // // `;

// // // // ─── HELPERS ──────────────────────────────────────────────────────────────────

// // // function buildTrendPath(data, W = 300, H = 130, padX = 10, padY = 8) {
// // //   const vals = data.map((d) => d.value);
// // //   const min = Math.min(...vals) - 8;
// // //   const max = Math.max(...vals) + 8;
// // //   const pts = data.map((d, i) => ({
// // //     x: padX + (i / (data.length - 1)) * (W - padX * 2),
// // //     y: H - padY - ((d.value - min) / (max - min)) * (H - padY * 2),
// // //     ...d,
// // //   }));

// // //   let smooth = `M${pts[0].x},${pts[0].y}`;
// // //   for (let i = 1; i < pts.length; i++) {
// // //     const cpX = (pts[i].x + pts[i - 1].x) / 2;
// // //     smooth += ` C${cpX},${pts[i - 1].y} ${cpX},${pts[i].y} ${pts[i].x},${pts[i].y}`;
// // //   }

// // //   const area =
// // //     smooth +
// // //     ` L${pts[pts.length - 1].x},${H} L${pts[0].x},${H} Z`;

// // //   return { pts, smooth, area, W, H };
// // // }

// // // // ─── SUB-COMPONENTS ───────────────────────────────────────────────────────────

// // // function SparkLine({ color }) {
// // //   return (
// // //     <svg width="56" height="32" viewBox="0 0 56 32">
// // //       <polyline
// // //         points="2,26 12,18 22,22 32,10 42,14 52,6"
// // //         fill="none"
// // //         stroke={color}
// // //         strokeWidth="2.5"
// // //         strokeLinecap="round"
// // //         strokeLinejoin="round"
// // //       />
// // //     </svg>
// // //   );
// // // }

// // // function MiniBarChart() {
// // //   const heights = [14, 22, 30, 42, 26, 46];
// // //   return (
// // //     <svg width="50" height="38" viewBox="0 0 50 38">
// // //       {heights.map((h, i) => (
// // //         <rect
// // //           key={i}
// // //           x={i * 8 + 1}
// // //           y={38 - h}
// // //           width="6"
// // //           height={h}
// // //           rx="2"
// // //           fill="#fbbf24"
// // //         />
// // //       ))}
// // //     </svg>
// // //   );
// // // }

// // // function KpiCard({ icon, title, value, sub, color, trend }) {
// // //   const subColor =
// // //     color === "green" ? "green"
// // //       : color === "yellow" ? "green"
// // //         : color === "blue" ? "blue"
// // //           : color === "purple" ? "purple"
// // //             : "orange";

// // //   return (
// // //     <div className="wd-kpi-card">
// // //       <div className={`wd-kpi-ico ${color}`}>{icon}</div>
// // //       <div className="wd-kpi-body">
// // //         <p>{title}</p>
// // //         <strong>{value}</strong>
// // //         <span className={subColor}>{sub}</span>
// // //       </div>
// // //       {trend === "line" ? (
// // //         <SparkLine color={color === "green" ? "#22c55e" : "#eab308"} />
// // //       ) : (
// // //         <MiniBarChart />
// // //       )}
// // //     </div>
// // //   );
// // // }

// // // function WorkflowCard({ icon, iconColor, title, value, statusDot, status }) {
// // //   return (
// // //     <div className="wd-wf-card">
// // //       <div className={`wd-wf-icon ${iconColor}`}>{icon}</div>
// // //       <div className="wd-wf-info">
// // //         <h3>{title}</h3>
// // //         <strong>{value}</strong>
// // //         <div className="wd-wf-status">
// // //           <span className={`wd-dot ${statusDot}`}></span>
// // //           {status}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // function LiveCard({ title, subtitle }) {
// // //   return (
// // //     <div className="wd-live-card">
// // //       <div className="wd-live-placeholder">
// // //         <svg width="130" height="80" viewBox="0 0 130 80" fill="none" style={{ opacity: 0.12 }}>
// // //           <rect x="5" y="20" width="32" height="44" rx="5" fill="#fff" />
// // //           <rect x="45" y="8" width="9" height="56" rx="4" fill="#fff" />
// // //           <rect x="60" y="8" width="9" height="56" rx="4" fill="#fff" />
// // //           <rect x="75" y="8" width="9" height="56" rx="4" fill="#fff" />
// // //           <rect x="90" y="8" width="9" height="56" rx="4" fill="#fff" />
// // //           <rect x="0" y="62" width="130" height="6" rx="3" fill="#fff" />
// // //           <circle cx="112" cy="36" r="14" fill="#fff" />
// // //         </svg>
// // //       </div>
// // //       <div className="wd-live-overlay">
// // //         <div>
// // //           <div className="wd-live-title">
// // //             <span className="wd-live-dot"></span>
// // //             {title}
// // //           </div>
// // //           <div className="wd-live-sub">{subtitle}</div>
// // //         </div>
// // //         <button className="wd-live-btn">Live</button>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // function DonutPanel() {
// // //   const [hover, setHover] = React.useState(null);

// // //   const CIRC = 2 * Math.PI * 55; // ≈ 345.6
// // //   const goodPct = 0.965;
// // //   const loosePct = 0.035;

// // //   const label = hover === "good" ? "Good Qty" : hover === "loose" ? "Loose Qty" : "Total";
// // //   const valTxt = hover === "good" ? "197" : hover === "loose" ? "7.73" : "204.99";

// // //   return (
// // //     <div className="wd-panel wd-donut-panel">
// // //       <h3>Manufacturing Quantity Breakdown</h3>
// // //       <div className="wd-donut-wrap">
// // //         <svg
// // //           className="wd-donut-svg"
// // //           width="156" height="156"
// // //           viewBox="0 0 156 156"
// // //           onMouseLeave={() => setHover(null)}
// // //         >
// // //           {/* track */}
// // //           <circle cx="78" cy="78" r="55" fill="none" stroke="#f1f5f9" strokeWidth="26" />
// // //           {/* good arc */}
// // //           <circle
// // //             cx="78" cy="78" r="55"
// // //             fill="none" stroke="#4ade80" strokeWidth="26"
// // //             strokeDasharray={`${CIRC * goodPct} ${CIRC * loosePct}`}
// // //             strokeDashoffset="0"
// // //             transform="rotate(-90 78 78)"
// // //             onMouseEnter={() => setHover("good")}
// // //             style={{ cursor: "pointer" }}
// // //           />
// // //           {/* loose arc */}
// // //           <circle
// // //             cx="78" cy="78" r="55"
// // //             fill="none" stroke="#fbbf24" strokeWidth="26"
// // //             strokeDasharray={`${CIRC * loosePct} ${CIRC * goodPct}`}
// // //             strokeDashoffset={-(CIRC * goodPct)}
// // //             transform="rotate(-90 78 78)"
// // //             onMouseEnter={() => setHover("loose")}
// // //             style={{ cursor: "pointer" }}
// // //           />
// // //           {/* center text */}
// // //           <text x="78" y="70" textAnchor="middle" fontSize="11" fill="#94a3b8" fontFamily="DM Sans" fontWeight="600">{label}</text>
// // //           <text x="78" y="86" textAnchor="middle" fontSize="20" fill="#111" fontFamily="DM Sans" fontWeight="800">{valTxt}</text>
// // //           <text x="78" y="100" textAnchor="middle" fontSize="11" fill="#94a3b8" fontFamily="DM Sans" fontWeight="600">Box</text>
// // //         </svg>

// // //         <div className="wd-legend">
// // //           <div
// // //             className={`wd-legend-item ${hover === "good" ? "active" : ""}`}
// // //             onMouseEnter={() => setHover("good")}
// // //             onMouseLeave={() => setHover(null)}
// // //           >
// // //             <span className="wd-legend-color" style={{ background: "#4ade80" }}></span>
// // //             <div>
// // //               <div className="wd-legend-label">Good Quantity</div>
// // //               <div className="wd-legend-val">197 Box</div>
// // //               <div className="wd-legend-pct">(96.50%)</div>
// // //             </div>
// // //           </div>
// // //           <div
// // //             className={`wd-legend-item ${hover === "loose" ? "active" : ""}`}
// // //             onMouseEnter={() => setHover("loose")}
// // //             onMouseLeave={() => setHover(null)}
// // //           >
// // //             <span className="wd-legend-color" style={{ background: "#fbbf24" }}></span>
// // //             <div>
// // //               <div className="wd-legend-label">Loose Quantity</div>
// // //               <div className="wd-legend-val">7.73 Box</div>
// // //               <div className="wd-legend-pct">(3.79%)</div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // function TrendPanel() {
// // //   const [activePt, setActivePt] = React.useState(null);
// // //   // Extra right padding so the tooltip for the last point doesn't clip
// // //   const W = 320, H = 140, PAD_L = 8, PAD_R = 8, PAD_T = 18, PAD_B = 10;
// // //   const { pts, smooth, area } = buildTrendPath(TREND_DATA, W, H, PAD_L, PAD_T);

// // //   // Tooltip box dimensions (in SVG units)
// // //   const TW = 80, TH = 42, TR = 7;

// // //   return (
// // //     <div className="wd-panel wd-trend-panel">
// // //       <div className="wd-panel-hdr">
// // //         <h3>Loose Quantity Trend (Nos)</h3>
// // //         <button className="wd-view-btn">7 Days ⌄</button>
// // //       </div>

// // //       <div className="wd-chart-wrap" style={{ position: "relative" }}>
// // //         {/*
// // //           Single SVG — dots live INSIDE it, so their coords are always exact.
// // //           preserveAspectRatio="xMidYMid meet" keeps aspect ratio intact.
// // //         */}
// // //         <svg
// // //           className="wd-chart-svg"
// // //           viewBox={`0 0 ${W} ${H}`}
// // //           style={{ width: "100%", height: H, display: "block", overflow: "visible" }}
// // //         >
// // //           <defs>
// // //             <linearGradient id="wdAreaGrad" x1="0" y1="0" x2="0" y2="1">
// // //               <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.38" />
// // //               <stop offset="100%" stopColor="#fbbf24" stopOpacity="0" />
// // //             </linearGradient>
// // //           </defs>

// // //           {/* grid lines */}
// // //           {[PAD_T, PAD_T + 30, PAD_T + 60, PAD_T + 90].map((y) => (
// // //             <line key={y} x1={PAD_L} y1={y} x2={W - PAD_R} y2={y} stroke="#f1f5f9" strokeWidth="1" />
// // //           ))}

// // //           {/* area + line */}
// // //           <path d={area} fill="url(#wdAreaGrad)" />
// // //           <path d={smooth} fill="none" stroke="#f59e0b" strokeWidth="3"
// // //             strokeLinecap="round" strokeLinejoin="round" />

// // //           {/* dots — rendered in SVG coords, no offset issues */}
// // //           {pts.map((p) => (
// // //             <g key={p.date}>
// // //               {/* larger invisible hit area */}
// // //               <circle
// // //                 cx={p.x} cy={p.y} r={12}
// // //                 fill="transparent"
// // //                 style={{ cursor: "pointer" }}
// // //                 onMouseEnter={() => setActivePt(p)}
// // //                 onMouseLeave={() => setActivePt(null)}
// // //               />
// // //               {/* visible dot */}
// // //               <circle
// // //                 cx={p.x} cy={p.y}
// // //                 r={activePt && activePt.date === p.date ? 7 : 5}
// // //                 fill={activePt && activePt.date === p.date ? "#fcd34d" : "#fbbf24"}
// // //                 stroke="#fff"
// // //                 strokeWidth="2.5"
// // //                 style={{
// // //                   filter: activePt && activePt.date === p.date
// // //                     ? "drop-shadow(0 3px 8px rgba(251,191,36,.6))"
// // //                     : "drop-shadow(0 2px 4px rgba(251,191,36,.35))",
// // //                   transition: "r .15s, fill .15s",
// // //                   pointerEvents: "none",
// // //                 }}
// // //               />
// // //             </g>
// // //           ))}

// // //           {/* SVG-native tooltip — always aligned to the hovered dot */}
// // //           {activePt && (() => {
// // //             // Clamp so tooltip never goes off left/right edge
// // //             const tx = Math.min(Math.max(activePt.x - TW / 2, PAD_L), W - PAD_R - TW);
// // //             const ty = activePt.y - TH - 14;
// // //             // Small arrow pointing down
// // //             const ax = activePt.x;
// // //             const ay = ty + TH;
// // //             return (
// // //               <g style={{ pointerEvents: "none" }}>
// // //                 <rect x={tx} y={ty} width={TW} height={TH} rx={TR} fill="#111827" />
// // //                 {/* arrow */}
// // //                 <polygon
// // //                   points={`${ax - 6},${ay} ${ax + 6},${ay} ${ax},${ay + 7}`}
// // //                   fill="#111827"
// // //                 />
// // //                 <text x={tx + TW / 2} y={ty + 16} textAnchor="middle"
// // //                   fontSize="13" fontWeight="800" fill="#fff" fontFamily="DM Sans">
// // //                   {activePt.value} Nos
// // //                 </text>
// // //                 <text x={tx + TW / 2} y={ty + 31} textAnchor="middle"
// // //                   fontSize="11" fill="#9ca3af" fontFamily="DM Sans">
// // //                   {activePt.date}
// // //                 </text>
// // //               </g>
// // //             );
// // //           })()}
// // //         </svg>

// // //         <div className="wd-chart-labels">
// // //           {TREND_DATA.map((d) => (
// // //             <span key={d.date}>{d.date}</span>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // // ─── APP ──────────────────────────────────────────────────────────────────────

// // // export function App() {
// // //   const [activeNav, setActiveNav] = React.useState("Dashboard");

// // //   return (
// // //     <>
// // //       <style>{CSS}</style>

// // //       <div className="wd-root">
// // //         {/* ── SIDEBAR ── */}
// // //         <aside className="wd-sidebar">
// // //           <div className="wd-brand">
// // //             <div className="wd-brand-logo">🔥</div>
// // //             <div className="wd-brand-text">
// // //               <h2>Waters</h2>
// // //               <span>MANUFACTURING</span>
// // //             </div>
// // //           </div>

// // //           <nav className="wd-nav">
// // //             {SIDEBAR_ITEMS.map((item) => (
// // //               <button
// // //                 key={item.label}
// // //                 className={`wd-nav-item ${activeNav === item.label ? "active" : ""}`}
// // //                 onClick={() => setActiveNav(item.label)}
// // //               >
// // //                 <span className="wd-nav-icon">{item.icon}</span>
// // //                 {item.label}
// // //               </button>
// // //             ))}
// // //           </nav>

// // //           <div className="wd-sidebar-bottom">
// // //             <div className="wd-sys-card">
// // //               <div className="wd-sys-row">
// // //                 <span className="wd-green-pulse"></span>
// // //                 <span>System Status</span>
// // //               </div>
// // //               <strong>All Systems Operational</strong>
// // //               <div className="wd-wave"></div>
// // //             </div>

// // //             <div className="wd-profile">
// // //               <div className="wd-avatar">AM</div>
// // //               <div>
// // //                 <strong style={{ color: "#fff", fontSize: 13 }}>Alex Morgan</strong>
// // //                 <span>Administrator</span>
// // //               </div>
// // //               <span className="wd-profile-arrow">⌄</span>
// // //             </div>
// // //           </div>
// // //         </aside>

// // //         {/* ── MAIN ── */}
// // //         <main className="wd-main">

// // //           {/* TOPBAR */}
// // //           <div className="wd-topbar">
// // //             <div>
// // //               <h1>Welcome back, Alex 👋</h1>
// // //               <p>Here's what's happening on the shop floor today.</p>
// // //             </div>
// // //             <div className="wd-top-actions">
// // //               <div className="wd-search">⌕&nbsp; Search or type a command (Ctrl + G)</div>
// // //               <button className="wd-notif-btn">
// // //                 🔔<span className="wd-notif-badge">3</span>
// // //               </button>
// // //               <div className="wd-user-chip">AM</div>
// // //               <div className="wd-date-chip">▣ May 13, 2025 ▾</div>
// // //             </div>
// // //           </div>

// // //           {/* WORKFLOW */}
// // //           <div className="wd-workflow">
// // //             <WorkflowCard icon="🍾" iconColor="green" title="Work Orders" value="24" statusDot="green" status="Active" />
// // //             <div className="wd-connector">
// // //               <span className="wd-conn-line"></span>
// // //               <button className="wd-conn-btn">›</button>
// // //               <span className="wd-conn-line"></span>
// // //             </div>
// // //             <WorkflowCard icon="🧾" iconColor="blue" title="Job Cards" value="11" statusDot="orange" status="In Progress" />
// // //             <div className="wd-connector">
// // //               <span className="wd-conn-line"></span>
// // //               <button className="wd-conn-btn">›</button>
// // //               <span className="wd-conn-line"></span>
// // //             </div>
// // //             <WorkflowCard icon="📦" iconColor="orange" title="Stock Entries" value="8" statusDot="blue" status="Pending Submit" />
// // //           </div>

// // //           {/* KPI */}
// // //           <div className="wd-kpi-grid">
// // //             {KPIS.map((k) => <KpiCard key={k.title} {...k} />)}
// // //           </div>

// // //           {/* LIVE */}
// // //           <div className="wd-img-grid">
// // //             <LiveCard title="Filling Line 1" subtitle="Running smoothly" />
// // //             <LiveCard title="Store & Dispatch" subtitle="Packing, storage & outbound dispatch" />
// // //           </div>

// // //           {/* BOTTOM */}
// // //           <div className="wd-bottom-grid">

// // //             {/* Work Order Table */}
// // //             <div className="wd-panel">
// // //               <div className="wd-panel-hdr">
// // //                 <h3>Work Order Monitor</h3>
// // //                 <button className="wd-view-btn">View All</button>
// // //               </div>
// // //               <table className="wd-table">
// // //                 <thead>
// // //                   <tr>
// // //                     <th>Work Order</th>
// // //                     <th>Item</th>
// // //                     <th>Target Qty</th>
// // //                     <th>Good Qty</th>
// // //                     <th>Loose Qty</th>
// // //                     <th>Status</th>
// // //                     <th>Action</th>
// // //                   </tr>
// // //                 </thead>
// // //                 <tbody>
// // //                   {WORK_ORDERS.map((row) => (
// // //                     <tr key={row.id}>
// // //                       <td>{row.id}</td>
// // //                       <td>{row.item}</td>
// // //                       <td>{row.target}</td>
// // //                       <td>{row.good}</td>
// // //                       <td>{row.loose}</td>
// // //                       <td><span className={`wd-badge ${row.badge}`}>{row.status}</span></td>
// // //                       <td><button className="wd-eye-btn">👁</button></td>
// // //                     </tr>
// // //                   ))}
// // //                 </tbody>
// // //               </table>
// // //             </div>

// // //             {/* Donut */}
// // //             <DonutPanel />

// // //             {/* Trend */}
// // //             <TrendPanel />

// // //           </div>
// // //         </main>
// // //       </div>
// // //     </>
// // //   );
// // // }

// // // export default App;

// // import * as React from "react";

// // // ─── MOCK DATA ───────────────────────────────────────────────────────────────

// // const TREND_DATA = [
// //   { date: "May 8",  value: 28 },
// //   { date: "May 9",  value: 44 },
// //   { date: "May 10", value: 22 },
// //   { date: "May 11", value: 61 },
// //   { date: "May 12", value: 48 },
// //   { date: "May 13", value: 36 },
// //   { date: "May 14", value: 61 },
// // ];

// // const SIDEBAR_ITEMS = [
// //   { label: "Dashboard",     icon: "⊞", active: true  },
// //   { label: "Work Orders",   icon: "📋"               },
// //   { label: "Job Cards",     icon: "🧾"               },
// //   { label: "Stock",         icon: "📦"               },
// //   { label: "Stock Entries", icon: "📑"               },
// //   { label: "Reports",       icon: "📊"               },
// //   { label: "Analytics",     icon: "📈"               },
// //   { label: "Settings",      icon: "⚙️"              },
// // ];

// // const KPIS = [
// //   { title: "Good Quantity (Box)",    value: "204.99", sub: "↑ 2.4% vs yesterday", icon: "🍾", color: "green",  trend: "line" },
// //   { title: "Loose Quantity (Box)",   value: "197.00", sub: "↑ 9.8% vs yesterday", icon: "🧃", color: "yellow", trend: "line" },
// //   { title: "Active Work Orders",     value: "24",     sub: "Active",              icon: "📋", color: "blue",   trend: "bars" },
// //   { title: "Job Cards In Progress",  value: "42",     sub: "In Progress",         icon: "🧾", color: "purple", trend: "bars" },
// //   { title: "Stock Items",            value: "128",    sub: "Active",              icon: "🏬", color: "orange", trend: "bars" },
// // ];

// // const WORK_ORDERS = [
// //   { id: "WO-00045", item: "Mango Drink 250ml",  target: "300 Box", good: "197 Box", loose: "12 Box", status: "Ready for QC",  badge: "warning" },
// //   { id: "WO-00046", item: "Lemon Drink 250ml",  target: "150 Box", good: "136 Box", loose: "8 Box",  status: "Completed",     badge: "success" },
// //   { id: "WO-00047", item: "Orange Drink 250ml", target: "300 Box", good: "285 Box", loose: "15 Box", status: "In Progress",   badge: "info"    },
// //   { id: "WO-00048", item: "Apple Drink 250ml",  target: "250 Box", good: "241 Box", loose: "9 Box",  status: "Job Card Open", badge: "purple"  },
// // ];

// // // ─── STYLES ───────────────────────────────────────────────────────────────────

// // const CSS = `
// //   @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');

// //   *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

// //   .wd-root {
// //     font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif;
// //     background: #f0f2f5;
// //     color: #111827;
// //     display: grid;
// //     grid-template-columns: 220px 1fr;
// //     height: 100vh;
// //     overflow: hidden;
// //   }

// //   /* ── SIDEBAR ── */
// //   .wd-sidebar {
// //     background: linear-gradient(180deg, #0a0c10 0%, #111520 100%);
// //     color: #fff;
// //     display: flex;
// //     flex-direction: column;
// //     padding: 20px 12px;
// //     overflow-y: auto;
// //     position: relative;
// //   }
// //   .wd-sidebar::after {
// //     content: '';
// //     position: absolute;
// //     top: 0; right: 0;
// //     width: 1px; height: 100%;
// //     background: linear-gradient(180deg, transparent, rgba(255,196,0,.15), transparent);
// //   }
// //   .wd-brand {
// //     display: flex; align-items: center; gap: 10px;
// //     padding: 0 6px; margin-bottom: 28px;
// //   }
// //   .wd-brand-logo {
// //     width: 38px; height: 38px; border-radius: 50%;
// //     background: linear-gradient(135deg, #ffd21f, #ff8a00);
// //     display: flex; align-items: center; justify-content: center;
// //     font-size: 20px; font-weight: 900; color: #111;
// //     box-shadow: 0 0 20px rgba(255,196,0,.4); flex-shrink: 0;
// //   }
// //   .wd-brand-text h2 { font-size: 22px; font-weight: 800; line-height: 1; letter-spacing: -.5px; }
// //   .wd-brand-text span { font-size: 10px; letter-spacing: 2px; color: #9ca3af; font-weight: 600; }
// //   .wd-nav { display: flex; flex-direction: column; gap: 4px; }
// //   .wd-nav-item {
// //     display: flex; align-items: center; gap: 12px;
// //     padding: 11px 12px; border-radius: 10px;
// //     font-size: 14px; font-weight: 500; color: #9ca3af;
// //     border: none; background: transparent; text-align: left;
// //     cursor: pointer; transition: .2s; width: 100%;
// //   }
// //   .wd-nav-item:hover { background: rgba(255,255,255,.06); color: #fff; }
// //   .wd-nav-item.active { background: linear-gradient(135deg, #ffc400, #b38000); color: #111; font-weight: 700; }
// //   .wd-nav-icon { font-size: 16px; width: 22px; text-align: center; flex-shrink: 0; }
// //   .wd-sidebar-bottom { margin-top: auto; display: flex; flex-direction: column; gap: 10px; padding-top: 16px; }
// //   .wd-sys-card {
// //     background: rgba(255,255,255,.04); border: 1px solid rgba(255,255,255,.08);
// //     border-radius: 12px; padding: 12px;
// //   }
// //   .wd-sys-row { display: flex; align-items: center; gap: 8px; font-size: 12px; color: #9ca3af; margin-bottom: 6px; }
// //   .wd-green-pulse {
// //     width: 8px; height: 8px; border-radius: 50%;
// //     background: #22c55e; box-shadow: 0 0 10px #22c55e;
// //     animation: wdPulse 2s infinite; flex-shrink: 0;
// //   }
// //   @keyframes wdPulse { 0%,100%{opacity:1} 50%{opacity:.4} }
// //   .wd-sys-card strong { font-size: 12px; color: #4ade80; }
// //   .wd-wave {
// //     height: 16px; margin-top: 10px;
// //     background: repeating-linear-gradient(90deg, transparent 0, transparent 4px, rgba(74,222,128,.55) 4px, rgba(74,222,128,.55) 5px);
// //     border-bottom: 1px solid rgba(74,222,128,.35);
// //   }
// //   .wd-profile {
// //     display: flex; align-items: center; gap: 10px;
// //     background: rgba(255,255,255,.04); border: 1px solid rgba(255,255,255,.08);
// //     border-radius: 12px; padding: 10px 12px;
// //   }
// //   .wd-avatar {
// //     width: 34px; height: 34px; border-radius: 50%;
// //     background: #1f2937; display: flex; align-items: center;
// //     justify-content: center; font-size: 12px; font-weight: 700; flex-shrink: 0;
// //   }
// //   .wd-profile strong { display: block; font-size: 13px; font-weight: 700; }
// //   .wd-profile span { font-size: 11px; color: #9ca3af; }
// //   .wd-profile-arrow { margin-left: auto; color: #9ca3af; font-size: 12px; }

// //   /* ── MAIN ── */
// //   .wd-main {
// //     overflow-y: auto; padding: 20px 24px 28px;
// //     display: flex; flex-direction: column; gap: 14px;
// //     background: radial-gradient(ellipse at 80% 0%, rgba(255,196,0,.06) 0%, transparent 50%), #f0f2f5;
// //   }

// //   /* ── TOPBAR ── */
// //   .wd-topbar { display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 12px; }
// //   .wd-topbar h1 { font-size: 26px; font-weight: 800; letter-spacing: -.5px; color: #111827; }
// //   .wd-topbar p { font-size: 14px; color: #64748b; margin-top: 3px; }
// //   .wd-top-actions { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
// //   .wd-search {
// //     background: #fff; border: 1px solid #e5e7eb; border-radius: 10px;
// //     padding: 9px 14px; font-size: 13px; color: #94a3b8;
// //     width: 260px; box-shadow: 0 2px 8px rgba(0,0,0,.04);
// //   }
// //   @keyframes wdSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
// //   .wd-icon-btn {
// //     width: 36px; height: 36px; border-radius: 10px;
// //     background: #fff; border: 1px solid #e5e7eb;
// //     display: flex; align-items: center; justify-content: center;
// //     font-size: 18px; line-height: 1; color: #475569;
// //     box-shadow: 0 2px 8px rgba(0,0,0,.04);
// //     cursor: pointer; transition: background .15s, color .15s, transform .15s;
// //     flex-shrink: 0;
// //   }
// //   .wd-icon-btn:hover { background: #f1f5f9; color: #111827; transform: scale(1.08); }
// //   .wd-icon-btn:active { transform: scale(.94); }
// //   .wd-notif-btn {
// //     position: relative; width: 36px; height: 36px; border-radius: 50%;
// //     background: #fff; border: 1px solid #e5e7eb;
// //     display: flex; align-items: center; justify-content: center;
// //     font-size: 16px; box-shadow: 0 2px 8px rgba(0,0,0,.04); cursor: pointer;
// //   }
// //   .wd-notif-badge {
// //     position: absolute; top: -4px; right: -4px;
// //     background: #ffc400; color: #111; font-size: 10px; font-weight: 800;
// //     width: 17px; height: 17px; border-radius: 50%;
// //     display: flex; align-items: center; justify-content: center;
// //   }
// //   .wd-user-chip {
// //     width: 36px; height: 36px; border-radius: 50%;
// //     background: #0a0c10; color: #fff;
// //     font-size: 12px; font-weight: 700;
// //     display: flex; align-items: center; justify-content: center;
// //   }
// //   .wd-date-chip {
// //     background: #fff; border: 1px solid #e5e7eb; border-radius: 10px;
// //     padding: 8px 14px; font-size: 13px; font-weight: 700;
// //     box-shadow: 0 2px 8px rgba(0,0,0,.04);
// //     display: flex; align-items: center; gap: 6px;
// //   }

// //   /* ── WORKFLOW ── */
// //   .wd-workflow {
// //     display: grid;
// //     grid-template-columns: 1fr auto 1fr auto 1fr;
// //     align-items: center;
// //   }
// //   .wd-wf-card {
// //     background: #fff; border: 1px solid #e5e7eb; border-radius: 18px;
// //     padding: 16px 20px; display: flex; align-items: center; gap: 16px;
// //     box-shadow: 0 4px 16px rgba(0,0,0,.05); min-width: 0;
// //   }
// //   .wd-wf-icon {
// //     width: 68px; height: 68px; border-radius: 50%;
// //     display: flex; align-items: center; justify-content: center;
// //     font-size: 32px; flex-shrink: 0;
// //   }
// //   .wd-wf-icon.green  { background: #f0fdf4; }
// //   .wd-wf-icon.blue   { background: #eff6ff; }
// //   .wd-wf-icon.orange { background: #fff7ed; }
// //   .wd-wf-info { display: flex; flex-direction: column; min-width: 0; }
// //   .wd-wf-info h3     { font-size: 13px; font-weight: 600; color: #64748b; margin-bottom: 4px; white-space: nowrap; }
// //   .wd-wf-info strong { font-size: 32px; font-weight: 800; line-height: 1; display: block; color: #111827; }
// //   .wd-wf-status      { display: flex; align-items: center; gap: 6px; font-size: 13px; color: #64748b; margin-top: 5px; }
// //   .wd-dot { width: 9px; height: 9px; border-radius: 50%; flex-shrink: 0; }
// //   .wd-dot.green  { background: #22c55e; }
// //   .wd-dot.orange { background: #f97316; }
// //   .wd-dot.blue   { background: #3b82f6; }
// //   .wd-connector  { display: flex; align-items: center; justify-content: center; padding: 0 4px; }
// //   .wd-conn-line  { border-top: 2.5px dashed #fbbf24; width: 28px; }
// //   .wd-conn-btn {
// //     width: 30px; height: 30px; border-radius: 50%;
// //     background: #ffc400; border: none; font-size: 18px; font-weight: 900;
// //     box-shadow: 0 4px 12px rgba(255,196,0,.35); cursor: pointer; color: #111;
// //     display: flex; align-items: center; justify-content: center;
// //     transition: transform .2s;
// //   }
// //   .wd-conn-btn:hover { transform: scale(1.15); }

// //   /* ── KPI ── */
// //   .wd-kpi-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 12px; }
// //   .wd-kpi-card {
// //     background: #fff; border: 1px solid #e5e7eb; border-radius: 14px;
// //     padding: 14px; display: flex; align-items: center; gap: 12px;
// //     box-shadow: 0 2px 10px rgba(0,0,0,.04); overflow: hidden;
// //   }
// //   .wd-kpi-ico {
// //     width: 50px; height: 50px; border-radius: 50%;
// //     display: flex; align-items: center; justify-content: center;
// //     font-size: 24px; flex-shrink: 0;
// //   }
// //   .wd-kpi-ico.green  { background: #dcfce7; }
// //   .wd-kpi-ico.yellow { background: #fef9c3; }
// //   .wd-kpi-ico.blue   { background: #dbeafe; }
// //   .wd-kpi-ico.purple { background: #f3e8ff; }
// //   .wd-kpi-ico.orange { background: #fff7ed; }
// //   .wd-kpi-body { flex: 1; min-width: 0; }
// //   .wd-kpi-body p      { font-size: 11px; color: #64748b; font-weight: 600; margin-bottom: 4px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
// //   .wd-kpi-body strong { font-size: 22px; font-weight: 800; display: block; line-height: 1; }
// //   .wd-kpi-body span   { font-size: 11px; font-weight: 700; }
// //   .wd-kpi-body span.green  { color: #16a34a; }
// //   .wd-kpi-body span.blue   { color: #3b82f6; }
// //   .wd-kpi-body span.purple { color: #7c3aed; }
// //   .wd-kpi-body span.orange { color: #ea580c; }

// //   /* ── LIVE CARDS ── */
// //   .wd-img-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
// //   .wd-live-card {
// //     height: 196px; border-radius: 16px; overflow: hidden;
// //     position: relative; background: #1a1f2e;
// //     box-shadow: 0 8px 24px rgba(0,0,0,.12);
// //   }
// //   .wd-live-placeholder {
// //     width: 100%; height: 100%;
// //     display: flex; align-items: center; justify-content: center;
// //     background: linear-gradient(135deg, #1a1f2e, #0f1623);
// //   }
// //   .wd-live-overlay {
// //     position: absolute; inset: auto 0 0;
// //     padding: 18px 18px 14px;
// //     background: linear-gradient(0deg, rgba(0,0,0,.82), transparent);
// //     color: #fff; display: flex; justify-content: space-between; align-items: flex-end;
// //   }
// //   .wd-live-title { display: flex; align-items: center; gap: 8px; font-size: 15px; font-weight: 700; }
// //   .wd-live-dot {
// //     width: 9px; height: 9px; border-radius: 50%; background: #ffc400;
// //     animation: wdPulse 1.5s infinite; flex-shrink: 0;
// //   }
// //   .wd-live-sub { font-size: 12px; color: #d1d5db; margin-top: 3px; }
// //   .wd-live-btn {
// //     background: rgba(34,197,94,.2); border: 1px solid rgba(34,197,94,.5);
// //     color: #4ade80; padding: 7px 14px; border-radius: 8px;
// //     font-size: 12px; font-weight: 800; cursor: pointer; font-family: inherit;
// //   }

// //   /* ── BOTTOM ── */
// //   .wd-bottom-grid { display: grid; grid-template-columns: 1.4fr .85fr 1fr; gap: 14px; }
// //   .wd-panel {
// //     background: #fff; border: 1px solid #e5e7eb; border-radius: 14px;
// //     padding: 16px; box-shadow: 0 2px 10px rgba(0,0,0,.04);
// //   }
// //   .wd-panel-hdr { display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; }
// //   .wd-panel-hdr h3 { font-size: 15px; font-weight: 800; }
// //   .wd-view-btn {
// //     background: #fff; border: 1px solid #e5e7eb; border-radius: 8px;
// //     padding: 6px 12px; font-size: 12px; font-weight: 700;
// //     cursor: pointer; font-family: inherit; transition: .2s;
// //   }
// //   .wd-view-btn:hover { background: #f8fafc; }

// //   /* TABLE */
// //   .wd-table { width: 100%; border-collapse: collapse; font-size: 11.5px; }
// //   .wd-table th {
// //     text-align: left; color: #94a3b8; font-weight: 700;
// //     padding: 8px 6px; border-bottom: 1px solid #f1f5f9; white-space: nowrap;
// //   }
// //   .wd-table td { padding: 10px 6px; font-weight: 600; border-bottom: 1px solid #f8fafc; white-space: nowrap; }
// //   .wd-table tr:last-child td { border-bottom: none; }
// //   .wd-table tbody tr:hover td { background: #fafbfc; }
// //   .wd-badge { display: inline-block; border-radius: 6px; padding: 4px 8px; font-size: 11px; font-weight: 700; }
// //   .wd-badge.warning { background: #fff7ed; color: #ea580c; }
// //   .wd-badge.success { background: #dcfce7; color: #16a34a; }
// //   .wd-badge.info    { background: #dbeafe; color: #2563eb; }
// //   .wd-badge.purple  { background: #f3e8ff; color: #7c3aed; }
// //   .wd-eye-btn { border: none; background: none; font-size: 14px; cursor: pointer; color: #94a3b8; transition: .2s; }
// //   .wd-eye-btn:hover { color: #111; }

// //   /* DONUT */
// //   .wd-donut-panel h3 { font-size: 14px; font-weight: 800; margin-bottom: 4px; }
// //   .wd-donut-wrap { display: flex; align-items: center; justify-content: space-around; margin-top: 14px; }
// //   .wd-donut-svg { cursor: pointer; transition: transform .2s, filter .2s; overflow: visible; }
// //   .wd-donut-svg:hover { transform: scale(1.05); filter: drop-shadow(0 8px 16px rgba(34,197,94,.22)); }
// //   .wd-legend { display: flex; flex-direction: column; gap: 14px; }
// //   .wd-legend-item {
// //     display: flex; align-items: flex-start; gap: 10px;
// //     cursor: pointer; padding: 6px 8px; border-radius: 10px; transition: .2s;
// //   }
// //   .wd-legend-item:hover, .wd-legend-item.active { background: #f8fafc; }
// //   .wd-legend-color { width: 11px; height: 11px; border-radius: 50%; margin-top: 3px; flex-shrink: 0; }
// //   .wd-legend-label { font-size: 12px; color: #64748b; font-weight: 600; }
// //   .wd-legend-val   { font-size: 16px; font-weight: 800; }
// //   .wd-legend-pct   { font-size: 11px; color: #94a3b8; }

// //   /* TREND CHART */
// //   .wd-trend-panel { display: flex; flex-direction: column; }
// //   .wd-chart-wrap  { position: relative; flex: 1; }
// //   .wd-chart-svg   { width: 100%; display: block; overflow: visible; }
// //   .wd-chart-labels {
// //     display: flex; justify-content: space-between;
// //     font-size: 10px; color: #94a3b8; margin-top: 4px; padding: 0 2px;
// //   }
// //   .wd-chart-dots { position: absolute; top: 0; left: 0; width: 100%; pointer-events: none; }
// //   .wd-chart-dot-btn {
// //     position: absolute; width: 16px; height: 16px; border-radius: 50%;
// //     background: #fbbf24; border: 2.5px solid #fff;
// //     box-shadow: 0 3px 10px rgba(251,191,36,.45);
// //     cursor: pointer; transform: translate(-50%, -50%);
// //     transition: transform .2s, background .2s;
// //     pointer-events: all; font-family: inherit;
// //   }
// //   .wd-chart-dot-btn:hover { transform: translate(-50%,-50%) scale(1.4); background: #fcd34d; }
// //   .wd-chart-tooltip {
// //     position: absolute; top: 4px; right: 4px;
// //     background: #111; color: #fff; border-radius: 8px;
// //     padding: 8px 12px; font-size: 12px; font-weight: 700;
// //     box-shadow: 0 8px 20px rgba(0,0,0,.2); pointer-events: none; z-index: 10;
// //   }
// //   .wd-chart-tooltip span { display: block; font-size: 11px; color: #9ca3af; font-weight: 500; margin-top: 2px; }

// //   @media (max-width: 1280px) {
// //     .wd-kpi-grid       { grid-template-columns: repeat(3, 1fr); }
// //     .wd-bottom-grid    { grid-template-columns: 1fr; }
// //     .wd-workflow       { grid-template-columns: 1fr 1fr 1fr; }
// //     .wd-connector      { display: none; }
// //   }
// //   @media (max-width: 900px) {
// //     .wd-root           { grid-template-columns: 1fr; }
// //     .wd-sidebar        { height: auto; }
// //     .wd-main           { height: auto; }
// //     .wd-img-grid,
// //     .wd-kpi-grid       { grid-template-columns: 1fr; }
// //   }
// // `;

// // // ─── HELPERS ──────────────────────────────────────────────────────────────────

// // function buildTrendPath(data, W = 300, H = 130, padX = 10, padY = 8) {
// //   const vals = data.map((d) => d.value);
// //   const min = Math.min(...vals) - 8;
// //   const max = Math.max(...vals) + 8;
// //   const pts = data.map((d, i) => ({
// //     x: padX + (i / (data.length - 1)) * (W - padX * 2),
// //     y: H - padY - ((d.value - min) / (max - min)) * (H - padY * 2),
// //     ...d,
// //   }));

// //   let smooth = `M${pts[0].x},${pts[0].y}`;
// //   for (let i = 1; i < pts.length; i++) {
// //     const cpX = (pts[i].x + pts[i - 1].x) / 2;
// //     smooth += ` C${cpX},${pts[i - 1].y} ${cpX},${pts[i].y} ${pts[i].x},${pts[i].y}`;
// //   }

// //   const area =
// //     smooth +
// //     ` L${pts[pts.length - 1].x},${H} L${pts[0].x},${H} Z`;

// //   return { pts, smooth, area, W, H };
// // }

// // // ─── SUB-COMPONENTS ───────────────────────────────────────────────────────────

// // function SparkLine({ color }) {
// //   return (
// //     <svg width="56" height="32" viewBox="0 0 56 32">
// //       <polyline
// //         points="2,26 12,18 22,22 32,10 42,14 52,6"
// //         fill="none"
// //         stroke={color}
// //         strokeWidth="2.5"
// //         strokeLinecap="round"
// //         strokeLinejoin="round"
// //       />
// //     </svg>
// //   );
// // }

// // function MiniBarChart() {
// //   const heights = [14, 22, 30, 42, 26, 46];
// //   return (
// //     <svg width="50" height="38" viewBox="0 0 50 38">
// //       {heights.map((h, i) => (
// //         <rect
// //           key={i}
// //           x={i * 8 + 1}
// //           y={38 - h}
// //           width="6"
// //           height={h}
// //           rx="2"
// //           fill="#fbbf24"
// //         />
// //       ))}
// //     </svg>
// //   );
// // }

// // function KpiCard({ icon, title, value, sub, color, trend }) {
// //   const subColor =
// //     color === "green" ? "green"
// //     : color === "yellow" ? "green"
// //     : color === "blue" ? "blue"
// //     : color === "purple" ? "purple"
// //     : "orange";

// //   return (
// //     <div className="wd-kpi-card">
// //       <div className={`wd-kpi-ico ${color}`}>{icon}</div>
// //       <div className="wd-kpi-body">
// //         <p>{title}</p>
// //         <strong>{value}</strong>
// //         <span className={subColor}>{sub}</span>
// //       </div>
// //       {trend === "line" ? (
// //         <SparkLine color={color === "green" ? "#22c55e" : "#eab308"} />
// //       ) : (
// //         <MiniBarChart />
// //       )}
// //     </div>
// //   );
// // }

// // function WorkflowCard({ icon, iconColor, title, value, statusDot, status }) {
// //   return (
// //     <div className="wd-wf-card">
// //       <div className={`wd-wf-icon ${iconColor}`}>{icon}</div>
// //       <div className="wd-wf-info">
// //         <h3>{title}</h3>
// //         <strong>{value}</strong>
// //         <div className="wd-wf-status">
// //           <span className={`wd-dot ${statusDot}`}></span>
// //           {status}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // function LiveCard({ title, subtitle }) {
// //   return (
// //     <div className="wd-live-card">
// //       <div className="wd-live-placeholder">
// //         <svg width="130" height="80" viewBox="0 0 130 80" fill="none" style={{ opacity: 0.12 }}>
// //           <rect x="5"  y="20" width="32" height="44" rx="5" fill="#fff" />
// //           <rect x="45" y="8"  width="9"  height="56" rx="4" fill="#fff" />
// //           <rect x="60" y="8"  width="9"  height="56" rx="4" fill="#fff" />
// //           <rect x="75" y="8"  width="9"  height="56" rx="4" fill="#fff" />
// //           <rect x="90" y="8"  width="9"  height="56" rx="4" fill="#fff" />
// //           <rect x="0"  y="62" width="130" height="6" rx="3" fill="#fff" />
// //           <circle cx="112" cy="36" r="14" fill="#fff" />
// //         </svg>
// //       </div>
// //       <div className="wd-live-overlay">
// //         <div>
// //           <div className="wd-live-title">
// //             <span className="wd-live-dot"></span>
// //             {title}
// //           </div>
// //           <div className="wd-live-sub">{subtitle}</div>
// //         </div>
// //         <button className="wd-live-btn">Live</button>
// //       </div>
// //     </div>
// //   );
// // }

// // function DonutPanel() {
// //   const [hover, setHover] = React.useState(null);

// //   const CIRC = 2 * Math.PI * 55; // ≈ 345.6
// //   const goodPct  = 0.965;
// //   const loosePct = 0.035;

// //   const label = hover === "good" ? "Good Qty" : hover === "loose" ? "Loose Qty" : "Total";
// //   const valTxt = hover === "good" ? "197" : hover === "loose" ? "7.73" : "204.99";

// //   return (
// //     <div className="wd-panel wd-donut-panel">
// //       <h3>Manufacturing Quantity Breakdown</h3>
// //       <div className="wd-donut-wrap">
// //         <svg
// //           className="wd-donut-svg"
// //           width="156" height="156"
// //           viewBox="0 0 156 156"
// //           onMouseLeave={() => setHover(null)}
// //         >
// //           {/* track */}
// //           <circle cx="78" cy="78" r="55" fill="none" stroke="#f1f5f9" strokeWidth="26" />
// //           {/* good arc */}
// //           <circle
// //             cx="78" cy="78" r="55"
// //             fill="none" stroke="#4ade80" strokeWidth="26"
// //             strokeDasharray={`${CIRC * goodPct} ${CIRC * loosePct}`}
// //             strokeDashoffset="0"
// //             transform="rotate(-90 78 78)"
// //             onMouseEnter={() => setHover("good")}
// //             style={{ cursor: "pointer" }}
// //           />
// //           {/* loose arc */}
// //           <circle
// //             cx="78" cy="78" r="55"
// //             fill="none" stroke="#fbbf24" strokeWidth="26"
// //             strokeDasharray={`${CIRC * loosePct} ${CIRC * goodPct}`}
// //             strokeDashoffset={-(CIRC * goodPct)}
// //             transform="rotate(-90 78 78)"
// //             onMouseEnter={() => setHover("loose")}
// //             style={{ cursor: "pointer" }}
// //           />
// //           {/* center text */}
// //           <text x="78" y="70" textAnchor="middle" fontSize="11" fill="#94a3b8" fontFamily="DM Sans" fontWeight="600">{label}</text>
// //           <text x="78" y="86" textAnchor="middle" fontSize="20" fill="#111" fontFamily="DM Sans" fontWeight="800">{valTxt}</text>
// //           <text x="78" y="100" textAnchor="middle" fontSize="11" fill="#94a3b8" fontFamily="DM Sans" fontWeight="600">Box</text>
// //         </svg>

// //         <div className="wd-legend">
// //           <div
// //             className={`wd-legend-item ${hover === "good" ? "active" : ""}`}
// //             onMouseEnter={() => setHover("good")}
// //             onMouseLeave={() => setHover(null)}
// //           >
// //             <span className="wd-legend-color" style={{ background: "#4ade80" }}></span>
// //             <div>
// //               <div className="wd-legend-label">Good Quantity</div>
// //               <div className="wd-legend-val">197 Box</div>
// //               <div className="wd-legend-pct">(96.50%)</div>
// //             </div>
// //           </div>
// //           <div
// //             className={`wd-legend-item ${hover === "loose" ? "active" : ""}`}
// //             onMouseEnter={() => setHover("loose")}
// //             onMouseLeave={() => setHover(null)}
// //           >
// //             <span className="wd-legend-color" style={{ background: "#fbbf24" }}></span>
// //             <div>
// //               <div className="wd-legend-label">Loose Quantity</div>
// //               <div className="wd-legend-val">7.73 Box</div>
// //               <div className="wd-legend-pct">(3.79%)</div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // function TrendPanel() {
// //   const [activePt, setActivePt] = React.useState(null);
// //   // Extra right padding so the tooltip for the last point doesn't clip
// //   const W = 320, H = 140, PAD_L = 8, PAD_R = 8, PAD_T = 18, PAD_B = 10;
// //   const { pts, smooth, area } = buildTrendPath(TREND_DATA, W, H, PAD_L, PAD_T);

// //   // Tooltip box dimensions (in SVG units)
// //   const TW = 80, TH = 42, TR = 7;

// //   return (
// //     <div className="wd-panel wd-trend-panel">
// //       <div className="wd-panel-hdr">
// //         <h3>Loose Quantity Trend (Nos)</h3>
// //         <button className="wd-view-btn">7 Days ⌄</button>
// //       </div>

// //       <div className="wd-chart-wrap" style={{ position: "relative" }}>
// //         {/*
// //           Single SVG — dots live INSIDE it, so their coords are always exact.
// //           preserveAspectRatio="xMidYMid meet" keeps aspect ratio intact.
// //         */}
// //         <svg
// //           className="wd-chart-svg"
// //           viewBox={`0 0 ${W} ${H}`}
// //           style={{ width: "100%", height: H, display: "block", overflow: "visible" }}
// //         >
// //           <defs>
// //             <linearGradient id="wdAreaGrad" x1="0" y1="0" x2="0" y2="1">
// //               <stop offset="0%"   stopColor="#fbbf24" stopOpacity="0.38" />
// //               <stop offset="100%" stopColor="#fbbf24" stopOpacity="0"    />
// //             </linearGradient>
// //           </defs>

// //           {/* grid lines */}
// //           {[PAD_T, PAD_T + 30, PAD_T + 60, PAD_T + 90].map((y) => (
// //             <line key={y} x1={PAD_L} y1={y} x2={W - PAD_R} y2={y} stroke="#f1f5f9" strokeWidth="1" />
// //           ))}

// //           {/* area + line */}
// //           <path d={area}   fill="url(#wdAreaGrad)" />
// //           <path d={smooth} fill="none" stroke="#f59e0b" strokeWidth="3"
// //                 strokeLinecap="round" strokeLinejoin="round" />

// //           {/* dots — rendered in SVG coords, no offset issues */}
// //           {pts.map((p) => (
// //             <g key={p.date}>
// //               {/* larger invisible hit area */}
// //               <circle
// //                 cx={p.x} cy={p.y} r={12}
// //                 fill="transparent"
// //                 style={{ cursor: "pointer" }}
// //                 onMouseEnter={() => setActivePt(p)}
// //                 onMouseLeave={() => setActivePt(null)}
// //               />
// //               {/* visible dot */}
// //               <circle
// //                 cx={p.x} cy={p.y}
// //                 r={activePt && activePt.date === p.date ? 7 : 5}
// //                 fill={activePt && activePt.date === p.date ? "#fcd34d" : "#fbbf24"}
// //                 stroke="#fff"
// //                 strokeWidth="2.5"
// //                 style={{
// //                   filter: activePt && activePt.date === p.date
// //                     ? "drop-shadow(0 3px 8px rgba(251,191,36,.6))"
// //                     : "drop-shadow(0 2px 4px rgba(251,191,36,.35))",
// //                   transition: "r .15s, fill .15s",
// //                   pointerEvents: "none",
// //                 }}
// //               />
// //             </g>
// //           ))}

// //           {/* SVG-native tooltip — always aligned to the hovered dot */}
// //           {activePt && (() => {
// //             // Clamp so tooltip never goes off left/right edge
// //             const tx = Math.min(Math.max(activePt.x - TW / 2, PAD_L), W - PAD_R - TW);
// //             const ty = activePt.y - TH - 14;
// //             // Small arrow pointing down
// //             const ax = activePt.x;
// //             const ay = ty + TH;
// //             return (
// //               <g style={{ pointerEvents: "none" }}>
// //                 <rect x={tx} y={ty} width={TW} height={TH} rx={TR} fill="#111827" />
// //                 {/* arrow */}
// //                 <polygon
// //                   points={`${ax - 6},${ay} ${ax + 6},${ay} ${ax},${ay + 7}`}
// //                   fill="#111827"
// //                 />
// //                 <text x={tx + TW / 2} y={ty + 16} textAnchor="middle"
// //                       fontSize="13" fontWeight="800" fill="#fff" fontFamily="DM Sans">
// //                   {activePt.value} Nos
// //                 </text>
// //                 <text x={tx + TW / 2} y={ty + 31} textAnchor="middle"
// //                       fontSize="11" fill="#9ca3af" fontFamily="DM Sans">
// //                   {activePt.date}
// //                 </text>
// //               </g>
// //             );
// //           })()}
// //         </svg>

// //         <div className="wd-chart-labels">
// //           {TREND_DATA.map((d) => (
// //             <span key={d.date}>{d.date}</span>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // // ─── APP ──────────────────────────────────────────────────────────────────────

// // export function App() {
// //   const [activeNav, setActiveNav]   = React.useState("Dashboard");
// //   const [isFullscreen, setIsFullscreen] = React.useState(false);
// //   const [refreshing, setRefreshing]     = React.useState(false);
// //   const rootRef = React.useRef(null);

// //   // ── Fullscreen toggle ──
// //   const toggleFullscreen = React.useCallback(() => {
// //     if (!document.fullscreenElement) {
// //       rootRef.current?.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
// //     } else {
// //       document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
// //     }
// //   }, []);

// //   React.useEffect(() => {
// //     const onFsChange = () => setIsFullscreen(!!document.fullscreenElement);
// //     document.addEventListener("fullscreenchange", onFsChange);
// //     return () => document.removeEventListener("fullscreenchange", onFsChange);
// //   }, []);

// //   // ── Refresh (spin for 800 ms then stop) ──
// //   const handleRefresh = React.useCallback(() => {
// //     if (refreshing) return;
// //     setRefreshing(true);
// //     setTimeout(() => setRefreshing(false), 800);
// //   }, [refreshing]);

// //   return (
// //     <>
// //       <style>{CSS}</style>

// //       <div className="wd-root" ref={rootRef}>
// //         {/* ── SIDEBAR ── */}
// //         <aside className="wd-sidebar">
// //           <div className="wd-brand">
// //             <div className="wd-brand-logo">🔥</div>
// //             <div className="wd-brand-text">
// //               <h2>Waters</h2>
// //               <span>MANUFACTURING</span>
// //             </div>
// //           </div>

// //           <nav className="wd-nav">
// //             {SIDEBAR_ITEMS.map((item) => (
// //               <button
// //                 key={item.label}
// //                 className={`wd-nav-item ${activeNav === item.label ? "active" : ""}`}
// //                 onClick={() => setActiveNav(item.label)}
// //               >
// //                 <span className="wd-nav-icon">{item.icon}</span>
// //                 {item.label}
// //               </button>
// //             ))}
// //           </nav>

// //           <div className="wd-sidebar-bottom">
// //             <div className="wd-sys-card">
// //               <div className="wd-sys-row">
// //                 <span className="wd-green-pulse"></span>
// //                 <span>System Status</span>
// //               </div>
// //               <strong>All Systems Operational</strong>
// //               <div className="wd-wave"></div>
// //             </div>

// //             <div className="wd-profile">
// //               <div className="wd-avatar">AM</div>
// //               <div>
// //                 <strong style={{ color: "#fff", fontSize: 13 }}>Alex Morgan</strong>
// //                 <span>Administrator</span>
// //               </div>
// //               <span className="wd-profile-arrow">⌄</span>
// //             </div>
// //           </div>
// //         </aside>

// //         {/* ── MAIN ── */}
// //         <main className="wd-main">

// //           {/* TOPBAR */}
// //           <div className="wd-topbar">
// //             <div>
// //               <h1>Welcome back, Alex 👋</h1>
// //               <p>Here's what's happening on the shop floor today.</p>
// //             </div>
// //             <div className="wd-top-actions">
// //               <div className="wd-search">⌕&nbsp; Search or type a command (Ctrl + G)</div>
// //               <button
// //                 className="wd-icon-btn"
// //                 onClick={handleRefresh}
// //                 title="Refresh dashboard"
// //                 style={{ animation: refreshing ? "wdSpin .8s linear" : "none" }}
// //               >
// //                 ↻
// //               </button>
// //               <button
// //                 className="wd-icon-btn"
// //                 onClick={toggleFullscreen}
// //                 title={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
// //               >
// //                 {isFullscreen ? "⊠" : "⛶"}
// //               </button>
// //               <button className="wd-notif-btn">
// //                 🔔<span className="wd-notif-badge">3</span>
// //               </button>
// //               <div className="wd-user-chip">AM</div>
// //               <div className="wd-date-chip">▣ May 13, 2025 ▾</div>
// //             </div>
// //           </div>

// //           {/* WORKFLOW */}
// //           <div className="wd-workflow">
// //             <WorkflowCard icon="🍾" iconColor="green"  title="Work Orders"   value="24" statusDot="green"  status="Active"          />
// //             <div className="wd-connector">
// //               <span className="wd-conn-line"></span>
// //               <button className="wd-conn-btn">›</button>
// //               <span className="wd-conn-line"></span>
// //             </div>
// //             <WorkflowCard icon="🧾" iconColor="blue"   title="Job Cards"     value="11" statusDot="orange" status="In Progress"      />
// //             <div className="wd-connector">
// //               <span className="wd-conn-line"></span>
// //               <button className="wd-conn-btn">›</button>
// //               <span className="wd-conn-line"></span>
// //             </div>
// //             <WorkflowCard icon="📦" iconColor="orange" title="Stock Entries" value="8"  statusDot="blue"   status="Pending Submit"   />
// //           </div>

// //           {/* KPI */}
// //           <div className="wd-kpi-grid">
// //             {KPIS.map((k) => <KpiCard key={k.title} {...k} />)}
// //           </div>

// //           {/* LIVE */}
// //           <div className="wd-img-grid">
// //             <LiveCard title="Filling Line 1"   subtitle="Running smoothly"                        />
// //             <LiveCard title="Store & Dispatch" subtitle="Packing, storage & outbound dispatch"    />
// //           </div>

// //           {/* BOTTOM */}
// //           <div className="wd-bottom-grid">

// //             {/* Work Order Table */}
// //             <div className="wd-panel">
// //               <div className="wd-panel-hdr">
// //                 <h3>Work Order Monitor</h3>
// //                 <button className="wd-view-btn">View All</button>
// //               </div>
// //               <table className="wd-table">
// //                 <thead>
// //                   <tr>
// //                     <th>Work Order</th>
// //                     <th>Item</th>
// //                     <th>Target Qty</th>
// //                     <th>Good Qty</th>
// //                     <th>Loose Qty</th>
// //                     <th>Status</th>
// //                     <th>Action</th>
// //                   </tr>
// //                 </thead>
// //                 <tbody>
// //                   {WORK_ORDERS.map((row) => (
// //                     <tr key={row.id}>
// //                       <td>{row.id}</td>
// //                       <td>{row.item}</td>
// //                       <td>{row.target}</td>
// //                       <td>{row.good}</td>
// //                       <td>{row.loose}</td>
// //                       <td><span className={`wd-badge ${row.badge}`}>{row.status}</span></td>
// //                       <td><button className="wd-eye-btn">👁</button></td>
// //                     </tr>
// //                   ))}
// //                 </tbody>
// //               </table>
// //             </div>

// //             {/* Donut */}
// //             <DonutPanel />

// //             {/* Trend */}
// //             <TrendPanel />

// //           </div>
// //         </main>
// //       </div>
// //     </>
// //   );
// // }

// // export default App;

// import * as React from "react";

// // ─── MOCK DATA ───────────────────────────────────────────────────────────────

// const TREND_DATA = [
//   { date: "May 8",  value: 28 },
//   { date: "May 9",  value: 44 },
//   { date: "May 10", value: 22 },
//   { date: "May 11", value: 61 },
//   { date: "May 12", value: 48 },
//   { date: "May 13", value: 36 },
//   { date: "May 14", value: 61 },
// ];

// const SIDEBAR_ITEMS = [
//   { label: "Dashboard",     icon: "⊞", active: true  },
//   { label: "Work Orders",   icon: "📋"               },
//   { label: "Job Cards",     icon: "🧾"               },
//   { label: "Stock",         icon: "📦"               },
//   { label: "Stock Entries", icon: "📑"               },
//   { label: "Reports",       icon: "📊"               },
//   { label: "Analytics",     icon: "📈"               },
//   { label: "Settings",      icon: "⚙️"              },
// ];

// const KPIS = [
//   { title: "Good Quantity (Box)",    value: "204.99", sub: "↑ 2.4% vs yesterday", icon: "🍾", color: "green",  trend: "line" },
//   { title: "Loose Quantity (Box)",   value: "197.00", sub: "↑ 9.8% vs yesterday", icon: "🧃", color: "yellow", trend: "line" },
//   { title: "Active Work Orders",     value: "24",     sub: "Active",              icon: "📋", color: "blue",   trend: "bars" },
//   { title: "Job Cards In Progress",  value: "42",     sub: "In Progress",         icon: "🧾", color: "purple", trend: "bars" },
//   { title: "Stock Items",            value: "128",    sub: "Active",              icon: "🏬", color: "orange", trend: "bars" },
// ];

// const WORK_ORDERS = [
//   { id: "WO-00045", item: "Mango Drink 250ml",  target: "300 Box", good: "197 Box", loose: "12 Box", status: "Ready for QC",  badge: "warning" },
//   { id: "WO-00046", item: "Lemon Drink 250ml",  target: "150 Box", good: "136 Box", loose: "8 Box",  status: "Completed",     badge: "success" },
//   { id: "WO-00047", item: "Orange Drink 250ml", target: "300 Box", good: "285 Box", loose: "15 Box", status: "In Progress",   badge: "info"    },
//   { id: "WO-00048", item: "Apple Drink 250ml",  target: "250 Box", good: "241 Box", loose: "9 Box",  status: "Job Card Open", badge: "purple"  },
// ];

// // ─── STYLES ───────────────────────────────────────────────────────────────────

// const CSS = `
//   @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');

//   *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

//   .wd-root {
//     font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif;
//     background: #f0f2f5;
//     color: #111827;
//     display: grid;
//     grid-template-columns: 220px 1fr;
//     height: 100vh;
//     overflow: hidden;
//   }

//   /* ── SIDEBAR ── */
//   .wd-sidebar {
//     background: linear-gradient(180deg, #0a0c10 0%, #111520 100%);
//     color: #fff;
//     display: flex;
//     flex-direction: column;
//     padding: 20px 12px;
//     overflow-y: auto;
//     position: relative;
//   }
//   .wd-sidebar::after {
//     content: '';
//     position: absolute;
//     top: 0; right: 0;
//     width: 1px; height: 100%;
//     background: linear-gradient(180deg, transparent, rgba(255,196,0,.15), transparent);
//   }
//   .wd-brand {
//     display: flex; align-items: center; gap: 10px;
//     padding: 0 6px; margin-bottom: 28px;
//   }
//   .wd-brand-logo {
//     width: 38px; height: 38px; border-radius: 50%;
//     background: linear-gradient(135deg, #ffd21f, #ff8a00);
//     display: flex; align-items: center; justify-content: center;
//     font-size: 20px; font-weight: 900; color: #111;
//     box-shadow: 0 0 20px rgba(255,196,0,.4); flex-shrink: 0;
//   }
//   .wd-brand-text h2 { font-size: 22px; font-weight: 800; line-height: 1; letter-spacing: -.5px; }
//   .wd-brand-text span { font-size: 10px; letter-spacing: 2px; color: #9ca3af; font-weight: 600; }
//   .wd-nav { display: flex; flex-direction: column; gap: 4px; }
//   .wd-nav-item {
//     display: flex; align-items: center; gap: 12px;
//     padding: 11px 12px; border-radius: 10px;
//     font-size: 14px; font-weight: 500; color: #9ca3af;
//     border: none; background: transparent; text-align: left;
//     cursor: pointer; transition: .2s; width: 100%;
//   }
//   .wd-nav-item:hover { background: rgba(255,255,255,.06); color: #fff; }
//   .wd-nav-item.active { background: linear-gradient(135deg, #ffc400, #b38000); color: #111; font-weight: 700; }
//   .wd-nav-icon { font-size: 16px; width: 22px; text-align: center; flex-shrink: 0; }
//   .wd-sidebar-bottom { margin-top: auto; display: flex; flex-direction: column; gap: 10px; padding-top: 16px; }
//   .wd-sys-card {
//     background: rgba(255,255,255,.04); border: 1px solid rgba(255,255,255,.08);
//     border-radius: 12px; padding: 12px;
//   }
//   .wd-sys-row { display: flex; align-items: center; gap: 8px; font-size: 12px; color: #9ca3af; margin-bottom: 6px; }
//   .wd-green-pulse {
//     width: 8px; height: 8px; border-radius: 50%;
//     background: #22c55e; box-shadow: 0 0 10px #22c55e;
//     animation: wdPulse 2s infinite; flex-shrink: 0;
//   }
//   @keyframes wdPulse { 0%,100%{opacity:1} 50%{opacity:.4} }
//   .wd-sys-card strong { font-size: 12px; color: #4ade80; }
//   .wd-wave {
//     height: 16px; margin-top: 10px;
//     background: repeating-linear-gradient(90deg, transparent 0, transparent 4px, rgba(74,222,128,.55) 4px, rgba(74,222,128,.55) 5px);
//     border-bottom: 1px solid rgba(74,222,128,.35);
//   }
//   .wd-profile {
//     display: flex; align-items: center; gap: 10px;
//     background: rgba(255,255,255,.04); border: 1px solid rgba(255,255,255,.08);
//     border-radius: 12px; padding: 10px 12px;
//   }
//   .wd-avatar {
//     width: 34px; height: 34px; border-radius: 50%;
//     background: #1f2937; display: flex; align-items: center;
//     justify-content: center; font-size: 12px; font-weight: 700; flex-shrink: 0;
//   }
//   .wd-profile strong { display: block; font-size: 13px; font-weight: 700; }
//   .wd-profile span { font-size: 11px; color: #9ca3af; }
//   .wd-profile-arrow { margin-left: auto; color: #9ca3af; font-size: 12px; }

//   /* ── MAIN ── */
//   .wd-main {
//     overflow-y: auto; padding: 20px 24px 28px;
//     display: flex; flex-direction: column; gap: 14px;
//     background: radial-gradient(ellipse at 80% 0%, rgba(255,196,0,.06) 0%, transparent 50%), #f0f2f5;
//   }

//   /* ── TOPBAR ── */
//   .wd-topbar { display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 12px; }
//   .wd-topbar h1 { font-size: 26px; font-weight: 800; letter-spacing: -.5px; color: #111827; }
//   .wd-topbar p { font-size: 14px; color: #64748b; margin-top: 3px; }
//   .wd-top-actions { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
//   .wd-search {
//     background: #fff; border: 1px solid #e5e7eb; border-radius: 10px;
//     padding: 9px 14px; font-size: 13px; color: #94a3b8;
//     width: 260px; box-shadow: 0 2px 8px rgba(0,0,0,.04);
//   }
//   @keyframes wdSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
//   .wd-icon-btn {
//     width: 36px; height: 36px; border-radius: 10px;
//     background: #fff; border: 1px solid #e5e7eb;
//     display: flex; align-items: center; justify-content: center;
//     font-size: 18px; line-height: 1; color: #475569;
//     box-shadow: 0 2px 8px rgba(0,0,0,.04);
//     cursor: pointer; transition: background .15s, color .15s, transform .15s;
//     flex-shrink: 0;
//   }
//   .wd-icon-btn:hover { background: #f1f5f9; color: #111827; transform: scale(1.08); }
//   .wd-icon-btn:active { transform: scale(.94); }
//   .wd-notif-btn {
//     position: relative; width: 36px; height: 36px; border-radius: 50%;
//     background: #fff; border: 1px solid #e5e7eb;
//     display: flex; align-items: center; justify-content: center;
//     font-size: 16px; box-shadow: 0 2px 8px rgba(0,0,0,.04); cursor: pointer;
//   }
//   .wd-notif-badge {
//     position: absolute; top: -4px; right: -4px;
//     background: #ffc400; color: #111; font-size: 10px; font-weight: 800;
//     width: 17px; height: 17px; border-radius: 50%;
//     display: flex; align-items: center; justify-content: center;
//   }
//   .wd-user-chip {
//     width: 36px; height: 36px; border-radius: 50%;
//     background: #0a0c10; color: #fff;
//     font-size: 12px; font-weight: 700;
//     display: flex; align-items: center; justify-content: center;
//   }
//   .wd-date-chip {
//     background: #fff; border: 1px solid #e5e7eb; border-radius: 10px;
//     padding: 8px 14px; font-size: 13px; font-weight: 700;
//     box-shadow: 0 2px 8px rgba(0,0,0,.04);
//     display: flex; align-items: center; gap: 6px;
//   }

//   /* ── WORKFLOW ── */
//   .wd-workflow {
//     display: grid;
//     grid-template-columns: 1fr auto 1fr auto 1fr;
//     align-items: center;
//   }
//   .wd-wf-card {
//     background: #fff; border: 1px solid #e5e7eb; border-radius: 18px;
//     padding: 16px 20px; display: flex; align-items: center; gap: 16px;
//     box-shadow: 0 4px 16px rgba(0,0,0,.05); min-width: 0;
//   }
//   .wd-wf-icon {
//     width: 68px; height: 68px; border-radius: 50%;
//     display: flex; align-items: center; justify-content: center;
//     font-size: 32px; flex-shrink: 0;
//   }
//   .wd-wf-icon.green  { background: #f0fdf4; }
//   .wd-wf-icon.blue   { background: #eff6ff; }
//   .wd-wf-icon.orange { background: #fff7ed; }
//   .wd-wf-info { display: flex; flex-direction: column; min-width: 0; }
//   .wd-wf-info h3     { font-size: 13px; font-weight: 600; color: #64748b; margin-bottom: 4px; white-space: nowrap; }
//   .wd-wf-info strong { font-size: 32px; font-weight: 800; line-height: 1; display: block; color: #111827; }
//   .wd-wf-status      { display: flex; align-items: center; gap: 6px; font-size: 13px; color: #64748b; margin-top: 5px; }
//   .wd-dot { width: 9px; height: 9px; border-radius: 50%; flex-shrink: 0; }
//   .wd-dot.green  { background: #22c55e; }
//   .wd-dot.orange { background: #f97316; }
//   .wd-dot.blue   { background: #3b82f6; }
//   .wd-connector  { display: flex; align-items: center; justify-content: center; padding: 0 4px; }
//   .wd-conn-line  { border-top: 2.5px dashed #fbbf24; width: 28px; }
//   .wd-conn-btn {
//     width: 30px; height: 30px; border-radius: 50%;
//     background: #ffc400; border: none; font-size: 18px; font-weight: 900;
//     box-shadow: 0 4px 12px rgba(255,196,0,.35); cursor: pointer; color: #111;
//     display: flex; align-items: center; justify-content: center;
//     transition: transform .2s;
//   }
//   .wd-conn-btn:hover { transform: scale(1.15); }

//   /* ── KPI ── */
//   .wd-kpi-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 12px; }
//   .wd-kpi-card {
//     background: #fff; border: 1px solid #e5e7eb; border-radius: 14px;
//     padding: 14px; display: flex; align-items: center; gap: 12px;
//     box-shadow: 0 2px 10px rgba(0,0,0,.04);
//   }
//   .wd-kpi-ico {
//     width: 50px; height: 50px; border-radius: 50%;
//     display: flex; align-items: center; justify-content: center;
//     font-size: 24px; flex-shrink: 0;
//   }
//   .wd-kpi-ico.green  { background: #dcfce7; }
//   .wd-kpi-ico.yellow { background: #fef9c3; }
//   .wd-kpi-ico.blue   { background: #dbeafe; }
//   .wd-kpi-ico.purple { background: #f3e8ff; }
//   .wd-kpi-ico.orange { background: #fff7ed; }
//   .wd-kpi-body { flex: 1; min-width: 0; }
//   .wd-kpi-body p      { font-size: 11px; color: #64748b; font-weight: 600; margin-bottom: 4px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
//   .wd-kpi-body strong { font-size: 22px; font-weight: 800; display: block; line-height: 1; }
//   .wd-kpi-body span   { font-size: 11px; font-weight: 700; }
//   .wd-kpi-body span.green  { color: #16a34a; }
//   .wd-kpi-body span.blue   { color: #3b82f6; }
//   .wd-kpi-body span.purple { color: #7c3aed; }
//   .wd-kpi-body span.orange { color: #ea580c; }

//   /* ── LIVE CARDS ── */
//   .wd-img-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
//   .wd-live-card {
//     height: 196px; border-radius: 16px; overflow: hidden;
//     position: relative; background: #1a1f2e;
//     box-shadow: 0 8px 24px rgba(0,0,0,.12);
//   }
//   .wd-live-placeholder {
//     width: 100%; height: 100%;
//     display: flex; align-items: center; justify-content: center;
//     background: linear-gradient(135deg, #1a1f2e, #0f1623);
//   }
//   .wd-live-overlay {
//     position: absolute; inset: auto 0 0;
//     padding: 18px 18px 14px;
//     background: linear-gradient(0deg, rgba(0,0,0,.82), transparent);
//     color: #fff; display: flex; justify-content: space-between; align-items: flex-end;
//   }
//   .wd-live-title { display: flex; align-items: center; gap: 8px; font-size: 15px; font-weight: 700; }
//   .wd-live-dot {
//     width: 9px; height: 9px; border-radius: 50%; background: #ffc400;
//     animation: wdPulse 1.5s infinite; flex-shrink: 0;
//   }
//   .wd-live-sub { font-size: 12px; color: #d1d5db; margin-top: 3px; }
//   .wd-live-btn {
//     background: rgba(34,197,94,.2); border: 1px solid rgba(34,197,94,.5);
//     color: #4ade80; padding: 7px 14px; border-radius: 8px;
//     font-size: 12px; font-weight: 800; cursor: pointer; font-family: inherit;
//   }

//   /* ── BOTTOM ── */
//   .wd-bottom-grid { display: grid; grid-template-columns: 1.4fr .85fr 1fr; gap: 14px; }
//   .wd-panel {
//     background: #fff; border: 1px solid #e5e7eb; border-radius: 14px;
//     padding: 16px; box-shadow: 0 2px 10px rgba(0,0,0,.04);
//   }
//   .wd-panel-hdr { display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; }
//   .wd-panel-hdr h3 { font-size: 15px; font-weight: 800; }
//   .wd-view-btn {
//     background: #fff; border: 1px solid #e5e7eb; border-radius: 8px;
//     padding: 6px 12px; font-size: 12px; font-weight: 700;
//     cursor: pointer; font-family: inherit; transition: .2s;
//   }
//   .wd-view-btn:hover { background: #f8fafc; }

//   /* TABLE */
//   .wd-table { width: 100%; border-collapse: collapse; font-size: 11.5px; }
//   .wd-table th {
//     text-align: left; color: #94a3b8; font-weight: 700;
//     padding: 8px 6px; border-bottom: 1px solid #f1f5f9; white-space: nowrap;
//   }
//   .wd-table td { padding: 10px 6px; font-weight: 600; border-bottom: 1px solid #f8fafc; white-space: nowrap; }
//   .wd-table tr:last-child td { border-bottom: none; }
//   .wd-table tbody tr:hover td { background: #fafbfc; }
//   .wd-badge { display: inline-block; border-radius: 6px; padding: 4px 8px; font-size: 11px; font-weight: 700; }
//   .wd-badge.warning { background: #fff7ed; color: #ea580c; }
//   .wd-badge.success { background: #dcfce7; color: #16a34a; }
//   .wd-badge.info    { background: #dbeafe; color: #2563eb; }
//   .wd-badge.purple  { background: #f3e8ff; color: #7c3aed; }
//   .wd-eye-btn { border: none; background: none; font-size: 14px; cursor: pointer; color: #94a3b8; transition: .2s; }
//   .wd-eye-btn:hover { color: #111; }

//   /* DONUT */
//   .wd-donut-panel h3 { font-size: 14px; font-weight: 800; margin-bottom: 4px; }
//   .wd-donut-wrap { display: flex; align-items: center; justify-content: space-around; margin-top: 14px; }
//   .wd-donut-svg { cursor: pointer; transition: transform .2s, filter .2s; overflow: visible; }
//   .wd-donut-svg:hover { transform: scale(1.05); filter: drop-shadow(0 8px 16px rgba(34,197,94,.22)); }
//   .wd-legend { display: flex; flex-direction: column; gap: 14px; }
//   .wd-legend-item {
//     display: flex; align-items: flex-start; gap: 10px;
//     cursor: pointer; padding: 6px 8px; border-radius: 10px; transition: .2s;
//   }
//   .wd-legend-item:hover, .wd-legend-item.active { background: #f8fafc; }
//   .wd-legend-color { width: 11px; height: 11px; border-radius: 50%; margin-top: 3px; flex-shrink: 0; }
//   .wd-legend-label { font-size: 12px; color: #64748b; font-weight: 600; }
//   .wd-legend-val   { font-size: 16px; font-weight: 800; }
//   .wd-legend-pct   { font-size: 11px; color: #94a3b8; }

//   /* TREND CHART */
//   .wd-trend-panel { display: flex; flex-direction: column; }
//   .wd-chart-wrap  { position: relative; flex: 1; }
//   .wd-chart-svg   { width: 100%; display: block; overflow: visible; }
//   .wd-chart-labels {
//     display: flex; justify-content: space-between;
//     font-size: 10px; color: #94a3b8; margin-top: 4px; padding: 0 2px;
//   }
//   .wd-chart-dots { position: absolute; top: 0; left: 0; width: 100%; pointer-events: none; }
//   .wd-chart-dot-btn {
//     position: absolute; width: 16px; height: 16px; border-radius: 50%;
//     background: #fbbf24; border: 2.5px solid #fff;
//     box-shadow: 0 3px 10px rgba(251,191,36,.45);
//     cursor: pointer; transform: translate(-50%, -50%);
//     transition: transform .2s, background .2s;
//     pointer-events: all; font-family: inherit;
//   }
//   .wd-chart-dot-btn:hover { transform: translate(-50%,-50%) scale(1.4); background: #fcd34d; }
//   .wd-chart-tooltip {
//     position: absolute; top: 4px; right: 4px;
//     background: #111; color: #fff; border-radius: 8px;
//     padding: 8px 12px; font-size: 12px; font-weight: 700;
//     box-shadow: 0 8px 20px rgba(0,0,0,.2); pointer-events: none; z-index: 10;
//   }
//   .wd-chart-tooltip span { display: block; font-size: 11px; color: #9ca3af; font-weight: 500; margin-top: 2px; }

//   @media (max-width: 1280px) {
//     .wd-kpi-grid       { grid-template-columns: repeat(3, 1fr); }
//     .wd-bottom-grid    { grid-template-columns: 1fr; }
//     .wd-workflow       { grid-template-columns: 1fr 1fr 1fr; }
//     .wd-connector      { display: none; }
//   }
//   @media (max-width: 900px) {
//     .wd-root           { grid-template-columns: 1fr; }
//     .wd-sidebar        { height: auto; }
//     .wd-main           { height: auto; }
//     .wd-img-grid,
//     .wd-kpi-grid       { grid-template-columns: 1fr; }
//   }
// `;

// // ─── HELPERS ──────────────────────────────────────────────────────────────────

// function buildTrendPath(data, W = 300, H = 130, padX = 10, padY = 8) {
//   const vals = data.map((d) => d.value);
//   const min = Math.min(...vals) - 8;
//   const max = Math.max(...vals) + 8;
//   const pts = data.map((d, i) => ({
//     x: padX + (i / (data.length - 1)) * (W - padX * 2),
//     y: H - padY - ((d.value - min) / (max - min)) * (H - padY * 2),
//     ...d,
//   }));

//   let smooth = `M${pts[0].x},${pts[0].y}`;
//   for (let i = 1; i < pts.length; i++) {
//     const cpX = (pts[i].x + pts[i - 1].x) / 2;
//     smooth += ` C${cpX},${pts[i - 1].y} ${cpX},${pts[i].y} ${pts[i].x},${pts[i].y}`;
//   }

//   const area =
//     smooth +
//     ` L${pts[pts.length - 1].x},${H} L${pts[0].x},${H} Z`;

//   return { pts, smooth, area, W, H };
// }

// // ─── SUB-COMPONENTS ───────────────────────────────────────────────────────────

// function SparkLine({ color }) {
//   return (
//     <svg width="56" height="32" viewBox="0 0 56 32">
//       <polyline
//         points="2,26 12,18 22,22 32,10 42,14 52,6"
//         fill="none"
//         stroke={color}
//         strokeWidth="2.5"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//     </svg>
//   );
// }

// function MiniBarChart() {
//   const heights = [14, 22, 30, 42, 26, 46];
//   return (
//     <svg width="50" height="38" viewBox="0 0 50 38">
//       {heights.map((h, i) => (
//         <rect
//           key={i}
//           x={i * 8 + 1}
//           y={38 - h}
//           width="6"
//           height={h}
//           rx="2"
//           fill="#fbbf24"
//         />
//       ))}
//     </svg>
//   );
// }

// function KpiCard({ icon, title, value, sub, color, trend }) {
//   const subColor =
//     color === "green" ? "green"
//     : color === "yellow" ? "green"
//     : color === "blue" ? "blue"
//     : color === "purple" ? "purple"
//     : "orange";

//   return (
//     <div className="wd-kpi-card">
//       <div className={`wd-kpi-ico ${color}`}>{icon}</div>
//       <div className="wd-kpi-body">
//         <p>{title}</p>
//         <strong>{value}</strong>
//         <span className={subColor}>{sub}</span>
//       </div>
//       {trend === "line" ? (
//         <SparkLine color={color === "green" ? "#22c55e" : "#eab308"} />
//       ) : (
//         <MiniBarChart />
//       )}
//     </div>
//   );
// }

// function WorkflowCard({ icon, iconColor, title, value, statusDot, status }) {
//   return (
//     <div className="wd-wf-card">
//       <div className={`wd-wf-icon ${iconColor}`}>{icon}</div>
//       <div className="wd-wf-info">
//         <h3>{title}</h3>
//         <strong>{value}</strong>
//         <div className="wd-wf-status">
//           <span className={`wd-dot ${statusDot}`}></span>
//           {status}
//         </div>
//       </div>
//     </div>
//   );
// }

// function LiveCard({ title, subtitle }) {
//   return (
//     <div className="wd-live-card">
//       <div className="wd-live-placeholder">
//         <svg width="130" height="80" viewBox="0 0 130 80" fill="none" style={{ opacity: 0.12 }}>
//           <rect x="5"  y="20" width="32" height="44" rx="5" fill="#fff" />
//           <rect x="45" y="8"  width="9"  height="56" rx="4" fill="#fff" />
//           <rect x="60" y="8"  width="9"  height="56" rx="4" fill="#fff" />
//           <rect x="75" y="8"  width="9"  height="56" rx="4" fill="#fff" />
//           <rect x="90" y="8"  width="9"  height="56" rx="4" fill="#fff" />
//           <rect x="0"  y="62" width="130" height="6" rx="3" fill="#fff" />
//           <circle cx="112" cy="36" r="14" fill="#fff" />
//         </svg>
//       </div>
//       <div className="wd-live-overlay">
//         <div>
//           <div className="wd-live-title">
//             <span className="wd-live-dot"></span>
//             {title}
//           </div>
//           <div className="wd-live-sub">{subtitle}</div>
//         </div>
//         <button className="wd-live-btn">Live</button>
//       </div>
//     </div>
//   );
// }

// function DonutPanel() {
//   const [hover, setHover] = React.useState(null);

//   const CIRC = 2 * Math.PI * 55; // ≈ 345.6
//   const goodPct  = 0.965;
//   const loosePct = 0.035;

//   const label = hover === "good" ? "Good Qty" : hover === "loose" ? "Loose Qty" : "Total";
//   const valTxt = hover === "good" ? "197" : hover === "loose" ? "7.73" : "204.99";

//   return (
//     <div className="wd-panel wd-donut-panel">
//       <h3>Manufacturing Quantity Breakdown</h3>
//       <div className="wd-donut-wrap">
//         <svg
//           className="wd-donut-svg"
//           width="156" height="156"
//           viewBox="0 0 156 156"
//           onMouseLeave={() => setHover(null)}
//         >
//           {/* track */}
//           <circle cx="78" cy="78" r="55" fill="none" stroke="#f1f5f9" strokeWidth="26" />
//           {/* good arc */}
//           <circle
//             cx="78" cy="78" r="55"
//             fill="none" stroke="#4ade80" strokeWidth="26"
//             strokeDasharray={`${CIRC * goodPct} ${CIRC * loosePct}`}
//             strokeDashoffset="0"
//             transform="rotate(-90 78 78)"
//             onMouseEnter={() => setHover("good")}
//             style={{ cursor: "pointer" }}
//           />
//           {/* loose arc */}
//           <circle
//             cx="78" cy="78" r="55"
//             fill="none" stroke="#fbbf24" strokeWidth="26"
//             strokeDasharray={`${CIRC * loosePct} ${CIRC * goodPct}`}
//             strokeDashoffset={-(CIRC * goodPct)}
//             transform="rotate(-90 78 78)"
//             onMouseEnter={() => setHover("loose")}
//             style={{ cursor: "pointer" }}
//           />
//           {/* center text */}
//           <text x="78" y="70" textAnchor="middle" fontSize="11" fill="#94a3b8" fontFamily="DM Sans" fontWeight="600">{label}</text>
//           <text x="78" y="86" textAnchor="middle" fontSize="20" fill="#111" fontFamily="DM Sans" fontWeight="800">{valTxt}</text>
//           <text x="78" y="100" textAnchor="middle" fontSize="11" fill="#94a3b8" fontFamily="DM Sans" fontWeight="600">Box</text>
//         </svg>

//         <div className="wd-legend">
//           <div
//             className={`wd-legend-item ${hover === "good" ? "active" : ""}`}
//             onMouseEnter={() => setHover("good")}
//             onMouseLeave={() => setHover(null)}
//           >
//             <span className="wd-legend-color" style={{ background: "#4ade80" }}></span>
//             <div>
//               <div className="wd-legend-label">Good Quantity</div>
//               <div className="wd-legend-val">197 Box</div>
//               <div className="wd-legend-pct">(96.50%)</div>
//             </div>
//           </div>
//           <div
//             className={`wd-legend-item ${hover === "loose" ? "active" : ""}`}
//             onMouseEnter={() => setHover("loose")}
//             onMouseLeave={() => setHover(null)}
//           >
//             <span className="wd-legend-color" style={{ background: "#fbbf24" }}></span>
//             <div>
//               <div className="wd-legend-label">Loose Quantity</div>
//               <div className="wd-legend-val">7.73 Box</div>
//               <div className="wd-legend-pct">(3.79%)</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function TrendPanel() {
//   const [activePt, setActivePt] = React.useState(null);
//   // Extra right padding so the tooltip for the last point doesn't clip
//   const W = 320, H = 140, PAD_L = 8, PAD_R = 8, PAD_T = 18, PAD_B = 10;
//   const { pts, smooth, area } = buildTrendPath(TREND_DATA, W, H, PAD_L, PAD_T);

//   // Tooltip box dimensions (in SVG units)
//   const TW = 80, TH = 42, TR = 7;

//   return (
//     <div className="wd-panel wd-trend-panel">
//       <div className="wd-panel-hdr">
//         <h3>Loose Quantity Trend (Nos)</h3>
//         <button className="wd-view-btn">7 Days ⌄</button>
//       </div>

//       <div className="wd-chart-wrap" style={{ position: "relative" }}>
//         {/*
//           Single SVG — dots live INSIDE it, so their coords are always exact.
//           preserveAspectRatio="xMidYMid meet" keeps aspect ratio intact.
//         */}
//         <svg
//           className="wd-chart-svg"
//           viewBox={`0 0 ${W} ${H}`}
//           style={{ width: "100%", height: H, display: "block", overflow: "visible" }}
//         >
//           <defs>
//             <linearGradient id="wdAreaGrad" x1="0" y1="0" x2="0" y2="1">
//               <stop offset="0%"   stopColor="#fbbf24" stopOpacity="0.38" />
//               <stop offset="100%" stopColor="#fbbf24" stopOpacity="0"    />
//             </linearGradient>
//           </defs>

//           {/* grid lines */}
//           {[PAD_T, PAD_T + 30, PAD_T + 60, PAD_T + 90].map((y) => (
//             <line key={y} x1={PAD_L} y1={y} x2={W - PAD_R} y2={y} stroke="#f1f5f9" strokeWidth="1" />
//           ))}

//           {/* area + line */}
//           <path d={area}   fill="url(#wdAreaGrad)" />
//           <path d={smooth} fill="none" stroke="#f59e0b" strokeWidth="3"
//                 strokeLinecap="round" strokeLinejoin="round" />

//           {/* dots — rendered in SVG coords, no offset issues */}
//           {pts.map((p) => (
//             <g key={p.date}>
//               {/* larger invisible hit area */}
//               <circle
//                 cx={p.x} cy={p.y} r={12}
//                 fill="transparent"
//                 style={{ cursor: "pointer" }}
//                 onMouseEnter={() => setActivePt(p)}
//                 onMouseLeave={() => setActivePt(null)}
//               />
//               {/* visible dot */}
//               <circle
//                 cx={p.x} cy={p.y}
//                 r={activePt && activePt.date === p.date ? 7 : 5}
//                 fill={activePt && activePt.date === p.date ? "#fcd34d" : "#fbbf24"}
//                 stroke="#fff"
//                 strokeWidth="2.5"
//                 style={{
//                   filter: activePt && activePt.date === p.date
//                     ? "drop-shadow(0 3px 8px rgba(251,191,36,.6))"
//                     : "drop-shadow(0 2px 4px rgba(251,191,36,.35))",
//                   transition: "r .15s, fill .15s",
//                   pointerEvents: "none",
//                 }}
//               />
//             </g>
//           ))}

//           {/* SVG-native tooltip — always aligned to the hovered dot */}
//           {activePt && (() => {
//             // Clamp so tooltip never goes off left/right edge
//             const tx = Math.min(Math.max(activePt.x - TW / 2, PAD_L), W - PAD_R - TW);
//             const ty = activePt.y - TH - 14;
//             // Small arrow pointing down
//             const ax = activePt.x;
//             const ay = ty + TH;
//             return (
//               <g style={{ pointerEvents: "none" }}>
//                 <rect x={tx} y={ty} width={TW} height={TH} rx={TR} fill="#111827" />
//                 {/* arrow */}
//                 <polygon
//                   points={`${ax - 6},${ay} ${ax + 6},${ay} ${ax},${ay + 7}`}
//                   fill="#111827"
//                 />
//                 <text x={tx + TW / 2} y={ty + 16} textAnchor="middle"
//                       fontSize="13" fontWeight="800" fill="#fff" fontFamily="DM Sans">
//                   {activePt.value} Nos
//                 </text>
//                 <text x={tx + TW / 2} y={ty + 31} textAnchor="middle"
//                       fontSize="11" fill="#9ca3af" fontFamily="DM Sans">
//                   {activePt.date}
//                 </text>
//               </g>
//             );
//           })()}
//         </svg>

//         <div className="wd-chart-labels">
//           {TREND_DATA.map((d) => (
//             <span key={d.date}>{d.date}</span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// // ─── APP ──────────────────────────────────────────────────────────────────────

// export function App() {
//   const [activeNav, setActiveNav]   = React.useState("Dashboard");
//   const [isFullscreen, setIsFullscreen] = React.useState(false);
//   const [refreshing, setRefreshing]     = React.useState(false);
//   const rootRef = React.useRef(null);

//   // ── Fullscreen toggle ──
//   const toggleFullscreen = React.useCallback(() => {
//     if (!document.fullscreenElement) {
//       rootRef.current?.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
//     } else {
//       document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
//     }
//   }, []);

//   React.useEffect(() => {
//     const onFsChange = () => setIsFullscreen(!!document.fullscreenElement);
//     document.addEventListener("fullscreenchange", onFsChange);
//     return () => document.removeEventListener("fullscreenchange", onFsChange);
//   }, []);

//   // ── Refresh (spin for 800 ms then stop) ──
//   const handleRefresh = React.useCallback(() => {
//     if (refreshing) return;
//     setRefreshing(true);
//     setTimeout(() => setRefreshing(false), 800);
//   }, [refreshing]);

//   return (
//     <>
//       <style>{CSS}</style>

//       <div className="wd-root" ref={rootRef}>
//         {/* ── SIDEBAR ── */}
//         <aside className="wd-sidebar">
//           <div className="wd-brand">
//             <div className="wd-brand-logo">🔥</div>
//             <div className="wd-brand-text">
//               <h2>Waters</h2>
//               <span>MANUFACTURING</span>
//             </div>
//           </div>

//           <nav className="wd-nav">
//             {SIDEBAR_ITEMS.map((item) => (
//               <button
//                 key={item.label}
//                 className={`wd-nav-item ${activeNav === item.label ? "active" : ""}`}
//                 onClick={() => setActiveNav(item.label)}
//               >
//                 <span className="wd-nav-icon">{item.icon}</span>
//                 {item.label}
//               </button>
//             ))}
//           </nav>

//           <div className="wd-sidebar-bottom">
//             <div className="wd-sys-card">
//               <div className="wd-sys-row">
//                 <span className="wd-green-pulse"></span>
//                 <span>System Status</span>
//               </div>
//               <strong>All Systems Operational</strong>
//               <div className="wd-wave"></div>
//             </div>

//             <div className="wd-profile">
//               <div className="wd-avatar">AM</div>
//               <div>
//                 <strong style={{ color: "#fff", fontSize: 13 }}>Alex Morgan</strong>
//                 <span>Administrator</span>
//               </div>
//               <span className="wd-profile-arrow">⌄</span>
//             </div>
//           </div>
//         </aside>

//         {/* ── MAIN ── */}
//         <main className="wd-main">

//           {/* TOPBAR */}
//           <div className="wd-topbar">
//             <div>
//               <h1>Welcome back, Alex 👋</h1>
//               <p>Here's what's happening on the shop floor today.</p>
//             </div>
//             <div className="wd-top-actions">
//               <div className="wd-search">⌕&nbsp; Search or type a command (Ctrl + G)</div>
//               <button
//                 className="wd-icon-btn"
//                 onClick={handleRefresh}
//                 title="Refresh dashboard"
//                 style={{ animation: refreshing ? "wdSpin .8s linear" : "none" }}
//               >
//                 ↻
//               </button>
//               <button
//                 className="wd-icon-btn"
//                 onClick={toggleFullscreen}
//                 title={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
//               >
//                 {isFullscreen ? "⊠" : "⛶"}
//               </button>
//               <button className="wd-notif-btn">
//                 🔔<span className="wd-notif-badge">3</span>
//               </button>
//               <div className="wd-user-chip">AM</div>
//               <div className="wd-date-chip">▣ May 13, 2025 ▾</div>
//             </div>
//           </div>

//           {/* WORKFLOW */}
//           <div className="wd-workflow">
//             <WorkflowCard icon="🍾" iconColor="green"  title="Work Orders"   value="24" statusDot="green"  status="Active"          />
//             <div className="wd-connector">
//               <span className="wd-conn-line"></span>
//               <button className="wd-conn-btn">›</button>
//               <span className="wd-conn-line"></span>
//             </div>
//             <WorkflowCard icon="🧾" iconColor="blue"   title="Job Cards"     value="11" statusDot="orange" status="In Progress"      />
//             <div className="wd-connector">
//               <span className="wd-conn-line"></span>
//               <button className="wd-conn-btn">›</button>
//               <span className="wd-conn-line"></span>
//             </div>
//             <WorkflowCard icon="📦" iconColor="orange" title="Stock Entries" value="8"  statusDot="blue"   status="Pending Submit"   />
//           </div>

//           {/* KPI */}
//           <div className="wd-kpi-grid">
//             {KPIS.map((k) => <KpiCard key={k.title} {...k} />)}
//           </div>

//           {/* LIVE */}
//           <div className="wd-img-grid">
//             <LiveCard title="Filling Line 1"   subtitle="Running smoothly"                        />
//             <LiveCard title="Store & Dispatch" subtitle="Packing, storage & outbound dispatch"    />
//           </div>

//           {/* BOTTOM */}
//           <div className="wd-bottom-grid">

//             {/* Work Order Table */}
//             <div className="wd-panel">
//               <div className="wd-panel-hdr">
//                 <h3>Work Order Monitor</h3>
//                 <button className="wd-view-btn">View All</button>
//               </div>
//               <table className="wd-table">
//                 <thead>
//                   <tr>
//                     <th>Work Order</th>
//                     <th>Item</th>
//                     <th>Target Qty</th>
//                     <th>Good Qty</th>
//                     <th>Loose Qty</th>
//                     <th>Status</th>
//                     <th>Action</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {WORK_ORDERS.map((row) => (
//                     <tr key={row.id}>
//                       <td>{row.id}</td>
//                       <td>{row.item}</td>
//                       <td>{row.target}</td>
//                       <td>{row.good}</td>
//                       <td>{row.loose}</td>
//                       <td><span className={`wd-badge ${row.badge}`}>{row.status}</span></td>
//                       <td><button className="wd-eye-btn">👁</button></td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>

//             {/* Donut */}
//             <DonutPanel />

//             {/* Trend */}
//             <TrendPanel />

//           </div>
//         </main>
//       </div>
//     </>
//   );
// }

// export default App;

import * as React from "react";

// ─── MOCK DATA ───────────────────────────────────────────────────────────────

const TREND_DATA = [
  { date: "May 8",  value: 28 },
  { date: "May 9",  value: 44 },
  { date: "May 10", value: 22 },
  { date: "May 11", value: 61 },
  { date: "May 12", value: 48 },
  { date: "May 13", value: 36 },
  { date: "May 14", value: 61 },
];

const SIDEBAR_ITEMS = [
  { label: "Dashboard",     icon: "⊞", active: true  },
  { label: "Work Orders",   icon: "📋"               },
  { label: "Job Cards",     icon: "🧾"               },
  { label: "Stock",         icon: "📦"               },
  { label: "Stock Entries", icon: "📑"               },
  { label: "Reports",       icon: "📊"               },
  { label: "Analytics",     icon: "📈"               },
  { label: "Settings",      icon: "⚙️"              },
];

const KPIS = [
  { title: "Good Quantity (Box)",    value: "204.99", sub: "↑ 2.4% vs yesterday", icon: "🍾", color: "green",  trend: "line" },
  { title: "Loose Quantity (Box)",   value: "197.00", sub: "↑ 9.8% vs yesterday", icon: "🧃", color: "yellow", trend: "line" },
  { title: "Active Work Orders",     value: "24",     sub: "Active",              icon: "📋", color: "blue",   trend: "bars" },
  { title: "Job Cards In Progress",  value: "42",     sub: "In Progress",         icon: "🧾", color: "purple", trend: "bars" },
  { title: "Stock Items",            value: "128",    sub: "Active",              icon: "🏬", color: "orange", trend: "bars" },
];

const WORK_ORDERS = [
  { id: "WO-00045", item: "Mango Drink 250ml",  target: "300 Box", good: "197 Box", loose: "12 Box", status: "In Progress", badge: "info"    },
  { id: "WO-00046", item: "Lemon Drink 250ml",  target: "150 Box", good: "136 Box", loose: "8 Box",  status: "Completed",   badge: "success" },
  { id: "WO-00047", item: "Orange Drink 250ml", target: "300 Box", good: "285 Box", loose: "15 Box", status: "In Progress", badge: "info"    },
  { id: "WO-00048", item: "Apple Drink 250ml",  target: "250 Box", good: "241 Box", loose: "9 Box",  status: "Completed",   badge: "success" },
];

// ─── STYLES ───────────────────────────────────────────────────────────────────

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .wd-root {
    font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif;
    background: #f0f2f5;
    color: #111827;
    display: grid;
    grid-template-columns: 220px 1fr;
    height: 100vh;
    overflow: hidden;
  }

  /* ── SIDEBAR ── */
  .wd-sidebar {
    background: linear-gradient(180deg, #0a0c10 0%, #111520 100%);
    color: #fff;
    display: flex;
    flex-direction: column;
    padding: 20px 12px;
    overflow-y: auto;
    position: relative;
  }
  .wd-sidebar::after {
    content: '';
    position: absolute;
    top: 0; right: 0;
    width: 1px; height: 100%;
    background: linear-gradient(180deg, transparent, rgba(255,196,0,.15), transparent);
  }
  .wd-brand {
    display: flex; align-items: center; gap: 10px;
    padding: 0 6px; margin-bottom: 28px;
  }
  .wd-brand-logo {
    width: 38px; height: 38px; border-radius: 50%;
    background: linear-gradient(135deg, #ffd21f, #ff8a00);
    display: flex; align-items: center; justify-content: center;
    font-size: 20px; font-weight: 900; color: #111;
    box-shadow: 0 0 20px rgba(255,196,0,.4); flex-shrink: 0;
  }
  .wd-brand-text h2 { font-size: 22px; font-weight: 800; line-height: 1; letter-spacing: -.5px; }
  .wd-brand-text span { font-size: 10px; letter-spacing: 2px; color: #9ca3af; font-weight: 600; }
  .wd-nav { display: flex; flex-direction: column; gap: 4px; }
  .wd-nav-item {
    display: flex; align-items: center; gap: 12px;
    padding: 11px 12px; border-radius: 10px;
    font-size: 14px; font-weight: 500; color: #9ca3af;
    border: none; background: transparent; text-align: left;
    cursor: pointer; transition: .2s; width: 100%;
  }
  .wd-nav-item:hover { background: rgba(255,255,255,.06); color: #fff; }
  .wd-nav-item.active { background: linear-gradient(135deg, #ffc400, #b38000); color: #111; font-weight: 700; }
  .wd-nav-icon { font-size: 16px; width: 22px; text-align: center; flex-shrink: 0; }
  .wd-sidebar-bottom { margin-top: auto; display: flex; flex-direction: column; gap: 10px; padding-top: 16px; }
  .wd-sys-card {
    background: rgba(255,255,255,.04); border: 1px solid rgba(255,255,255,.08);
    border-radius: 12px; padding: 12px;
  }
  .wd-sys-row { display: flex; align-items: center; gap: 8px; font-size: 12px; color: #9ca3af; margin-bottom: 6px; }
  .wd-green-pulse {
    width: 8px; height: 8px; border-radius: 50%;
    background: #22c55e; box-shadow: 0 0 10px #22c55e;
    animation: wdPulse 2s infinite; flex-shrink: 0;
  }
  @keyframes wdPulse { 0%,100%{opacity:1} 50%{opacity:.4} }
  .wd-sys-card strong { font-size: 12px; color: #4ade80; }
  .wd-wave {
    height: 16px; margin-top: 10px;
    background: repeating-linear-gradient(90deg, transparent 0, transparent 4px, rgba(74,222,128,.55) 4px, rgba(74,222,128,.55) 5px);
    border-bottom: 1px solid rgba(74,222,128,.35);
  }
  .wd-profile {
    display: flex; align-items: center; gap: 10px;
    background: rgba(255,255,255,.04); border: 1px solid rgba(255,255,255,.08);
    border-radius: 12px; padding: 10px 12px;
  }
  .wd-avatar {
    width: 34px; height: 34px; border-radius: 50%;
    background: #1f2937; display: flex; align-items: center;
    justify-content: center; font-size: 12px; font-weight: 700; flex-shrink: 0;
  }
  .wd-profile strong { display: block; font-size: 13px; font-weight: 700; }
  .wd-profile span { font-size: 11px; color: #9ca3af; }
  .wd-profile-arrow { margin-left: auto; color: #9ca3af; font-size: 12px; }

  /* ── MAIN ── */
  .wd-main {
    overflow-y: auto;
    overflow-x: hidden;
    height: 100vh;
    padding: 20px 24px 28px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    background: radial-gradient(ellipse at 80% 0%, rgba(255,196,0,.06) 0%, transparent 50%), #f0f2f5;
  }

  /* ── TOPBAR ── */
  .wd-topbar { display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 12px; }
  .wd-topbar h1 { font-size: 26px !important; font-weight: 800 !important; letter-spacing: -.5px; color: #111827 !important; }
  .wd-topbar p { font-size: 14px; color: #64748b !important; margin-top: 3px; }
  .wd-top-actions { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
  .wd-search {
    background: #fff; border: 1px solid #e5e7eb; border-radius: 10px;
    padding: 9px 14px; font-size: 13px; color: #94a3b8;
    width: 260px; box-shadow: 0 2px 8px rgba(0,0,0,.04);
  }
  @keyframes wdSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
  .wd-icon-btn {
    width: 36px; height: 36px; border-radius: 10px;
    background: #fff; border: 1px solid #e5e7eb;
    display: flex; align-items: center; justify-content: center;
    font-size: 18px; line-height: 1; color: #475569;
    box-shadow: 0 2px 8px rgba(0,0,0,.04);
    cursor: pointer; transition: background .15s, color .15s, transform .15s;
    flex-shrink: 0;
  }
  .wd-icon-btn:hover { background: #f1f5f9; color: #111827; transform: scale(1.08); }
  .wd-icon-btn:active { transform: scale(.94); }
  .wd-notif-btn {
    position: relative; width: 36px; height: 36px; border-radius: 50%;
    background: #fff; border: 1px solid #e5e7eb;
    display: flex; align-items: center; justify-content: center;
    font-size: 16px; box-shadow: 0 2px 8px rgba(0,0,0,.04); cursor: pointer;
  }
  .wd-notif-badge {
    position: absolute; top: -4px; right: -4px;
    background: #ffc400; color: #111; font-size: 10px; font-weight: 800;
    width: 17px; height: 17px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
  }
  .wd-user-chip {
    width: 36px; height: 36px; border-radius: 50%;
    background: #0a0c10; color: #fff;
    font-size: 12px; font-weight: 700;
    display: flex; align-items: center; justify-content: center;
  }
  .wd-date-chip {
    background: #fff; border: 1px solid #e5e7eb; border-radius: 10px;
    padding: 8px 14px; font-size: 13px; font-weight: 700;
    box-shadow: 0 2px 8px rgba(0,0,0,.04);
    display: flex; align-items: center; gap: 6px;
  }

  /* ── WORKFLOW ── */
  .wd-workflow {
    display: grid;
    grid-template-columns: 1fr auto 1fr auto 1fr;
    align-items: center;
  }
  .wd-wf-card {
    background: #fff; border: 1px solid #e5e7eb; border-radius: 18px;
    padding: 16px 20px; display: flex; align-items: center; gap: 16px;
    box-shadow: 0 4px 16px rgba(0,0,0,.05); min-width: 0;
  }
  .wd-wf-icon {
    width: 68px; height: 68px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-size: 32px; flex-shrink: 0;
  }
  .wd-wf-icon.green  { background: #f0fdf4; }
  .wd-wf-icon.blue   { background: #eff6ff; }
  .wd-wf-icon.orange { background: #fff7ed; }
  .wd-wf-info { display: flex; flex-direction: column; min-width: 0; }
  .wd-wf-info h3     { font-size: 13px; font-weight: 600; color: #64748b; margin-bottom: 4px; white-space: nowrap; }
  .wd-wf-info strong { font-size: 32px; font-weight: 800; line-height: 1; display: block; color: #111827; }
  .wd-wf-status      { display: flex; align-items: center; gap: 6px; font-size: 13px; color: #64748b; margin-top: 5px; }
  .wd-dot { width: 9px; height: 9px; border-radius: 50%; flex-shrink: 0; }
  .wd-dot.green  { background: #22c55e; }
  .wd-dot.orange { background: #f97316; }
  .wd-dot.blue   { background: #3b82f6; }
  .wd-connector  { display: flex; align-items: center; justify-content: center; padding: 0 4px; }
  .wd-conn-line  { border-top: 2.5px dashed #fbbf24; width: 28px; }
  .wd-conn-btn {
    width: 30px; height: 30px; border-radius: 50%;
    background: #ffc400; border: none; font-size: 18px; font-weight: 900;
    box-shadow: 0 4px 12px rgba(255,196,0,.35); cursor: pointer; color: #111;
    display: flex; align-items: center; justify-content: center;
    transition: transform .2s;
  }
  .wd-conn-btn:hover { transform: scale(1.15); }

  /* ── KPI ── */
  .wd-kpi-grid { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 12px; }
  .wd-kpi-card {
    background: #fff; border: 1px solid #e5e7eb; border-radius: 14px;
    padding: 14px; display: flex; align-items: center; gap: 12px;
    box-shadow: 0 2px 10px rgba(0,0,0,.04);
  }
  .wd-kpi-ico {
    width: 50px; height: 50px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-size: 24px; flex-shrink: 0;
  }
  .wd-kpi-ico.green  { background: #dcfce7; }
  .wd-kpi-ico.yellow { background: #fef9c3; }
  .wd-kpi-ico.blue   { background: #dbeafe; }
  .wd-kpi-ico.purple { background: #f3e8ff; }
  .wd-kpi-ico.orange { background: #fff7ed; }
  .wd-kpi-body { flex: 1; min-width: 0; }
  .wd-kpi-body p      { font-size: 11px; color: #64748b; font-weight: 600; margin-bottom: 4px; white-space: normal; line-height: 1.3; }
  .wd-kpi-body strong { font-size: 22px; font-weight: 800; display: block; line-height: 1; color: #111827; }
  .wd-kpi-body span   { font-size: 11px; font-weight: 700; white-space: normal; line-height: 1.3; display: block; margin-top: 3px; }
  .wd-kpi-body span.green  { color: #16a34a; }
  .wd-kpi-body span.blue   { color: #3b82f6; }
  .wd-kpi-body span.purple { color: #7c3aed; }
  .wd-kpi-body span.orange { color: #ea580c; }

  /* ── LIVE CARDS ── */
  .wd-img-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
  .wd-live-card {
    height: 196px; border-radius: 16px; overflow: hidden;
    position: relative; background: #1a1f2e;
    box-shadow: 0 8px 24px rgba(0,0,0,.12);
  }
  .wd-live-placeholder {
    width: 100%; height: 100%;
    display: flex; align-items: center; justify-content: center;
    background: linear-gradient(135deg, #1a1f2e, #0f1623);
  }
  .wd-live-overlay {
    position: absolute; inset: auto 0 0;
    padding: 18px 18px 14px;
    background: linear-gradient(0deg, rgba(0,0,0,.82), transparent);
    color: #fff; display: flex; justify-content: space-between; align-items: flex-end;
  }
  .wd-live-title { display: flex; align-items: center; gap: 8px; font-size: 15px; font-weight: 700; }
  .wd-live-dot {
    width: 9px; height: 9px; border-radius: 50%; background: #ffc400;
    animation: wdPulse 1.5s infinite; flex-shrink: 0;
  }
  .wd-live-sub { font-size: 12px; color: #d1d5db; margin-top: 3px; }
  .wd-live-btn {
    background: rgba(34,197,94,.2); border: 1px solid rgba(34,197,94,.5);
    color: #4ade80; padding: 7px 14px; border-radius: 8px;
    font-size: 12px; font-weight: 800; cursor: pointer; font-family: inherit;
  }

  /* ── BOTTOM ── */
  .wd-bottom-grid { display: grid; grid-template-columns: 1.4fr .85fr 1fr; gap: 14px; }
  .wd-panel {
    background: #fff !important; border: 1px solid #e5e7eb; border-radius: 14px;
    padding: 16px; box-shadow: 0 2px 10px rgba(0,0,0,.04);
  }
  .wd-panel-hdr { display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; }
  .wd-panel-hdr h3 { font-size: 15px !important; font-weight: 800 !important; color: #111827 !important; margin: 0 !important; }
  .wd-view-btn {
    background: #fff; border: 1px solid #e5e7eb; border-radius: 8px;
    padding: 6px 12px; font-size: 12px; font-weight: 700;
    cursor: pointer; font-family: inherit; transition: .2s; color: #374151 !important;
  }
  .wd-view-btn:hover { background: #f1f5f9; }

  /* TABLE */
  .wd-table { width: 100%; border-collapse: collapse; font-size: 11.5px; }
  .wd-table th {
    text-align: left; color: #94a3b8; font-weight: 700;
    padding: 8px 6px; border-bottom: 1px solid #f1f5f9; white-space: nowrap;
  }
  .wd-table td { padding: 10px 6px; font-weight: 600; border-bottom: 1px solid #f8fafc; white-space: nowrap; }
  .wd-table tr:last-child td { border-bottom: none; }
  .wd-table tbody tr:hover td { background: #fafbfc; }
  .wd-badge { display: inline-block; border-radius: 6px; padding: 4px 8px; font-size: 11px; font-weight: 700; }
  .wd-badge.warning { background: #fff7ed; color: #ea580c; }
  .wd-badge.success { background: #dcfce7; color: #16a34a; }
  .wd-badge.info    { background: #dbeafe; color: #2563eb; }
  .wd-badge.purple  { background: #f3e8ff; color: #7c3aed; }
  .wd-eye-btn { border: none; background: none; font-size: 14px; cursor: pointer; color: #94a3b8; transition: .2s; }
  .wd-eye-btn:hover { color: #111; }

  /* DONUT */
  .wd-donut-panel h3 { font-size: 14px !important; font-weight: 800 !important; margin-bottom: 4px !important; color: #111827 !important; }
  .wd-donut-wrap { display: flex; align-items: center; justify-content: space-around; margin-top: 14px; }
  .wd-donut-svg { cursor: pointer; transition: transform .2s, filter .2s; overflow: visible; }
  .wd-donut-svg:hover { transform: scale(1.05); filter: drop-shadow(0 8px 16px rgba(34,197,94,.22)); }
  .wd-legend { display: flex; flex-direction: column; gap: 14px; }
  .wd-legend-item {
    display: flex; align-items: flex-start; gap: 10px;
    cursor: pointer; padding: 6px 8px; border-radius: 10px; transition: .2s;
  }
  .wd-legend-item:hover, .wd-legend-item.active { background: #f8fafc; }
  .wd-legend-color { width: 11px; height: 11px; border-radius: 50%; margin-top: 3px; flex-shrink: 0; }
  .wd-legend-label { font-size: 12px; color: #64748b; font-weight: 600; }
  .wd-legend-val   { font-size: 16px; font-weight: 800; }
  .wd-legend-pct   { font-size: 11px; color: #94a3b8; }

  /* TREND CHART */
  .wd-trend-panel { display: flex; flex-direction: column; }
  .wd-trend-panel h3 { color: #111827 !important; font-weight: 800 !important; }
  .wd-chart-wrap  { position: relative; flex: 1; }
  .wd-chart-svg   { width: 100%; display: block; overflow: visible; }
  .wd-chart-labels {
    display: flex; justify-content: space-between;
    font-size: 10px; color: #94a3b8; margin-top: 4px; padding: 0 2px;
  }
  .wd-chart-dots { position: absolute; top: 0; left: 0; width: 100%; pointer-events: none; }
  .wd-chart-dot-btn {
    position: absolute; width: 16px; height: 16px; border-radius: 50%;
    background: #fbbf24; border: 2.5px solid #fff;
    box-shadow: 0 3px 10px rgba(251,191,36,.45);
    cursor: pointer; transform: translate(-50%, -50%);
    transition: transform .2s, background .2s;
    pointer-events: all; font-family: inherit;
  }
  .wd-chart-dot-btn:hover { transform: translate(-50%,-50%) scale(1.4); background: #fcd34d; }
  .wd-chart-tooltip {
    position: absolute; top: 4px; right: 4px;
    background: #111; color: #fff; border-radius: 8px;
    padding: 8px 12px; font-size: 12px; font-weight: 700;
    box-shadow: 0 8px 20px rgba(0,0,0,.2); pointer-events: none; z-index: 10;
  }
  .wd-chart-tooltip span { display: block; font-size: 11px; color: #9ca3af; font-weight: 500; margin-top: 2px; }

  @media (max-width: 1280px) {
    .wd-kpi-grid       { grid-template-columns: repeat(3, 1fr); }
    .wd-bottom-grid    { grid-template-columns: 1fr; }
    .wd-workflow       { grid-template-columns: 1fr 1fr 1fr; }
    .wd-connector      { display: none; }
  }
  @media (max-width: 900px) {
    .wd-root           { grid-template-columns: 1fr; }
    .wd-sidebar        { height: auto; }
    .wd-main           { height: auto; }
    .wd-img-grid,
    .wd-kpi-grid       { grid-template-columns: 1fr; }
  }
`;

// ─── HELPERS ──────────────────────────────────────────────────────────────────

function buildTrendPath(data, W = 300, H = 130, padX = 10, padY = 8) {
  const vals = data.map((d) => d.value);
  const min = Math.min(...vals) - 8;
  const max = Math.max(...vals) + 8;
  const pts = data.map((d, i) => ({
    x: padX + (i / (data.length - 1)) * (W - padX * 2),
    y: H - padY - ((d.value - min) / (max - min)) * (H - padY * 2),
    ...d,
  }));

  let smooth = `M${pts[0].x},${pts[0].y}`;
  for (let i = 1; i < pts.length; i++) {
    const cpX = (pts[i].x + pts[i - 1].x) / 2;
    smooth += ` C${cpX},${pts[i - 1].y} ${cpX},${pts[i].y} ${pts[i].x},${pts[i].y}`;
  }

  const area =
    smooth +
    ` L${pts[pts.length - 1].x},${H} L${pts[0].x},${H} Z`;

  return { pts, smooth, area, W, H };
}

// ─── SUB-COMPONENTS ───────────────────────────────────────────────────────────

function SparkLine({ color }) {
  return (
    <svg width="56" height="32" viewBox="0 0 56 32">
      <polyline
        points="2,26 12,18 22,22 32,10 42,14 52,6"
        fill="none"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MiniBarChart() {
  const heights = [14, 22, 30, 42, 26, 46];
  return (
    <svg width="50" height="38" viewBox="0 0 50 38">
      {heights.map((h, i) => (
        <rect
          key={i}
          x={i * 8 + 1}
          y={38 - h}
          width="6"
          height={h}
          rx="2"
          fill="#fbbf24"
        />
      ))}
    </svg>
  );
}

function KpiCard({ icon, title, value, sub, color, trend }) {
  const subColor =
    color === "green" ? "green"
    : color === "yellow" ? "green"
    : color === "blue" ? "blue"
    : color === "purple" ? "purple"
    : "orange";

  return (
    <div className="wd-kpi-card">
      <div className={`wd-kpi-ico ${color}`}>{icon}</div>
      <div className="wd-kpi-body">
        <p>{title}</p>
        <strong>{value}</strong>
        <span className={subColor}>{sub}</span>
      </div>
      {trend === "line" ? (
        <SparkLine color={color === "green" ? "#22c55e" : "#eab308"} />
      ) : (
        <MiniBarChart />
      )}
    </div>
  );
}

function WorkflowCard({ icon, iconColor, title, value, statusDot, status }) {
  return (
    <div className="wd-wf-card">
      <div className={`wd-wf-icon ${iconColor}`}>{icon}</div>
      <div className="wd-wf-info">
        <h3>{title}</h3>
        <strong>{value}</strong>
        <div className="wd-wf-status">
          <span className={`wd-dot ${statusDot}`}></span>
          {status}
        </div>
      </div>
    </div>
  );
}

function LiveCard({ title, subtitle }) {
  return (
    <div className="wd-live-card">
      <div className="wd-live-placeholder">
        <svg width="130" height="80" viewBox="0 0 130 80" fill="none" style={{ opacity: 0.12 }}>
          <rect x="5"  y="20" width="32" height="44" rx="5" fill="#fff" />
          <rect x="45" y="8"  width="9"  height="56" rx="4" fill="#fff" />
          <rect x="60" y="8"  width="9"  height="56" rx="4" fill="#fff" />
          <rect x="75" y="8"  width="9"  height="56" rx="4" fill="#fff" />
          <rect x="90" y="8"  width="9"  height="56" rx="4" fill="#fff" />
          <rect x="0"  y="62" width="130" height="6" rx="3" fill="#fff" />
          <circle cx="112" cy="36" r="14" fill="#fff" />
        </svg>
      </div>
      <div className="wd-live-overlay">
        <div>
          <div className="wd-live-title">
            <span className="wd-live-dot"></span>
            {title}
          </div>
          <div className="wd-live-sub">{subtitle}</div>
        </div>
        <button className="wd-live-btn">Live</button>
      </div>
    </div>
  );
}

function DonutPanel() {
  const [hover, setHover] = React.useState(null);

  const CIRC = 2 * Math.PI * 55; // ≈ 345.6
  const goodPct  = 0.965;
  const loosePct = 0.035;

  const label = hover === "good" ? "Good Qty" : hover === "loose" ? "Loose Qty" : "Total";
  const valTxt = hover === "good" ? "197" : hover === "loose" ? "7.73" : "204.99";

  return (
    <div className="wd-panel wd-donut-panel">
      <h3>Manufacturing Quantity Breakdown</h3>
      <div className="wd-donut-wrap">
        <svg
          className="wd-donut-svg"
          width="156" height="156"
          viewBox="0 0 156 156"
          onMouseLeave={() => setHover(null)}
        >
          {/* track */}
          <circle cx="78" cy="78" r="55" fill="none" stroke="#f1f5f9" strokeWidth="26" />
          {/* good arc */}
          <circle
            cx="78" cy="78" r="55"
            fill="none" stroke="#4ade80" strokeWidth="26"
            strokeDasharray={`${CIRC * goodPct} ${CIRC * loosePct}`}
            strokeDashoffset="0"
            transform="rotate(-90 78 78)"
            onMouseEnter={() => setHover("good")}
            style={{ cursor: "pointer" }}
          />
          {/* loose arc */}
          <circle
            cx="78" cy="78" r="55"
            fill="none" stroke="#fbbf24" strokeWidth="26"
            strokeDasharray={`${CIRC * loosePct} ${CIRC * goodPct}`}
            strokeDashoffset={-(CIRC * goodPct)}
            transform="rotate(-90 78 78)"
            onMouseEnter={() => setHover("loose")}
            style={{ cursor: "pointer" }}
          />
          {/* center text */}
          <text x="78" y="70" textAnchor="middle" fontSize="11" fill="#94a3b8" fontFamily="DM Sans" fontWeight="600">{label}</text>
          <text x="78" y="86" textAnchor="middle" fontSize="20" fill="#111" fontFamily="DM Sans" fontWeight="800">{valTxt}</text>
          <text x="78" y="100" textAnchor="middle" fontSize="11" fill="#94a3b8" fontFamily="DM Sans" fontWeight="600">Box</text>
        </svg>

        <div className="wd-legend">
          <div
            className={`wd-legend-item ${hover === "good" ? "active" : ""}`}
            onMouseEnter={() => setHover("good")}
            onMouseLeave={() => setHover(null)}
          >
            <span className="wd-legend-color" style={{ background: "#4ade80" }}></span>
            <div>
              <div className="wd-legend-label">Good Quantity</div>
              <div className="wd-legend-val">197 Box</div>
              <div className="wd-legend-pct">(96.50%)</div>
            </div>
          </div>
          <div
            className={`wd-legend-item ${hover === "loose" ? "active" : ""}`}
            onMouseEnter={() => setHover("loose")}
            onMouseLeave={() => setHover(null)}
          >
            <span className="wd-legend-color" style={{ background: "#fbbf24" }}></span>
            <div>
              <div className="wd-legend-label">Loose Quantity</div>
              <div className="wd-legend-val">7.73 Box</div>
              <div className="wd-legend-pct">(3.79%)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TrendPanel() {
  const [activePt, setActivePt] = React.useState(null);
  // Extra right padding so the tooltip for the last point doesn't clip
  const W = 320, H = 140, PAD_L = 8, PAD_R = 8, PAD_T = 18, PAD_B = 10;
  const { pts, smooth, area } = buildTrendPath(TREND_DATA, W, H, PAD_L, PAD_T);

  // Tooltip box dimensions (in SVG units)
  const TW = 80, TH = 42, TR = 7;

  return (
    <div className="wd-panel wd-trend-panel">
      <div className="wd-panel-hdr">
        <h3>Loose Quantity Trend (Nos)</h3>
        <button className="wd-view-btn">7 Days ⌄</button>
      </div>

      <div className="wd-chart-wrap" style={{ position: "relative" }}>
        {/*
          Single SVG — dots live INSIDE it, so their coords are always exact.
          preserveAspectRatio="xMidYMid meet" keeps aspect ratio intact.
        */}
        <svg
          className="wd-chart-svg"
          viewBox={`0 0 ${W} ${H}`}
          style={{ width: "100%", height: H, display: "block", overflow: "visible" }}
        >
          <defs>
            <linearGradient id="wdAreaGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   stopColor="#fbbf24" stopOpacity="0.38" />
              <stop offset="100%" stopColor="#fbbf24" stopOpacity="0"    />
            </linearGradient>
          </defs>

          {/* grid lines */}
          {[PAD_T, PAD_T + 30, PAD_T + 60, PAD_T + 90].map((y) => (
            <line key={y} x1={PAD_L} y1={y} x2={W - PAD_R} y2={y} stroke="#f1f5f9" strokeWidth="1" />
          ))}

          {/* area + line */}
          <path d={area}   fill="url(#wdAreaGrad)" />
          <path d={smooth} fill="none" stroke="#f59e0b" strokeWidth="3"
                strokeLinecap="round" strokeLinejoin="round" />

          {/* dots — rendered in SVG coords, no offset issues */}
          {pts.map((p) => (
            <g key={p.date}>
              {/* larger invisible hit area */}
              <circle
                cx={p.x} cy={p.y} r={12}
                fill="transparent"
                style={{ cursor: "pointer" }}
                onMouseEnter={() => setActivePt(p)}
                onMouseLeave={() => setActivePt(null)}
              />
              {/* visible dot */}
              <circle
                cx={p.x} cy={p.y}
                r={activePt && activePt.date === p.date ? 7 : 5}
                fill={activePt && activePt.date === p.date ? "#fcd34d" : "#fbbf24"}
                stroke="#fff"
                strokeWidth="2.5"
                style={{
                  filter: activePt && activePt.date === p.date
                    ? "drop-shadow(0 3px 8px rgba(251,191,36,.6))"
                    : "drop-shadow(0 2px 4px rgba(251,191,36,.35))",
                  transition: "r .15s, fill .15s",
                  pointerEvents: "none",
                }}
              />
            </g>
          ))}

          {/* SVG-native tooltip — always aligned to the hovered dot */}
          {activePt && (() => {
            // Clamp so tooltip never goes off left/right edge
            const tx = Math.min(Math.max(activePt.x - TW / 2, PAD_L), W - PAD_R - TW);
            const ty = activePt.y - TH - 14;
            // Small arrow pointing down
            const ax = activePt.x;
            const ay = ty + TH;
            return (
              <g style={{ pointerEvents: "none" }}>
                <rect x={tx} y={ty} width={TW} height={TH} rx={TR} fill="#111827" />
                {/* arrow */}
                <polygon
                  points={`${ax - 6},${ay} ${ax + 6},${ay} ${ax},${ay + 7}`}
                  fill="#111827"
                />
                <text x={tx + TW / 2} y={ty + 16} textAnchor="middle"
                      fontSize="13" fontWeight="800" fill="#fff" fontFamily="DM Sans">
                  {activePt.value} Nos
                </text>
                <text x={tx + TW / 2} y={ty + 31} textAnchor="middle"
                      fontSize="11" fill="#9ca3af" fontFamily="DM Sans">
                  {activePt.date}
                </text>
              </g>
            );
          })()}
        </svg>

        <div className="wd-chart-labels">
          {TREND_DATA.map((d) => (
            <span key={d.date}>{d.date}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── APP ──────────────────────────────────────────────────────────────────────

export function App() {
  const [activeNav, setActiveNav]   = React.useState("Dashboard");
  const [isFullscreen, setIsFullscreen] = React.useState(false);
  const [refreshing, setRefreshing]     = React.useState(false);
  const rootRef = React.useRef(null);

  // ── Fullscreen toggle ──
  const toggleFullscreen = React.useCallback(() => {
    if (!document.fullscreenElement) {
      rootRef.current?.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  }, []);

  React.useEffect(() => {
    const onFsChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onFsChange);
    return () => document.removeEventListener("fullscreenchange", onFsChange);
  }, []);

  // ── Refresh (spin for 800 ms then stop) ──
  const handleRefresh = React.useCallback(() => {
    if (refreshing) return;
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 800);
  }, [refreshing]);

  return (
    <>
      <style>{CSS}</style>

      <div className="wd-root" ref={rootRef}>
        {/* ── SIDEBAR ── */}
        <aside className="wd-sidebar">
          <div className="wd-brand">
            <div className="wd-brand-logo">🔥</div>
            <div className="wd-brand-text">
              <h2>Waters</h2>
              <span>MANUFACTURING</span>
            </div>
          </div>

          <nav className="wd-nav">
            {SIDEBAR_ITEMS.map((item) => (
              <button
                key={item.label}
                className={`wd-nav-item ${activeNav === item.label ? "active" : ""}`}
                onClick={() => setActiveNav(item.label)}
              >
                <span className="wd-nav-icon">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </nav>

          <div className="wd-sidebar-bottom">
            <div className="wd-sys-card">
              <div className="wd-sys-row">
                <span className="wd-green-pulse"></span>
                <span>System Status</span>
              </div>
              <strong>All Systems Operational</strong>
              <div className="wd-wave"></div>
            </div>

            <div className="wd-profile">
              <div className="wd-avatar">AM</div>
              <div>
                <strong style={{ color: "#fff", fontSize: 13 }}>Alex Morgan</strong>
                <span>Administrator</span>
              </div>
              <span className="wd-profile-arrow">⌄</span>
            </div>
          </div>
        </aside>

        {/* ── MAIN ── */}
        <main className="wd-main">

          {/* TOPBAR */}
          <div className="wd-topbar">
            <div>
              <h1>Welcome back, Alex 👋</h1>
              <p>Here's what's happening on the shop floor today.</p>
            </div>
            <div className="wd-top-actions">
              <div className="wd-search">⌕&nbsp; Search or type a command (Ctrl + G)</div>
              <button
                className="wd-icon-btn"
                onClick={handleRefresh}
                title="Refresh dashboard"
                style={{ animation: refreshing ? "wdSpin .8s linear" : "none" }}
              >
                ↻
              </button>
              <button
                className="wd-icon-btn"
                onClick={toggleFullscreen}
                title={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
              >
                {isFullscreen ? "⊠" : "⛶"}
              </button>
              <button className="wd-notif-btn">
                🔔<span className="wd-notif-badge">3</span>
              </button>
              <div className="wd-user-chip">AM</div>
              <div className="wd-date-chip">▣ May 13, 2025 ▾</div>
            </div>
          </div>

          {/* WORKFLOW */}
          <div className="wd-workflow">
            <WorkflowCard icon="🍾" iconColor="green"  title="Work Orders"   value="24" statusDot="green"  status="Active"          />
            <div className="wd-connector">
              <span className="wd-conn-line"></span>
              <button className="wd-conn-btn">›</button>
              <span className="wd-conn-line"></span>
            </div>
            <WorkflowCard icon="🧾" iconColor="blue"   title="Job Cards"     value="11" statusDot="orange" status="In Progress"      />
            <div className="wd-connector">
              <span className="wd-conn-line"></span>
              <button className="wd-conn-btn">›</button>
              <span className="wd-conn-line"></span>
            </div>
            <WorkflowCard icon="📦" iconColor="orange" title="Stock Entries" value="8"  statusDot="blue"   status="Pending Submit"   />
          </div>

          {/* KPI */}
          <div className="wd-kpi-grid">
            {KPIS.map((k) => <KpiCard key={k.title} {...k} />)}
          </div>

          {/* LIVE */}
          <div className="wd-img-grid">
            <LiveCard title="Filling Line 1"   subtitle="Running smoothly"                        />
            <LiveCard title="Store & Dispatch" subtitle="Packing, storage & outbound dispatch"    />
          </div>

          {/* BOTTOM */}
          <div className="wd-bottom-grid">

            {/* Work Order Table */}
            <div className="wd-panel">
              <div className="wd-panel-hdr">
                <h3>Work Order Monitor</h3>
                <button className="wd-view-btn">View All</button>
              </div>
              <table className="wd-table">
                <thead>
                  <tr>
                    <th>Work Order</th>
                    <th>Item</th>
                    <th>Target Qty</th>
                    <th>Good Qty</th>
                    <th>Loose Qty</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {WORK_ORDERS.map((row) => (
                    <tr key={row.id}>
                      <td>{row.id}</td>
                      <td>{row.item}</td>
                      <td>{row.target}</td>
                      <td>{row.good}</td>
                      <td>{row.loose}</td>
                      <td><span className={`wd-badge ${row.badge}`}>{row.status}</span></td>
                      <td><button className="wd-eye-btn">👁</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Donut */}
            <DonutPanel />

            {/* Trend */}
            <TrendPanel />

          </div>
        </main>
      </div>
    </>
  );
}

export default App;