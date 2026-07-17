// import * as React from "react";
// const { useState, useEffect, useCallback, useRef } = React;

// function frappeCall(method, args = {}) {
//   return new Promise((resolve, reject) => {
//     if (
//       typeof frappe === "undefined" ||
//       typeof frappe.call !== "function"
//     ) {
//       reject(new Error("Frappe is not available"));
//       return;
//     }

//     frappe.call({
//       method,
//       args,
//       freeze: false,
//       callback: function (r) {
//         if (r.exc) {
//           reject(r.exc);
//         } else {
//           resolve(r.message);
//         }
//       },
//       error: function (err) {
//         console.error("Frappe Call Error:", err);
//         reject(err);
//       },
//     });
//   });
// }

// function waitForFrappe() {
//   return new Promise((res) => {
//     const check = () => {
//       if (typeof frappe !== "undefined" && typeof frappe.call === "function") res();
//       else setTimeout(check, 200);
//     };
//     check();
//   });
// }

// function nowDatetime() {
//   try {
//     return frappe.datetime.now_datetime();
//   } catch (_) {
//     const now = new Date();
//     const pad = n => String(n).padStart(2, "0");
//     return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
//   }
// }

// function inputToFrappe(dtLocal) {
//   if (!dtLocal) return nowDatetime();
//   return dtLocal.replace("T", " ") + (dtLocal.length === 16 ? ":00" : "");
// }

// const STATUS_CONFIG = {
//   not_started: { label: "Not Started", dot: "#ef4444", bg: "#fef2f2", border: "#fecaca", text: "#dc2626" },
//   in_progress: { label: "In Progress", dot: "#facc15", bg: "rgba(250,204,21,0.12)", border: "#facc15", text: "#b45309", glow: "0 0 10px rgba(250,204,21,0.6)" },
//   paused: { label: "Paused", dot: "#6b7280", bg: "#f9fafb", border: "#e5e7eb", text: "#4b5563" },
//   completed: { label: "Completed", dot: "#22c55e", bg: "#f0fdf4", border: "#bbf7d0", text: "#16a34a" },
// };

// function statusFromDoc(jc) {
//   if (jc.status === "Completed") return "completed";
//   if (jc.is_paused) return "paused";
//   if (jc.status === "Work In Progress") return "in_progress";
//   return "not_started";
// }

// function StatusBadge({ status }) {
//   const cfg = STATUS_CONFIG[status] || STATUS_CONFIG.not_started;
//   return (
//     <span style={{
//       display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px",
//       borderRadius: 8, fontSize: 14, fontWeight: 600,
//       background: cfg.bg, border: `1px solid ${cfg.border}`, color: cfg.text,
//       boxShadow: cfg.glow || "none", whiteSpace: "nowrap",
//     }}>
//       <span style={{
//         width: 10, height: 10, borderRadius: "50%", background: cfg.dot, flexShrink: 0,
//         boxShadow: cfg.glow || "none",
//         animation: status === "in_progress" ? "pulse 1s infinite" : "none",
//       }} />
//       {cfg.label}
//     </span>
//   );
// }

// function ErrorToast({ message, onClose }) {
//   useEffect(() => {
//     const t = setTimeout(onClose, 6000);
//     return () => clearTimeout(t);
//   }, []);
//   return (
//     <div style={{
//       position: "fixed", bottom: 24, right: 24, zIndex: 3000,
//       background: "#fef2f2", border: "1px solid #fecaca", borderRadius: 10,
//       padding: "14px 18px", maxWidth: 420, boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
//       display: "flex", alignItems: "flex-start", gap: 12,
//       fontFamily: "'DM Sans','Segoe UI',sans-serif",
//     }}>
//       <span style={{ fontSize: 18, flexShrink: 0 }}>⚠</span>
//       <div style={{ flex: 1 }}>
//         <div style={{ fontWeight: 700, fontSize: 14, color: "#dc2626", marginBottom: 4 }}>Action Failed</div>
//         <div style={{ fontSize: 13, color: "#7f1d1d", wordBreak: "break-word" }}>{message}</div>
//       </div>
//       <button onClick={onClose} style={{ background: "none", border: "none", cursor: "pointer", color: "#9ca3af", fontSize: 18, flexShrink: 0 }}>✕</button>
//     </div>
//   );
// }

// function RemarksModal({ jobCard, onClose, onSaveRemark }) {
//   const [remark, setRemark] = useState("");
//   const [savedRemarks, setSavedRemarks] = useState(jobCard.remarks || []);
//   const [saving, setSaving] = useState(false);

//   const handleSave = async () => {
//     if (!remark.trim()) return;
//     setSaving(true);
//     const updated = [
//       ...savedRemarks,
//       { text: remark, time: new Date().toLocaleString([], { dateStyle: "short", timeStyle: "short" }) },
//     ];
//     setSavedRemarks(updated);
//     setRemark("");
//     // try {
//     //   await frappeCall("frappe.client.set_value", {
//     //     doctype: "Job Card",
//     //     name: jobCard.name,
//     //     fieldname: "remarks",
//     //     value: updated.map(r => `[${r.time}] ${r.text}`).join("\n\n"),
//     //   });
//     // } catch (_) { /* non-fatal */ }
//     onSaveRemark && onSaveRemark(jobCard.name, updated);
//     setSaving(false);
//   };

//   const overlay = {
//     position: "fixed", inset: 0, background: "rgba(0,0,0,0.45)", zIndex: 2000,
//     display: "flex", alignItems: "center", justifyContent: "center",
//     fontFamily: "'DM Sans','Segoe UI',sans-serif",
//   };
//   const box = {
//     background: "#fff", borderRadius: 14, padding: "24px 28px",
//     width: 520, maxWidth: "92vw", boxShadow: "0 24px 64px rgba(0,0,0,0.18)",
//     maxHeight: "90vh", display: "flex", flexDirection: "column",
//   };

//   return (
//     <div style={overlay} onClick={onClose}>
//       <div style={box} onClick={e => e.stopPropagation()}>
//         <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 22 }}>
//           <div style={{ display: "flex", alignItems: "center", gap: 10, fontWeight: 700, fontSize: 20, color: "#111" }}>
//             <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
//               <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
//             </svg>
//             Remarks
//           </div>
//           <button onClick={onClose} style={{ background: "none", border: "none", fontSize: 22, cursor: "pointer", color: "#6b7280" }}>✕</button>
//         </div>

//         <div style={{ display: "flex", gap: 16, marginBottom: 20, flexShrink: 0 }}>
//           {[["Job Card", jobCard.name], ["Operation", jobCard.operation || "—"]].map(([l, v]) => (
//             <div key={l} style={{ flex: 1 }}>
//               <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 6 }}>{l}</label>
//               <div style={{ background: "#f3f4f6", border: "1px solid #e5e7eb", borderRadius: 8, padding: "10px 14px", fontSize: 14, color: "#111", fontWeight: 500 }}>{v}</div>
//             </div>
//           ))}
//         </div>

//         <div style={{ overflowY: "auto", flex: 1, paddingRight: 4 }}>
//           {savedRemarks.length > 0 && (
//             <div style={{ marginBottom: 20 }}>
//               <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 10 }}>Saved Remarks</label>
//               <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
//                 {savedRemarks.map((r, i) => (
//                   <div key={i} style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 8, padding: "12px 14px" }}>
//                     <div style={{ fontSize: 14, color: "#1e293b", whiteSpace: "pre-wrap", wordBreak: "break-word" }}>{r.text}</div>
//                     <div style={{ fontSize: 11, color: "#64748b", marginTop: 6, fontWeight: 500 }}>{r.time}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}
//           <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 8 }}>Enter Remarks</label>
//           <textarea
//             value={remark} onChange={e => setRemark(e.target.value)} maxLength={500}
//             placeholder="Enter remarks here..."
//             style={{ width: "100%", height: 100, border: "1px solid #e5e7eb", borderRadius: 8, padding: 14, fontSize: 14, outline: "none", resize: "none", background: "#f9fafb", fontFamily: "inherit", color: "#111", boxSizing: "border-box" }}
//           />
//           <div style={{ display: "flex", justifyContent: "flex-end", fontSize: 13, color: "#4b5563", fontWeight: 600, marginBottom: 12 }}>{remark.length}/500</div>
//           <p style={{ fontSize: 13, color: "#4b5563", margin: 0 }}>Remarks can be added before completing the job card.</p>
//         </div>

//         <div style={{ display: "flex", justifyContent: "flex-end", gap: 12, marginTop: "auto", paddingTop: 16, borderTop: "1px solid #f3f4f6" }}>
//           <button onClick={onClose} style={{ background: "#f3f4f6", color: "#374151", border: "1px solid #e5e7eb", borderRadius: 8, padding: "10px 24px", fontWeight: 600, cursor: "pointer", fontSize: 14 }}>Cancel</button>
//           <button onClick={handleSave} disabled={!remark.trim() || saving}
//             style={{ background: remark.trim() && !saving ? "#EAB308" : "#fef08a", color: "#000", border: "none", borderRadius: 8, padding: "10px 20px", fontWeight: 700, cursor: remark.trim() && !saving ? "pointer" : "not-allowed", fontSize: 14, display: "flex", alignItems: "center", gap: 8 }}>
//             {saving ? "⟳ Saving…" : "💬 Save Remarks"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// function CompleteModal({ card, onClose, onConfirm, loading }) {
//   const [completedQty, setCompletedQty] = useState(card.for_quantity || 0);
//   const [looseQty, setLooseQty] = useState(0);
//   const now = new Date();
//   const offset = now.getTimezoneOffset() * 60000;
//   const [endTime, setEndTime] = useState((new Date(now - offset)).toISOString().slice(0, 16));

//   const inp = {
//     width: "100%", border: "1px solid #e5e7eb", borderRadius: 8,
//     padding: "10px 14px", fontSize: 14, outline: "none",
//     background: "#f3f4f6", color: "#111", boxSizing: "border-box", fontFamily: "inherit",
//   };

//   return (
//     <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.45)", zIndex: 2000, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'DM Sans','Segoe UI',sans-serif" }} onClick={onClose}>
//       <div style={{ background: "#fff", borderRadius: 14, padding: "24px 28px", width: 460, maxWidth: "92vw", boxShadow: "0 24px 64px rgba(0,0,0,0.18)" }} onClick={e => e.stopPropagation()}>
//         <div style={{ fontWeight: 700, fontSize: 18, color: "#111", marginBottom: 4 }}>Complete — {card.operation || card.name}</div>
//         <div style={{ fontSize: 13, color: "#6b7280", marginBottom: 22 }}>Last job card — confirm final quantities before submitting</div>

//         <div style={{ marginBottom: 16 }}>
//           <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 6 }}>Qty to Manufacture (Planned)</label>
//           <input type="number" readOnly value={card.for_quantity} style={{ ...inp, background: "#f9fafb", color: "#6b7280" }} />
//         </div>

//         <div style={{ marginBottom: 16 }}>
//           <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 6 }}>
//             Completed Quantity <span style={{ color: "#ef4444" }}>*</span>
//           </label>
//           <input type="number" value={completedQty} onChange={e => setCompletedQty(+e.target.value)} style={inp} />
//         </div>

//         <div style={{ marginBottom: 16 }}>
//           <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 6 }}>Loose Quantity (Nos)</label>
//           <input type="number" value={looseQty} onChange={e => setLooseQty(+e.target.value)} style={inp} />
//           <div style={{ fontSize: 12, color: "#6b7280", marginTop: 4 }}>Stored in custom_loose_quantity — converted to boxes via UOM factor</div>
//         </div>

//         <div style={{ marginBottom: 24 }}>
//           <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 6 }}>End Time</label>
//           <input type="datetime-local" value={endTime} onChange={e => setEndTime(e.target.value)} style={{ ...inp, background: "#f9fafb" }} />
//         </div>

//         <div style={{ display: "flex", justifyContent: "flex-end", gap: 10, paddingTop: 16, borderTop: "1px solid #e5e7eb" }}>
//           <button onClick={onClose} disabled={loading} style={{ background: "transparent", color: "#6b7280", border: "none", borderRadius: 8, padding: "10px 16px", fontWeight: 600, cursor: "pointer", fontSize: 14 }}>Cancel</button>
//           <button
//             disabled={loading || completedQty <= 0}
//             onClick={() => onConfirm(card, completedQty, looseQty, endTime)}
//             style={{ background: loading || completedQty <= 0 ? "#fef08a" : "#EAB308", color: "#000", border: "none", borderRadius: 8, padding: "10px 28px", fontWeight: 700, cursor: loading || completedQty <= 0 ? "not-allowed" : "pointer", fontSize: 14, opacity: loading ? 0.7 : 1 }}>
//             {loading ? "⟳ Saving…" : "✓ Complete"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// function JobCardRow({ card, localStatus, idx, totalCards, onAction, onRemark, actionLoading }) {
//   const status = localStatus || statusFromDoc(card);
//   const isCompleted = status === "completed";
//   const isInProgress = status === "in_progress";
//   const isPaused = status === "paused";
//   const hasRemarks = card.remarks && card.remarks.length > 0;
//   const isLastCard = idx === totalCards - 1;
//   const isLoading = actionLoading === card.name;

//   const [elapsed, setElapsed] = useState(0);
//   const [startedAt, setStartedAt] = useState(null);
//   const timerRef = useRef(null);
//   const pausedCarryRef = useRef(0);

//   useEffect(() => {
//     if (isInProgress) {
//       if (!startedAt) setStartedAt(new Date());
//       const base = pausedCarryRef.current;
//       const t0 = Date.now();
//       timerRef.current = setInterval(() => {
//         setElapsed(base + Math.floor((Date.now() - t0) / 1000));
//       }, 1000);
//     } else {
//       clearInterval(timerRef.current);
//       if (isPaused) pausedCarryRef.current = elapsed;
//       if (isCompleted) { pausedCarryRef.current = 0; }
//     }
//     return () => clearInterval(timerRef.current);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [status]);

//   const fmt2 = n => String(Math.floor(n)).padStart(2, "0");
//   const fmtElapsed = s => `${fmt2(s / 3600)}:${fmt2((s % 3600) / 60)}:${fmt2(s % 60)}`;

//   const btnBase = {
//     display: "flex", alignItems: "center", gap: 8, padding: "10px 18px",
//     borderRadius: 8, fontWeight: 600, fontSize: 14, cursor: "pointer",
//     whiteSpace: "nowrap", border: "none", transition: "all 0.15s",
//   };

//   return (
//     <>
//       <div style={{
//         display: "grid", gridTemplateColumns: "52px 160px 1fr 160px auto",
//         alignItems: "center", gap: 14, padding: "20px 28px",
//         borderBottom: (isInProgress || isPaused) ? "none" : "1px solid #f3f4f6",
//         background: "#fff", transition: "background 0.15s",
//       }}
//         onMouseEnter={e => e.currentTarget.style.background = "#fafafa"}
//         onMouseLeave={e => e.currentTarget.style.background = "#fff"}>

//         <div style={{ width: 44, height: 44, borderRadius: 10, background: "#111", color: "#EAB308", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 15, flexShrink: 0 }}>
//           {String(idx + 1).padStart(2, "0")}
//         </div>

//         <div style={{ color: "#6b7280", fontSize: 13, fontWeight: 600, fontFamily: "monospace", wordBreak: "break-all" }}>{card.name}</div>

//         <div>
//           <div style={{ fontWeight: 700, fontSize: 15, color: "#111" }}>{card.operation || "—"}</div>
//           <div style={{ fontSize: 12, color: "#9ca3af", marginTop: 3 }}>{card.workstation || ""}</div>
//           {isLastCard && (
//             <span style={{ display: "inline-block", marginTop: 4, fontSize: 11, fontWeight: 700, color: "#EAB308", background: "rgba(234,179,8,0.1)", border: "1px solid rgba(234,179,8,0.3)", borderRadius: 4, padding: "2px 8px" }}>
//               LAST CARD
//             </span>
//           )}
//         </div>

//         <StatusBadge status={status} />

//         <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
//           {isLoading ? (
//             <span style={{ fontSize: 14, color: "#6b7280", fontWeight: 600, padding: "10px 18px", display: "inline-flex", alignItems: "center", gap: 6 }}>
//               <span style={{ display: "inline-block", animation: "spin 0.8s linear infinite" }}>⟳</span> Processing…
//             </span>
//           ) : isCompleted ? null : isInProgress ? (
//             <>
//               <button onClick={() => onAction(card, "pause")} style={{ ...btnBase, border: "1px solid #e5e7eb", background: "#fff", color: "#374151" }}>⏸ Pause</button>
//               <button onClick={() => onAction(card, "complete")} style={{ ...btnBase, border: "1px solid #bbf7d0", background: "#f0fdf4", color: "#16a34a" }}>✓ Complete</button>
//             </>
//           ) : isPaused ? (
//             <button onClick={() => onAction(card, "resume")} style={{ ...btnBase, background: "#EAB308", color: "#000" }}>▶ Resume</button>
//           ) : (
//             <button onClick={() => onAction(card, "start")} style={{ ...btnBase, background: "#EAB308", color: "#000" }}>▶ Start</button>
//           )}

//           <button onClick={() => onRemark(card)} style={{ ...btnBase, border: "1px solid #e5e7eb", background: "#fff", color: "#374151" }}>
//             💬 {isCompleted || hasRemarks ? "View Remarks" : "Remarks"}
//           </button>
//         </div>
//       </div>

//       {(isInProgress || isPaused) && (
//         <div style={{
//           padding: "12px 28px", borderBottom: "1px solid #f3f4f6",
//           background: isPaused ? "#f9fafb" : "rgba(250,204,21,0.05)",
//           borderTop: isPaused ? "1px solid #e5e7eb" : "1px solid rgba(250,204,21,0.18)",
//           display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap",
//         }}>
//           <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
//             <span style={{ fontSize: 11, fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.06em" }}>Elapsed</span>
//             <span style={{ fontSize: 22, fontWeight: 800, color: "#111", fontFamily: "monospace", letterSpacing: "0.06em" }}>
//               {fmtElapsed(elapsed)}
//             </span>
//             {isInProgress && (
//               <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#facc15", display: "inline-block", animation: "pulse 1.2s infinite" }} />
//             )}
//             {isPaused && (
//               <span style={{ padding: "3px 10px", background: "#f3f4f6", border: "1px solid #e5e7eb", borderRadius: 6, fontSize: 12, fontWeight: 700, color: "#6b7280" }}>⏸ Paused</span>
//             )}
//           </div>

//           <div style={{ width: 1, height: 24, background: "#e5e7eb" }} />

//           {startedAt && (
//             <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
//               <span style={{ fontSize: 11, fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.06em" }}>Started</span>
//               <span style={{ fontSize: 13, fontWeight: 600, color: "#374151" }}>
//                 {startedAt.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" })}
//               </span>
//             </div>
//           )}

//           <div style={{ width: 1, height: 24, background: "#e5e7eb" }} />

//           <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
//             <span style={{ fontSize: 11, fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.06em" }}>For Qty</span>
//             <span style={{ fontSize: 13, fontWeight: 700, color: "#111" }}>{card.for_quantity}</span>
//           </div>

//           {card.workstation && (
//             <>
//               <div style={{ width: 1, height: 24, background: "#e5e7eb" }} />
//               <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
//                 <span style={{ fontSize: 11, fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.06em" }}>Workstation</span>
//                 <span style={{ fontSize: 13, fontWeight: 600, color: "#374151" }}>{card.workstation}</span>
//               </div>
//             </>
//           )}
//         </div>
//       )}
//     </>
//   );
// }

// function WorkOrderSection({ wo, isLatest, defaultCollapsed }) {
//   const [collapsed, setCollapsed] = useState(defaultCollapsed);
//   const [woStarted, setWoStarted] = useState(wo.status === "In Process" || wo.status === "Completed");
//   const [woStartLoading, setWoStartLoading] = useState(false);


//   const [jobCards, setJobCards] = useState([]);
//   const [jcLoading, setJcLoading] = useState(false);
//   const [jcError, setJcError] = useState(null);

//   const [localStatuses, setLocalStatuses] = useState({});
//   const [localRemarks, setLocalRemarks] = useState({});

//   const [remarkCard, setRemarkCard] = useState(null);
//   const [completeCard, setCompleteCard] = useState(null);
//   const [actionLoading, setActionLoading] = useState(null);
//   const [modalLoading, setModalLoading] = useState(false);
//   const [toastError, setToastError] = useState(null);




//   const loadJobCards = useCallback(async () => {
//     setJcLoading(true); setJcError(null);
//     try {
//       const list = await frappeCall("frappe.client.get_list", {
//         doctype: "Job Card",
//         filters: [["work_order", "=", wo.name]],
//         fields: [
//           "name", "work_order", "operation", "workstation",
//           "for_quantity", "total_completed_qty", "status",
//           "is_paused", "docstatus", "sequence_id", "remarks",
//           "production_item",
//         ],
//         limit_page_length: 100,
//         order_by: "sequence_id asc",
//       });
//       setJobCards(Array.isArray(list) ? list : []);
//     } catch (e) {
//       setJcError(e.message || "Failed to load Job Cards");
//     } finally {
//       setJcLoading(false);
//     }
//   }, [wo.name]);

//   useEffect(() => {
//     if (!collapsed) loadJobCards();
//   }, [collapsed, loadJobCards]);

//   const handleStartWO = async () => {
//     setWoStartLoading(true);
//     try {
//       // await frappeCall("frappe.client.set_value", {
//       //   doctype: "Work Order", name: wo.name,
//       //   fieldname: "status", value: "In Process",
//       // });
//       setWoStarted(true);
//     } catch (e) {
//       setToastError(e.message || "Failed to start Work Order");
//       setWoStarted(true);
//     } finally {
//       setWoStartLoading(false);
//     }
//   };

//   const handleAction = async (card, action) => {
//     const id = card.name;
//     const isLastCard = jobCards.length > 0 && jobCards[jobCards.length - 1].name === id;

//     if (action === "complete" && isLastCard) {
//       setCompleteCard(card);
//       return;
//     }

//     setActionLoading(id);
//     try {
//       // if (action === "start") {
//       //   // await frappeCall("frappe.client.set_value", {
//       //   //   doctype: "Job Card", name: id,
//       //   //   fieldname: "status", value: "Work In Progress",
//       //   // });
//       //   // await frappeCall("run_doc_method", {
//       //   //   dt: "Job Card", dn: id, method: "start_timer",
//       //   //   args: JSON.stringify({ start_time: nowDatetime(), employees: [] }),
//       //   // });
//       //   setLocalStatuses(p => ({ ...p, [id]: "in_progress" }));

//       // }
//       // if (action === "start") {
//       //   // Step 1: set status
//       //   await frappeCall("frappe.client.set_value", {
//       //     doctype: "Job Card",
//       //     name: id,
//       //     fieldname: "status",
//       //     value: "Work In Progress",
//       //   });

//       //   // Step 2: call start_timer directly as a whitelisted method
//       //   await frappeCall("frappe.client.set_value", {
//       //     doctype: "Job Card",
//       //     name: id,
//       //     fieldname: "started_time",
//       //     value: nowDatetime(),
//       //   });

//       //   // Step 3: call start_timer via the correct path
//       //   await new Promise((res, rej) => {
//       //     frappe.call({
//       //       method: "frappe.client.run_doc_method",
//       //       args: {
//       //         dt: "Job Card",
//       //         dn: id,
//       //         method: "start_timer",
//       //         args: {
//       //           start_time: nowDatetime(),
//       //           employees: [],
//       //         },
//       //       },
//       //       callback: r => {
//       //         if (r.exc) rej(new Error(r.exc));
//       //         else res(r.message);
//       //       },
//       //       error: rej,
//       //     });
//       //   });

//       //   setLocalStatuses(p => ({ ...p, [id]: "in_progress" }));
//       // }

//       const startJobCard = async (jobCardId) => {
//         try {

//           const response = await frappeCall(
//             "erpnext.manufacturing.doctype.job_card.job_card.make_time_log",
//             {
//               kwargs: {
//                 job_card_id: jobCardId,

//                 start_time: frappe.datetime.now_datetime(),

//                 employees: [
//                   {
//                     employee: "HR-EMP-00004",
//                   },
//                   {
//                     employee: "HR-EMP-00003",
//                   },
//                 ],
//               },
//             }
//           );

//           console.log("SUCCESS", response);

//           frappe.show_alert({
//             message: "Job Started",
//             indicator: "green",
//           });

//         } catch (err) {

//           console.error(err);

//           frappe.msgprint({
//             title: "Error",
//             message: String(err),
//             indicator: "red",
//           });
//         }
//       };

//       const pauseJobCard = async (jobCardId) => {
//         try {

//           await frappeCall(
//             "frappe.client.run_doc_method",
//             {
//               docs: {
//                 doctype: "Job Card",
//                 name: jobCardId,
//               },

//               method: "pause_job",

//               args: {
//                 end_time: frappe.datetime.now_datetime(),
//               },
//             }
//           );

//           frappe.show_alert({
//             message: "Job Paused",
//             indicator: "orange",
//           });

//         } catch (err) {

//           console.error(err);

//           frappe.msgprint({
//             title: "Pause Failed",
//             message: String(err),
//             indicator: "red",
//           });
//         }
//       };

//       if (action === "start") {
//         // // Step 1: set status
//         // await frappeCall("frappe.client.set_value", {
//         //   doctype: "Job Card",
//         //   name: id,
//         //   fieldname: "status",
//         //   value: "Work In Progress",
//         // });

//         // // Step 2: call start_timer via correct path
//         // await frappeCall("frappe.desk.form.utils.run_doc_method", {
//         //   dt: "Job Card",
//         //   dn: id,
//         //   method: "start_timer",
//         //   args: JSON.stringify({
//         //     start_time: nowDatetime(),
//         //     employees: [],
//         //   }),
//         // });

//         // setLocalStatuses(p => ({ ...p, [id]: "in_progress" }));
//         startJobCard("PO-JOB00136")

//       }
//       else if (action === "pause") {
//         // await frappeCall("run_doc_method", {
//         //   dt: "Job Card", dn: id, method: "pause_job",
//         //   args: JSON.stringify({ end_time: nowDatetime() }),
//         // });
//         pauseJobCard("PO-JOB00136")
//         // await frappeCall("frappe.desk.form.utils.run_doc_method", {
//         //   dt: "Job Card",
//         //   dn: id,
//         //   method: "pause_job",
//         //   args: JSON.stringify({ end_time: nowDatetime() }),
//         // });
//         // setLocalStatuses(p => ({ ...p, [id]: "paused" }));


//         // setLocalStatuses(p => ({ ...p, [id]: "paused" }));

//       } else if (action === "resume") {
//         // await frappeCall("run_doc_method", {
//         //   dt: "Job Card", dn: id, method: "resume_job",
//         //   args: JSON.stringify({ start_time: nowDatetime() }),
//         // });
//         setLocalStatuses(p => ({ ...p, [id]: "in_progress" }));

//       } else if (action === "complete") {
//         // await frappeCall("run_doc_method", {
//         //   dt: "Job Card", dn: id, method: "complete_job_card",
//         //   args: JSON.stringify({
//         //     qty:              card.for_quantity,
//         //     for_quantity:     card.for_quantity,
//         //     end_time:         nowDatetime(),
//         //     loose_qty:        0,
//         //     process_loss_qty: 0,
//         //     auto_submit:      1,
//         //   }),
//         // });
//         await frappeCall("frappe.desk.form.utils.run_doc_method", {
//           dt: "Job Card",
//           dn: id,
//           method: "complete_job_card",
//           args: JSON.stringify({
//             qty: card.for_quantity,
//             for_quantity: card.for_quantity,
//             end_time: nowDatetime(),
//             loose_qty: 0,
//             process_loss_qty: 0,
//             auto_submit: 1,
//           }),
//         });
//         setLocalStatuses(p => ({ ...p, [id]: "completed" }));
//         // setLocalStatuses(p => ({ ...p, [id]: "completed" }));
//       }

//     } catch (e) {
//       console.error(`Job card [${action}] failed:`, e);
//       setToastError(e.message || `Failed to ${action} job card`);
//       const map = { start: "in_progress", pause: "paused", resume: "in_progress", complete: "completed" };
//       setLocalStatuses(p => ({ ...p, [id]: map[action] || p[id] }));
//     } finally {
//       setActionLoading(null);
//     }
//   };

//   const handleConfirmComplete = async (card, completedQty, looseQty, endTime) => {
//     setModalLoading(true);
//     try {
//       // await frappeCall("run_doc_method", {
//       //   dt: "Job Card", dn: card.name, method: "complete_job_card",
//       //   args: JSON.stringify({
//       //     qty:              completedQty,
//       //     for_quantity:     card.for_quantity,
//       //     end_time:         inputToFrappe(endTime),
//       //     loose_qty:        looseQty,
//       //     process_loss_qty: 0,
//       //     auto_submit:      1,
//       //   }),
//       // });
//       setLocalStatuses(p => ({ ...p, [card.name]: "completed" }));
//       setCompleteCard(null);
//       await loadJobCards();
//     } catch (e) {
//       console.error("Complete (last card) failed:", e);
//       setToastError(e.message || "Failed to complete job card");
//     } finally {
//       setModalLoading(false);
//     }
//   };

//   const handleSaveRemark = (id, updatedRemarks) => {
//     setLocalRemarks(p => ({ ...p, [id]: updatedRemarks }));
//   };

//   const counts = jobCards.reduce((acc, j) => {
//     const s = localStatuses[j.name] || statusFromDoc(j);
//     acc[s] = (acc[s] || 0) + 1;
//     return acc;
//   }, { not_started: 0, in_progress: 0, paused: 0, completed: 0 });

//   const pct = wo.qty > 0 ? Math.round(((wo.produced_qty || 0) / wo.qty) * 100) : 0;
//   const statusColor = wo.status === "Completed" ? "#22c55e" : wo.status === "In Process" ? "#EAB308" : "#6b7280";

//   return (
//     <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 14, overflow: "hidden", boxShadow: "0 1px 4px rgba(0,0,0,0.06)", marginBottom: 20 }}>

//       <div style={{ padding: "24px 28px", borderBottom: collapsed ? "none" : "1px solid #f3f4f6" }}>
//         <div style={{ fontSize: 11, fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>
//           Work Order{isLatest && <span style={{ marginLeft: 8, background: "#EAB308", color: "#000", borderRadius: 4, padding: "2px 8px", fontSize: 10 }}>LATEST</span>}
//         </div>

//         <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
//           <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
//             <div style={{ width: 48, height: 48, background: "#111", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>📋</div>
//             <div>
//               <div style={{ fontWeight: 800, fontSize: 22, color: "#111", letterSpacing: "-0.02em" }}>{wo.name}</div>
//               <span style={{ display: "inline-block", marginTop: 4, padding: "3px 12px", background: `${statusColor}22`, border: `1px solid ${statusColor}44`, borderRadius: 20, fontSize: 12, fontWeight: 700, color: statusColor }}>
//                 {wo.status}
//               </span>
//             </div>
//           </div>

//           <div style={{ width: 1, height: 48, background: "#f3f4f6", marginLeft: 8 }} />

//           {[
//             ["Product", wo.production_item],
//             ["Item", wo.item_name || "—"],
//             ["Quantity", `${wo.qty} ${wo.stock_uom || ""}`],
//             ["Produced", `${wo.produced_qty || 0}`],
//             ["Planned Start", wo.planned_start_date || "—"],
//           ].map(([l, v]) => (
//             <div key={l} style={{ minWidth: 90 }}>
//               <div style={{ fontSize: 11, color: "#9ca3af", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.04em" }}>{l}</div>
//               <div style={{ fontWeight: 700, fontSize: 14, color: "#111", marginTop: 2 }}>{v}</div>
//             </div>
//           ))}

//           <div style={{ flex: 1, minWidth: 120 }}>
//             <div style={{ height: 6, background: "#f3f4f6", borderRadius: 4, overflow: "hidden" }}>
//               <div style={{ height: "100%", width: `${pct}%`, background: "#EAB308", borderRadius: 4, transition: "width 0.4s" }} />
//             </div>
//             <div style={{ fontSize: 12, color: "#6b7280", marginTop: 4, fontWeight: 600 }}>{pct}% complete</div>
//           </div>

//           <div style={{ display: "flex", gap: 10, alignItems: "center", marginLeft: "auto" }}>
//             {!woStarted && (
//               <button onClick={handleStartWO} disabled={woStartLoading}
//                 style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 20px", borderRadius: 8, background: "#EAB308", color: "#000", border: "none", fontWeight: 700, fontSize: 14, cursor: woStartLoading ? "not-allowed" : "pointer", opacity: woStartLoading ? 0.7 : 1, whiteSpace: "nowrap" }}>
//                 {woStartLoading
//                   ? <><span style={{ display: "inline-block", animation: "spin 0.8s linear infinite" }}>⟳</span> Starting…</>
//                   : "▶ Start Work Order"
//                 }
//               </button>
//             )}
//             {woStarted && wo.status !== "Completed" && (
//               <span style={{ padding: "8px 16px", borderRadius: 8, background: "rgba(34,197,94,0.1)", border: "1px solid #bbf7d0", color: "#16a34a", fontWeight: 700, fontSize: 13 }}>
//                 ✓ WO Started
//               </span>
//             )}
//             <button onClick={() => setCollapsed(c => !c)}
//               style={{ width: 36, height: 36, borderRadius: 8, border: "1px solid #e5e7eb", background: "#fff", cursor: "pointer", fontSize: 16, color: "#6b7280" }}>
//               {collapsed ? "▼" : "▲"}
//             </button>
//           </div>
//         </div>
//       </div>

//       {!collapsed && (
//         <>
//           <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 28px", borderBottom: "1px solid #f3f4f6", background: "#fafafa" }}>
//             <div style={{ fontWeight: 800, fontSize: 13, letterSpacing: "0.06em", textTransform: "uppercase", color: "#374151" }}>
//               Job Cards {jcLoading ? "…" : `(${jobCards.length})`}
//             </div>
//             <div style={{ display: "flex", gap: 18 }}>
//               {[["not_started", "#ef4444"], ["in_progress", "#f59e0b"], ["paused", "#6b7280"], ["completed", "#22c55e"]].map(([s, dot]) => (
//                 <div key={s} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "#374151" }}>
//                   <span style={{ width: 8, height: 8, borderRadius: "50%", background: dot, display: "inline-block" }} />
//                   <span style={{ fontWeight: 600 }}>{STATUS_CONFIG[s].label}:</span>
//                   <span style={{ fontWeight: 800 }}>{counts[s] || 0}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {jcLoading && (
//             <div style={{ display: "flex", justifyContent: "center", padding: 48 }}>
//               <div style={{ textAlign: "center", color: "#6b7280" }}>
//                 <div style={{ fontSize: 28, marginBottom: 10, animation: "spin 1s linear infinite", display: "inline-block" }}>↻</div>
//                 <div style={{ fontWeight: 600 }}>Loading Job Cards…</div>
//               </div>
//             </div>
//           )}

//           {jcError && (
//             <div style={{ padding: "20px 28px" }}>
//               <div style={{ background: "#fef2f2", border: "1px solid #fecaca", borderRadius: 12, padding: "16px 20px", color: "#dc2626", fontWeight: 600 }}>⚠ {jcError}</div>
//             </div>
//           )}

//           {!jcLoading && !jcError && jobCards.length > 0 && (
//             <>
//               <div style={{ display: "grid", gridTemplateColumns: "52px 160px 1fr 160px auto", gap: 14, padding: "14px 28px", background: "#f9fafb", borderBottom: "1px solid #f3f4f6" }}>
//                 {["#", "Job Card ID", "Operation", "Status", "Actions"].map(h => (
//                   <div key={h} style={{ fontSize: 12, fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.06em" }}>{h}</div>
//                 ))}
//               </div>

//               {jobCards.map((card, idx) => (
//                 <JobCardRow
//                   key={card.name}
//                   card={{ ...card, remarks: localRemarks[card.name] || (card.remarks ? [{ text: card.remarks, time: "" }] : []) }}
//                   localStatus={localStatuses[card.name]}
//                   idx={idx}
//                   totalCards={jobCards.length}
//                   onAction={handleAction}
//                   onRemark={setRemarkCard}
//                   actionLoading={actionLoading}
//                 />
//               ))}
//             </>
//           )}

//           {!jcLoading && !jcError && jobCards.length === 0 && (
//             <div style={{ textAlign: "center", padding: 48, color: "#9ca3af", fontWeight: 600 }}>No job cards found for this work order.</div>
//           )}
//         </>
//       )}

//       {remarkCard && (
//         <RemarksModal
//           jobCard={{ ...remarkCard, remarks: localRemarks[remarkCard.name] || (remarkCard.remarks ? [{ text: remarkCard.remarks, time: "" }] : []) }}
//           onClose={() => setRemarkCard(null)}
//           onSaveRemark={handleSaveRemark}
//         />
//       )}
//       {completeCard && (
//         <CompleteModal
//           card={completeCard}
//           loading={modalLoading}
//           onClose={() => !modalLoading && setCompleteCard(null)}
//           onConfirm={handleConfirmComplete}
//         />
//       )}

//       {toastError && <ErrorToast message={toastError} onClose={() => setToastError(null)} />}
//     </div>
//   );
// }

// export function WorkOrderManufacturing() {
//   const [woList, setWoList] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [refreshing, setRefreshing] = useState(false);


//   const [isFullscreen, setIsFullscreen] = useState(false);

//   // Sync state if user uses 'Esc' to exit fullscreen
//   useEffect(() => {
//     const handleFullscreenChange = () => {
//       setIsFullscreen(!!document.fullscreenElement);
//     };

//     document.addEventListener("fullscreenchange", handleFullscreenChange);
//     return () => {
//       document.removeEventListener("fullscreenchange", handleFullscreenChange);
//     };
//   }, []);

//   const loadWorkOrders = useCallback(async () => {
//     setLoading(true); setError(null);
//     try {
//       await waitForFrappe();
//       const list = await frappeCall("frappe.client.get_list", {
//         doctype: "Work Order",
//         fields: ["name", "production_item", "item_name", "qty", "produced_qty", "status", "planned_start_date", "stock_uom", "company"],
//         limit_page_length: 200,
//         order_by: "modified desc",
//       });
//       const all = Array.isArray(list) ? list : [];
//       setWoList(all.slice(0, 2));
//     } catch (e) {
//       setError(e.message || "Failed to load Work Orders");
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   useEffect(() => { loadWorkOrders(); }, [loadWorkOrders]);

//   const handleRefresh = async () => {
//     setRefreshing(true);
//     await loadWorkOrders();
//     setTimeout(() => setRefreshing(false), 600);
//   };

//   const toggleFullscreen = () => {
//     if (!document.fullscreenElement) {
//       document.documentElement.requestFullscreen().catch((err) => {
//         console.error(`Error attempting to enable fullscreen: ${err.message}`);
//       });
//     } else {
//       if (document.exitFullscreen) {
//         document.exitFullscreen();
//       }
//     }
//   };

//   return (
//     <div style={{ minHeight: "100vh", background: "#f3f4f6", fontFamily: "'DM Sans','Segoe UI',sans-serif" }}>

//       {/* <header style={{ background: "#111", color: "#fff", padding: "0 24px", height: 56, display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 100 }}>
//         <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
//           <div style={{ width: 34, height: 34, background: "#EAB308", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 18, color: "#111" }}>K</div>
//           <span style={{ fontWeight: 700, fontSize: 18, letterSpacing: "-0.02em" }}>Work Orders</span>
//         </div>
//         <button onClick={toggleFullscreen} style={{
//           display: "flex", alignItems: "center", gap: 8, padding: "8px 18px", border: "1.5px solid #4b5563",
//           borderRadius: 8, background: "transparent", color: "#e5e7eb", fontWeight: 700, fontSize: 14, cursor: "pointer",
//         }}>
//           <span style={{ fontSize: 16 }}>{isFullscreen ? "✖" : "⛶"}</span>
//           {isFullscreen ? "Exit Full Screen" : "Full Screen"}
//         </button>
//         <button onClick={handleRefresh}
//           style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 18px", border: "1.5px solid #EAB308", borderRadius: 8, background: "transparent", color: "#EAB308", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
//           <span style={{ display: "inline-block", animation: refreshing ? "spin 0.6s linear infinite" : "none" }}>↻</span>
//           Refresh
//         </button>
//       </header> */}
//       <header style={{
//         background: "#111", color: "#fff", padding: "0 24px",
//         height: 56, display: "flex", alignItems: "center", justifyContent: "space-between",
//         position: "sticky", top: 0, zIndex: 100,
//       }}>
//         <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
//           <div style={{
//             width: 34, height: 34, background: "#EAB308", borderRadius: 8,
//             display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 18, color: "#111",
//           }}>K</div>

//           <span style={{ fontWeight: 700, fontSize: 18, letterSpacing: "-0.02em" }}>Job Cards</span>
//         </div>

//         <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
//           {/* FULL SCREEN BUTTON */}
//           <button onClick={toggleFullscreen} style={{
//             display: "flex", alignItems: "center", gap: 8, padding: "8px 18px", border: "1.5px solid #4b5563",
//             borderRadius: 8, background: "transparent", color: "#e5e7eb", fontWeight: 700, fontSize: 14, cursor: "pointer",
//           }}>
//             <span style={{ fontSize: 16 }}>{isFullscreen ? "✖" : "⛶"}</span>
//             {isFullscreen ? "Exit Full Screen" : "Full Screen"}
//           </button>

//           <button onClick={handleRefresh} style={{
//             display: "flex", alignItems: "center", gap: 8, padding: "8px 18px", border: "1.5px solid #EAB308",
//             borderRadius: 8, background: "transparent", color: "#EAB308", fontWeight: 700, fontSize: 14, cursor: "pointer",
//           }}>
//             <span style={{ display: "inline-block", animation: refreshing ? "spin 0.6s linear" : "none" }}>↻</span>
//             Refresh
//           </button>
//         </div>
//       </header>

//       <main style={{ padding: "28px 32px", maxWidth: 1400, margin: "0 auto" }}>

//         {loading && (
//           <div style={{ display: "flex", justifyContent: "center", padding: 80 }}>
//             <div style={{ textAlign: "center", color: "#6b7280" }}>
//               <div style={{ fontSize: 40, marginBottom: 12, animation: "spin 1s linear infinite", display: "inline-block" }}>↻</div>
//               <div style={{ fontWeight: 600, fontSize: 16 }}>Loading Work Orders…</div>
//             </div>
//           </div>
//         )}

//         {error && (
//           <div style={{ background: "#fef2f2", border: "1px solid #fecaca", borderRadius: 12, padding: "20px 24px", color: "#dc2626", fontWeight: 600, marginBottom: 20 }}>
//             ⚠ {error}
//           </div>
//         )}

//         {!loading && !error && (
//           <>
//             <div style={{ fontSize: 13, color: "#6b7280", fontWeight: 600, marginBottom: 20 }}>
//               Showing {woList.length} most recent work order{woList.length !== 1 ? "s" : ""}
//             </div>
//             {woList.map((wo, idx) => (
//               <WorkOrderSection
//                 key={wo.name}
//                 wo={wo}
//                 isLatest={idx === 0}
//                 defaultCollapsed={idx !== 0}
//               />
//             ))}
//             {woList.length === 0 && (
//               <div style={{ textAlign: "center", padding: 80, color: "#9ca3af", fontWeight: 600, fontSize: 16 }}>No work orders found</div>
//             )}
//           </>
//         )}
//       </main>

//       <style>{`
//         @keyframes pulse {
//           0%   { transform: scale(1);    opacity: 1;   box-shadow: 0 0 6px  rgba(250,204,21,0.7); }
//           50%  { transform: scale(1.35); opacity: 0.7; box-shadow: 0 0 18px rgba(250,204,21,1);   }
//           100% { transform: scale(1);    opacity: 1;   box-shadow: 0 0 6px  rgba(250,204,21,0.7); }
//         }
//         @keyframes spin { to { transform: rotate(360deg); } }
//         * { box-sizing: border-box; margin: 0; padding: 0; }
//         button:hover { filter: brightness(0.95); }
//         input:focus, textarea:focus {
//           border-color: #EAB308 !important;
//           box-shadow: 0 0 0 3px rgba(234,179,8,0.15);
//         }
//       `}</style>
//     </div>
//   );
// }


import * as React from "react";
const { useState, useEffect, useCallback, useRef } = React;

// ─── Frappe Helpers ────────────────────────────────────────────────────────────

function frappeCall(method, args = {}) {
  return new Promise((resolve, reject) => {
    if (typeof frappe === "undefined" || typeof frappe.call !== "function") {
      reject(new Error("Frappe is not available"));
      return;
    }
    frappe.call({
      method,
      args,
      freeze: false,
      callback: function (r) {
        if (r.exc) reject(r.exc);
        else resolve(r.message);
      },
      error: function (err) {
        console.error("Frappe Call Error:", err);
        reject(err);
      },
    });
  });
}

function waitForFrappe() {
  return new Promise((res) => {
    const check = () => {
      if (typeof frappe !== "undefined" && typeof frappe.call === "function") res();
      else setTimeout(check, 200);
    };
    check();
  });
}

function nowDatetime() {
  try {
    return frappe.datetime.now_datetime();
  } catch (_) {
    const now = new Date();
    const pad = (n) => String(n).padStart(2, "0");
    return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
  }
}

function inputToFrappe(dtLocal) {
  if (!dtLocal) return nowDatetime();
  return dtLocal.replace("T", " ") + (dtLocal.length === 16 ? ":00" : "");
}

// ─── Status Config ─────────────────────────────────────────────────────────────

const STATUS_CONFIG = {
  not_started: {
    label: "Not Started",
    dot: "#ef4444",
    bg: "#fef2f2",
    border: "#fecaca",
    text: "#dc2626",
  },
  in_progress: {
    label: "In Progress",
    dot: "#facc15",
    bg: "rgba(250,204,21,0.12)",
    border: "#facc15",
    text: "#b45309",
    glow: "0 0 10px rgba(250,204,21,0.6)",
  },
  paused: {
    label: "Paused",
    dot: "#6b7280",
    bg: "#f9fafb",
    border: "#e5e7eb",
    text: "#4b5563",
  },
  completed: {
    label: "Completed",
    dot: "#22c55e",
    bg: "#f0fdf4",
    border: "#bbf7d0",
    text: "#16a34a",
  },
};

function statusFromDoc(jc) {
  if (jc.status === "Completed") return "completed";
  if (jc.is_paused) return "paused";
  if (jc.status === "Work In Progress") return "in_progress";
  return "not_started";
}

// ─── StatusBadge ───────────────────────────────────────────────────────────────

function StatusBadge({ status }) {
  const cfg = STATUS_CONFIG[status] || STATUS_CONFIG.not_started;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "6px 14px",
        borderRadius: 8,
        fontSize: 13,
        fontWeight: 700,
        background: cfg.bg,
        border: `1px solid ${cfg.border}`,
        color: cfg.text,
        boxShadow: cfg.glow || "none",
        whiteSpace: "nowrap",
      }}
    >
      <span
        style={{
          width: 9,
          height: 9,
          borderRadius: "50%",
          background: cfg.dot,
          flexShrink: 0,
          boxShadow: cfg.glow || "none",
          animation: status === "in_progress" ? "pulse 1.2s infinite" : "none",
        }}
      />
      {cfg.label}
    </span>
  );
}

// ─── ErrorToast ────────────────────────────────────────────────────────────────

function ErrorToast({ message, onClose }) {
  useEffect(() => {
    const t = setTimeout(onClose, 6000);
    return () => clearTimeout(t);
  }, []);
  return (
    <div
      style={{
        position: "fixed",
        bottom: 24,
        right: 24,
        zIndex: 3000,
        background: "#fef2f2",
        border: "1px solid #fecaca",
        borderRadius: 10,
        padding: "14px 18px",
        maxWidth: 420,
        boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
        display: "flex",
        alignItems: "flex-start",
        gap: 12,
        fontFamily: "'DM Sans','Segoe UI',sans-serif",
        animation: "slideUp 0.25s ease",
      }}
    >
      <span style={{ fontSize: 18, flexShrink: 0 }}>⚠</span>
      <div style={{ flex: 1 }}>
        <div style={{ fontWeight: 700, fontSize: 14, color: "#dc2626", marginBottom: 4 }}>
          Action Failed
        </div>
        <div style={{ fontSize: 13, color: "#7f1d1d", wordBreak: "break-word" }}>{message}</div>
      </div>
      <button
        onClick={onClose}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "#9ca3af",
          fontSize: 18,
          flexShrink: 0,
        }}
      >
        ✕
      </button>
    </div>
  );
}

// ─── EmployeeModal ─────────────────────────────────────────────────────────────

function EmployeeModal({ card, company, onClose, onConfirm }) {
  const [employees, setEmployees] = useState([]);
  const [selected, setSelected] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [validationError, setValidationError] = useState(null);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const filters = [["status", "=", "Active"]];
        if (company) filters.push(["company", "=", company]);

        const list = await frappeCall("frappe.client.get_list", {
          doctype: "Employee",
          fields: ["name", "employee_name", "designation", "department"],
          filters,
          limit_page_length: 200,
          order_by: "employee_name asc",
        });
        setEmployees(Array.isArray(list) ? list : []);
      } catch (e) {
        setFetchError("Failed to load employees: " + (e.message || e));
      } finally {
        setLoading(false);
      }
    })();
  }, [company]);

  const isChecked = (name) => selected.some((e) => e.employee === name);

  const toggle = (emp) => {
    setValidationError(null);
    setSelected((prev) =>
      prev.find((e) => e.employee === emp.name)
        ? prev.filter((e) => e.employee !== emp.name)
        : [...prev, { employee: emp.name }]
    );
  };

  const handleConfirm = async () => {
    if (!selected.length) {
      setValidationError("Please select at least one employee.");
      return;
    }
    setSubmitting(true);
    try {
      await onConfirm(card, selected);
      // onConfirm closes modal on success
    } catch (_) {
      // error already shown via toast; keep modal open
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.5)",
        zIndex: 2000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'DM Sans','Segoe UI',sans-serif",
        backdropFilter: "blur(2px)",
      }}
      onClick={!submitting ? onClose : undefined}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#fff",
          borderRadius: 16,
          padding: "28px 28px 24px",
          width: 500,
          maxWidth: "94vw",
          boxShadow: "0 32px 80px rgba(0,0,0,0.22)",
          maxHeight: "88vh",
          display: "flex",
          flexDirection: "column",
          animation: "modalIn 0.2s ease",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: 22,
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                fontWeight: 800,
                fontSize: 19,
                color: "#111",
              }}
            >
              <span
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 8,
                  background: "#EAB308",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 16,
                }}
              >
                👷
              </span>
              Start Job Card
            </div>
            <div style={{ marginTop: 6, display: "flex", gap: 12 }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "3px 10px",
                  background: "#111",
                  borderRadius: 5,
                  fontSize: 12,
                  fontWeight: 700,
                  color: "#EAB308",
                  fontFamily: "monospace",
                }}
              >
                {card.name}
              </div>
              {card.operation && (
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "3px 10px",
                    background: "#f3f4f6",
                    borderRadius: 5,
                    fontSize: 12,
                    fontWeight: 600,
                    color: "#374151",
                  }}
                >
                  {card.operation}
                </div>
              )}
            </div>
          </div>
          <button
            onClick={!submitting ? onClose : undefined}
            style={{
              background: "none",
              border: "none",
              fontSize: 22,
              cursor: submitting ? "not-allowed" : "pointer",
              color: "#9ca3af",
              padding: 4,
            }}
          >
            ✕
          </button>
        </div>

        {/* Label */}
        <div
          style={{
            fontSize: 13,
            fontWeight: 700,
            color: "#374151",
            marginBottom: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span>
            Select Employees <span style={{ color: "#ef4444" }}>*</span>
          </span>
          {selected.length > 0 && (
            <span
              style={{
                padding: "2px 10px",
                background: "rgba(234,179,8,0.15)",
                border: "1px solid rgba(234,179,8,0.4)",
                borderRadius: 20,
                fontSize: 12,
                fontWeight: 700,
                color: "#92400e",
              }}
            >
              {selected.length} selected
            </span>
          )}
        </div>

        {/* Employee List */}
        <div
          style={{
            overflowY: "auto",
            flex: 1,
            paddingRight: 4,
            marginBottom: 14,
            display: "flex",
            flexDirection: "column",
            gap: 8,
            minHeight: 80,
          }}
        >
          {loading && (
            <div
              style={{ textAlign: "center", padding: "36px 0", color: "#6b7280" }}
            >
              <div
                style={{
                  fontSize: 26,
                  animation: "spin 0.8s linear infinite",
                  display: "inline-block",
                  marginBottom: 8,
                }}
              >
                ↻
              </div>
              <div style={{ fontWeight: 600, fontSize: 14 }}>Loading employees…</div>
            </div>
          )}

          {fetchError && !loading && (
            <div
              style={{
                padding: "14px 16px",
                background: "#fef2f2",
                border: "1px solid #fecaca",
                borderRadius: 8,
                color: "#dc2626",
                fontWeight: 600,
                fontSize: 13,
              }}
            >
              ⚠ {fetchError}
            </div>
          )}

          {!loading && !fetchError && employees.length === 0 && (
            <div
              style={{
                textAlign: "center",
                padding: "36px 0",
                color: "#9ca3af",
                fontWeight: 600,
              }}
            >
              No active employees found
            </div>
          )}

          {!loading &&
            employees.map((emp) => {
              const checked = isChecked(emp.name);
              return (
                <label
                  key={emp.name}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    padding: "12px 14px",
                    borderRadius: 10,
                    cursor: "pointer",
                    border: `2px solid ${checked ? "#EAB308" : "#e5e7eb"}`,
                    background: checked ? "rgba(234,179,8,0.07)" : "#fff",
                    transition: "all 0.12s",
                    userSelect: "none",
                  }}
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggle(emp)}
                    disabled={submitting}
                    style={{
                      width: 17,
                      height: 17,
                      accentColor: "#EAB308",
                      flexShrink: 0,
                      cursor: "pointer",
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <div
                      style={{ fontWeight: 700, fontSize: 14, color: "#111" }}
                    >
                      {emp.employee_name}
                    </div>
                    <div
                      style={{
                        fontSize: 12,
                        color: "#6b7280",
                        marginTop: 2,
                        display: "flex",
                        gap: 6,
                        flexWrap: "wrap",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "monospace",
                          fontWeight: 600,
                          color: "#374151",
                        }}
                      >
                        {emp.name}
                      </span>
                      {emp.designation && (
                        <>
                          <span style={{ color: "#d1d5db" }}>·</span>
                          <span>{emp.designation}</span>
                        </>
                      )}
                      {emp.department && (
                        <>
                          <span style={{ color: "#d1d5db" }}>·</span>
                          <span>{emp.department}</span>
                        </>
                      )}
                    </div>
                  </div>
                  {checked && (
                    <span
                      style={{
                        width: 24,
                        height: 24,
                        borderRadius: "50%",
                        background: "#EAB308",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 11,
                        fontWeight: 900,
                        color: "#000",
                        flexShrink: 0,
                      }}
                    >
                      ✓
                    </span>
                  )}
                </label>
              );
            })}
        </div>

        {validationError && (
          <div
            style={{
              color: "#dc2626",
              fontSize: 13,
              fontWeight: 600,
              marginBottom: 10,
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            ⚠ {validationError}
          </div>
        )}

        {/* Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: 10,
            borderTop: "1px solid #f3f4f6",
            paddingTop: 18,
          }}
        >
          <button
            onClick={!submitting ? onClose : undefined}
            disabled={submitting}
            style={{
              padding: "10px 22px",
              borderRadius: 8,
              background: "#f3f4f6",
              border: "1px solid #e5e7eb",
              color: "#374151",
              fontWeight: 600,
              cursor: submitting ? "not-allowed" : "pointer",
              fontSize: 14,
              opacity: submitting ? 0.6 : 1,
            }}
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            disabled={submitting || !selected.length || loading}
            style={{
              padding: "10px 26px",
              borderRadius: 8,
              border: "none",
              fontWeight: 700,
              fontSize: 14,
              background:
                submitting || !selected.length || loading ? "#fef08a" : "#EAB308",
              color: "#000",
              cursor:
                submitting || !selected.length || loading
                  ? "not-allowed"
                  : "pointer",
              display: "flex",
              alignItems: "center",
              gap: 8,
              transition: "background 0.15s",
            }}
          >
            {submitting ? (
              <>
                <span
                  style={{
                    display: "inline-block",
                    animation: "spin 0.7s linear infinite",
                  }}
                >
                  ⟳
                </span>{" "}
                Starting…
              </>
            ) : (
              "▶ Start Job"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── RemarksModal ──────────────────────────────────────────────────────────────

function RemarksModal({ jobCard, onClose, onSaveRemark }) {
  const [remark, setRemark] = useState("");
  const [savedRemarks, setSavedRemarks] = useState(jobCard.remarks || []);
  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    if (!remark.trim()) return;
    setSaving(true);
    const updated = [
      ...savedRemarks,
      {
        text: remark,
        time: new Date().toLocaleString([], {
          dateStyle: "short",
          timeStyle: "short",
        }),
      },
    ];
    setSavedRemarks(updated);
    setRemark("");
    onSaveRemark && onSaveRemark(jobCard.name, updated);
    setSaving(false);
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.45)",
        zIndex: 2000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'DM Sans','Segoe UI',sans-serif",
        backdropFilter: "blur(2px)",
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: 14,
          padding: "24px 28px",
          width: 520,
          maxWidth: "92vw",
          boxShadow: "0 24px 64px rgba(0,0,0,0.18)",
          maxHeight: "90vh",
          display: "flex",
          flexDirection: "column",
          animation: "modalIn 0.2s ease",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 22,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              fontWeight: 700,
              fontSize: 20,
              color: "#111",
            }}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
            Remarks
          </div>
          <button
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              fontSize: 22,
              cursor: "pointer",
              color: "#6b7280",
            }}
          >
            ✕
          </button>
        </div>

        <div style={{ display: "flex", gap: 16, marginBottom: 20, flexShrink: 0 }}>
          {[
            ["Job Card", jobCard.name],
            ["Operation", jobCard.operation || "—"],
          ].map(([l, v]) => (
            <div key={l} style={{ flex: 1 }}>
              <label
                style={{
                  display: "block",
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#374151",
                  marginBottom: 6,
                }}
              >
                {l}
              </label>
              <div
                style={{
                  background: "#f3f4f6",
                  border: "1px solid #e5e7eb",
                  borderRadius: 8,
                  padding: "10px 14px",
                  fontSize: 14,
                  color: "#111",
                  fontWeight: 500,
                }}
              >
                {v}
              </div>
            </div>
          ))}
        </div>

        <div style={{ overflowY: "auto", flex: 1, paddingRight: 4 }}>
          {savedRemarks.length > 0 && (
            <div style={{ marginBottom: 20 }}>
              <label
                style={{
                  display: "block",
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#374151",
                  marginBottom: 10,
                }}
              >
                Saved Remarks
              </label>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 10 }}
              >
                {savedRemarks.map((r, i) => (
                  <div
                    key={i}
                    style={{
                      background: "#f8fafc",
                      border: "1px solid #e2e8f0",
                      borderRadius: 8,
                      padding: "12px 14px",
                    }}
                  >
                    <div
                      style={{
                        fontSize: 14,
                        color: "#1e293b",
                        whiteSpace: "pre-wrap",
                        wordBreak: "break-word",
                      }}
                    >
                      {r.text}
                    </div>
                    <div
                      style={{
                        fontSize: 11,
                        color: "#64748b",
                        marginTop: 6,
                        fontWeight: 500,
                      }}
                    >
                      {r.time}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          <label
            style={{
              display: "block",
              fontSize: 13,
              fontWeight: 600,
              color: "#374151",
              marginBottom: 8,
            }}
          >
            Enter Remarks
          </label>
          <textarea
            value={remark}
            onChange={(e) => setRemark(e.target.value)}
            maxLength={500}
            placeholder="Enter remarks here..."
            style={{
              width: "100%",
              height: 100,
              border: "1px solid #e5e7eb",
              borderRadius: 8,
              padding: 14,
              fontSize: 14,
              outline: "none",
              resize: "none",
              background: "#f9fafb",
              fontFamily: "inherit",
              color: "#111",
              boxSizing: "border-box",
            }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              fontSize: 13,
              color: "#4b5563",
              fontWeight: 600,
              marginBottom: 12,
            }}
          >
            {remark.length}/500
          </div>
          <p style={{ fontSize: 13, color: "#4b5563", margin: 0 }}>
            Remarks can be added before completing the job card.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: 12,
            marginTop: "auto",
            paddingTop: 16,
            borderTop: "1px solid #f3f4f6",
          }}
        >
          <button
            onClick={onClose}
            style={{
              background: "#f3f4f6",
              color: "#374151",
              border: "1px solid #e5e7eb",
              borderRadius: 8,
              padding: "10px 24px",
              fontWeight: 600,
              cursor: "pointer",
              fontSize: 14,
            }}
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={!remark.trim() || saving}
            style={{
              background: remark.trim() && !saving ? "#EAB308" : "#fef08a",
              color: "#000",
              border: "none",
              borderRadius: 8,
              padding: "10px 20px",
              fontWeight: 700,
              cursor: remark.trim() && !saving ? "pointer" : "not-allowed",
              fontSize: 14,
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            {saving ? "⟳ Saving…" : "💬 Save Remarks"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── CompleteModal (last card only) ───────────────────────────────────────────

function CompleteModal({ card, onClose, onConfirm, loading }) {
  const [completedQty, setCompletedQty] = useState(card.for_quantity || 0);
  const [looseQty, setLooseQty] = useState(0);
  const now = new Date();
  const offset = now.getTimezoneOffset() * 60000;
  const [endTime, setEndTime] = useState(
    new Date(now - offset).toISOString().slice(0, 16)
  );

  const inp = {
    width: "100%",
    border: "1px solid #e5e7eb",
    borderRadius: 8,
    padding: "10px 14px",
    fontSize: 14,
    outline: "none",
    background: "#f3f4f6",
    color: "#111",
    boxSizing: "border-box",
    fontFamily: "inherit",
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.45)",
        zIndex: 2000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'DM Sans','Segoe UI',sans-serif",
        backdropFilter: "blur(2px)",
      }}
      onClick={!loading ? onClose : undefined}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: 14,
          padding: "24px 28px",
          width: 460,
          maxWidth: "92vw",
          boxShadow: "0 24px 64px rgba(0,0,0,0.18)",
          animation: "modalIn 0.2s ease",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          style={{
            fontWeight: 700,
            fontSize: 18,
            color: "#111",
            marginBottom: 4,
          }}
        >
          Complete — {card.operation || card.name}
        </div>
        <div
          style={{ fontSize: 13, color: "#6b7280", marginBottom: 22 }}
        >
          Last job card — confirm final quantities before submitting
        </div>

        <div style={{ marginBottom: 16 }}>
          <label
            style={{
              display: "block",
              fontSize: 13,
              fontWeight: 600,
              color: "#374151",
              marginBottom: 6,
            }}
          >
            Qty to Manufacture (Planned)
          </label>
          <input
            type="number"
            readOnly
            value={card.for_quantity}
            style={{ ...inp, background: "#f9fafb", color: "#6b7280" }}
          />
        </div>

        <div style={{ marginBottom: 16 }}>
          <label
            style={{
              display: "block",
              fontSize: 13,
              fontWeight: 600,
              color: "#374151",
              marginBottom: 6,
            }}
          >
            Completed Quantity <span style={{ color: "#ef4444" }}>*</span>
          </label>
          <input
            type="number"
            value={completedQty}
            onChange={(e) => setCompletedQty(+e.target.value)}
            style={inp}
          />
        </div>

        <div style={{ marginBottom: 16 }}>
          <label
            style={{
              display: "block",
              fontSize: 13,
              fontWeight: 600,
              color: "#374151",
              marginBottom: 6,
            }}
          >
            Loose Quantity (Nos)
          </label>
          <input
            type="number"
            value={looseQty}
            onChange={(e) => setLooseQty(+e.target.value)}
            style={inp}
          />
          <div style={{ fontSize: 12, color: "#6b7280", marginTop: 4 }}>
            Stored in custom_loose_quantity — converted to boxes via UOM factor
          </div>
        </div>

        <div style={{ marginBottom: 24 }}>
          <label
            style={{
              display: "block",
              fontSize: 13,
              fontWeight: 600,
              color: "#374151",
              marginBottom: 6,
            }}
          >
            End Time
          </label>
          <input
            type="datetime-local"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            style={{ ...inp, background: "#f9fafb" }}
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: 10,
            paddingTop: 16,
            borderTop: "1px solid #e5e7eb",
          }}
        >
          <button
            onClick={onClose}
            disabled={loading}
            style={{
              background: "transparent",
              color: "#6b7280",
              border: "none",
              borderRadius: 8,
              padding: "10px 16px",
              fontWeight: 600,
              cursor: loading ? "not-allowed" : "pointer",
              fontSize: 14,
            }}
          >
            Cancel
          </button>
          <button
            disabled={loading || completedQty <= 0}
            onClick={() => onConfirm(card, completedQty, looseQty, endTime)}
            style={{
              background:
                loading || completedQty <= 0 ? "#fef08a" : "#EAB308",
              color: "#000",
              border: "none",
              borderRadius: 8,
              padding: "10px 28px",
              fontWeight: 700,
              cursor:
                loading || completedQty <= 0 ? "not-allowed" : "pointer",
              fontSize: 14,
              opacity: loading ? 0.7 : 1,
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            {loading ? (
              <>
                <span
                  style={{
                    display: "inline-block",
                    animation: "spin 0.7s linear infinite",
                  }}
                >
                  ⟳
                </span>{" "}
                Saving…
              </>
            ) : (
              "✓ Complete"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── JobCardRow ────────────────────────────────────────────────────────────────

function JobCardRow({
  card,
  localStatus,
  idx,
  totalCards,
  onAction,
  onStartClick,
  onRemark,
  actionLoading,
}) {
  const status = localStatus || statusFromDoc(card);
  const isCompleted = status === "completed";
  const isInProgress = status === "in_progress";
  const isPaused = status === "paused";
  const hasRemarks = card.remarks && card.remarks.length > 0;
  const isLastCard = idx === totalCards - 1;
  const isLoading = actionLoading === card.name;

  // ── Elapsed timer ──
  const [elapsed, setElapsed] = useState(0);
  const [startedAt, setStartedAt] = useState(null);
  const timerRef = useRef(null);
  const pausedCarryRef = useRef(0);

  useEffect(() => {
    if (isInProgress) {
      if (!startedAt) setStartedAt(new Date());
      const base = pausedCarryRef.current;
      const t0 = Date.now();
      timerRef.current = setInterval(() => {
        setElapsed(base + Math.floor((Date.now() - t0) / 1000));
      }, 1000);
    } else {
      clearInterval(timerRef.current);
      if (isPaused) pausedCarryRef.current = elapsed;
      if (isCompleted) pausedCarryRef.current = 0;
    }
    return () => clearInterval(timerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  const fmt2 = (n) => String(Math.floor(n)).padStart(2, "0");
  const fmtElapsed = (s) =>
    `${fmt2(s / 3600)}:${fmt2((s % 3600) / 60)}:${fmt2(s % 60)}`;

  const btnBase = {
    display: "flex",
    alignItems: "center",
    gap: 7,
    padding: "9px 16px",
    borderRadius: 8,
    fontWeight: 700,
    fontSize: 13,
    cursor: "pointer",
    whiteSpace: "nowrap",
    border: "none",
    transition: "all 0.15s",
    fontFamily: "inherit",
  };

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "52px 160px 1fr 160px auto",
          alignItems: "center",
          gap: 14,
          padding: "20px 28px",
          borderBottom:
            isInProgress || isPaused ? "none" : "1px solid #f3f4f6",
          background: "#fff",
          transition: "background 0.15s",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.background = "#fafafa")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.background = "#fff")
        }
      >
        {/* Index */}
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: 10,
            background: "#111",
            color: "#EAB308",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 800,
            fontSize: 15,
            flexShrink: 0,
          }}
        >
          {String(idx + 1).padStart(2, "0")}
        </div>

        {/* Job Card ID */}
        <div
          style={{
            color: "#6b7280",
            fontSize: 12,
            fontWeight: 600,
            fontFamily: "monospace",
            wordBreak: "break-all",
          }}
        >
          {card.name}
        </div>

        {/* Operation */}
        <div>
          <div style={{ fontWeight: 700, fontSize: 15, color: "#111" }}>
            {card.operation || "—"}
          </div>
          <div style={{ fontSize: 12, color: "#9ca3af", marginTop: 3 }}>
            {card.workstation || ""}
          </div>
          {isLastCard && (
            <span
              style={{
                display: "inline-block",
                marginTop: 4,
                fontSize: 10,
                fontWeight: 800,
                color: "#EAB308",
                background: "rgba(234,179,8,0.1)",
                border: "1px solid rgba(234,179,8,0.3)",
                borderRadius: 4,
                padding: "2px 8px",
                letterSpacing: "0.04em",
              }}
            >
              LAST CARD
            </span>
          )}
        </div>

        {/* Status Badge */}
        <StatusBadge status={status} />

        {/* Actions */}
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          {isLoading ? (
            <span
              style={{
                fontSize: 13,
                color: "#6b7280",
                fontWeight: 600,
                padding: "9px 16px",
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                background: "#f9fafb",
                borderRadius: 8,
                border: "1px solid #e5e7eb",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  animation: "spin 0.8s linear infinite",
                }}
              >
                ⟳
              </span>{" "}
              Processing…
            </span>
          ) : isCompleted ? (
            // Completed — no action buttons
            <span
              style={{
                padding: "7px 14px",
                borderRadius: 8,
                background: "#f0fdf4",
                border: "1px solid #bbf7d0",
                color: "#16a34a",
                fontWeight: 700,
                fontSize: 13,
              }}
            >
              ✓ Done
            </span>
          ) : isInProgress ? (
            <>
              <button
                onClick={() => onAction(card, "pause")}
                style={{
                  ...btnBase,
                  border: "1px solid #e5e7eb",
                  background: "#fff",
                  color: "#374151",
                }}
              >
                ⏸ Pause
              </button>
              <button
                onClick={() => onAction(card, "complete")}
                style={{
                  ...btnBase,
                  border: "1px solid #bbf7d0",
                  background: "#f0fdf4",
                  color: "#16a34a",
                }}
              >
                ✓ Complete
              </button>
            </>
          ) : isPaused ? (
            // PAUSED — ONLY Resume button shown
            <button
              onClick={() => onAction(card, "resume")}
              style={{ ...btnBase, background: "#EAB308", color: "#000" }}
            >
              ▶ Resume
            </button>
          ) : (
            // Not Started — Start button opens EmployeeModal
            <button
              onClick={() => onStartClick(card)}
              style={{ ...btnBase, background: "#EAB308", color: "#000" }}
            >
              ▶ Start
            </button>
          )}

          <button
            onClick={() => onRemark(card)}
            style={{
              ...btnBase,
              border: "1px solid #e5e7eb",
              background: "#fff",
              color: "#374151",
            }}
          >
            💬 {isCompleted || hasRemarks ? "View Remarks" : "Remarks"}
          </button>
        </div>
      </div>

      {/* Elapsed bar — shown when in_progress or paused */}
      {(isInProgress || isPaused) && (
        <div
          style={{
            padding: "12px 28px",
            borderBottom: "1px solid #f3f4f6",
            background: isPaused
              ? "#f9fafb"
              : "rgba(250,204,21,0.05)",
            borderTop: isPaused
              ? "1px solid #e5e7eb"
              : "1px solid rgba(250,204,21,0.18)",
            display: "flex",
            alignItems: "center",
            gap: 20,
            flexWrap: "wrap",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span
              style={{
                fontSize: 10,
                fontWeight: 700,
                color: "#9ca3af",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}
            >
              Elapsed
            </span>
            <span
              style={{
                fontSize: 22,
                fontWeight: 800,
                color: "#111",
                fontFamily: "monospace",
                letterSpacing: "0.06em",
              }}
            >
              {fmtElapsed(elapsed)}
            </span>
            {isInProgress && (
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#facc15",
                  display: "inline-block",
                  animation: "pulse 1.2s infinite",
                }}
              />
            )}
            {isPaused && (
              <span
                style={{
                  padding: "3px 10px",
                  background: "#f3f4f6",
                  border: "1px solid #e5e7eb",
                  borderRadius: 6,
                  fontSize: 12,
                  fontWeight: 700,
                  color: "#6b7280",
                }}
              >
                ⏸ Paused
              </span>
            )}
          </div>

          <div style={{ width: 1, height: 24, background: "#e5e7eb" }} />

          {startedAt && (
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  color: "#9ca3af",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}
              >
                Started
              </span>
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#374151",
                }}
              >
                {startedAt.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                })}
              </span>
            </div>
          )}

          <div style={{ width: 1, height: 24, background: "#e5e7eb" }} />

          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span
              style={{
                fontSize: 10,
                fontWeight: 700,
                color: "#9ca3af",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}
            >
              For Qty
            </span>
            <span
              style={{ fontSize: 13, fontWeight: 700, color: "#111" }}
            >
              {card.for_quantity}
            </span>
          </div>

          {card.workstation && (
            <>
              <div
                style={{ width: 1, height: 24, background: "#e5e7eb" }}
              />
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    color: "#9ca3af",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  Workstation
                </span>
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#374151",
                  }}
                >
                  {card.workstation}
                </span>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}

// ─── WorkOrderSection ──────────────────────────────────────────────────────────

function WorkOrderSection({ wo, isLatest, defaultCollapsed }) {
  const [collapsed, setCollapsed] = useState(defaultCollapsed);
  const [woStarted, setWoStarted] = useState(
    wo.status === "In Process" || wo.status === "Completed"
  );
  const [woStartLoading, setWoStartLoading] = useState(false);

  const [jobCards, setJobCards] = useState([]);
  const [jcLoading, setJcLoading] = useState(false);
  const [jcError, setJcError] = useState(null);

  const [localStatuses, setLocalStatuses] = useState({});
  const [localRemarks, setLocalRemarks] = useState({});

  // Modals
  const [startCard, setStartCard] = useState(null);    // EmployeeModal trigger
  const [remarkCard, setRemarkCard] = useState(null);
  const [completeCard, setCompleteCard] = useState(null);

  const [actionLoading, setActionLoading] = useState(null);
  const [modalLoading, setModalLoading] = useState(false);
  const [toastError, setToastError] = useState(null);

  // ── Load job cards ────────────────────────────────────────────────────────

  const loadJobCards = useCallback(async () => {
    setJcLoading(true);
    setJcError(null);
    try {
      const list = await frappeCall("frappe.client.get_list", {
        doctype: "Job Card",
        filters: [["work_order", "=", wo.name]],
        fields: [
          "name",
          "work_order",
          "operation",
          "workstation",
          "for_quantity",
          "total_completed_qty",
          "status",
          "is_paused",
          "docstatus",
          "sequence_id",
          "remarks",
          "production_item",
        ],
        limit_page_length: 100,
        order_by: "sequence_id asc",
      });
      setJobCards(Array.isArray(list) ? list : []);
    } catch (e) {
      setJcError(e.message || "Failed to load Job Cards");
    } finally {
      setJcLoading(false);
    }
  }, [wo.name]);

  useEffect(() => {
    if (!collapsed) loadJobCards();
  }, [collapsed, loadJobCards]);

  // ── Start Work Order ──────────────────────────────────────────────────────

  const handleStartWO = async () => {
    setWoStartLoading(true);
    try {
      await frappeCall("frappe.client.set_value", {
        doctype: "Work Order",
        name: wo.name,
        fieldname: "status",
        value: "In Process",
      });
      setWoStarted(true);
    } catch (e) {
      setToastError(e.message || "Failed to start Work Order");
    } finally {
      setWoStartLoading(false);
    }
  };

  // ── Confirm Start (from EmployeeModal) ────────────────────────────────────
  // Called after user selects employees and clicks "Start Job"
  // State only updates on SUCCESS — throws on failure so modal stays open

  const handleConfirmStart = async (card, employees) => {
    const id = card.name;
    try {
      await frappeCall(
        "erpnext.manufacturing.doctype.job_card.job_card.make_time_log",
        {
          kwargs: {
            job_card_id: id,
            start_time: nowDatetime(),
            employees, // [{ employee: "HR-EMP-00004" }, ...]
          },
        }
      );
      // ✅ Only flip state after success
      setLocalStatuses((p) => ({ ...p, [id]: "in_progress" }));
      setStartCard(null); // close modal
    } catch (e) {
      setToastError(e.message || "Failed to start job card");
      throw e; // re-throw so EmployeeModal clears its submitting state
    }
  };

  // ── Pause / Resume / Complete ─────────────────────────────────────────────

  const handleAction = async (card, action) => {
    const id = card.name;
    const isLastCard =
      jobCards.length > 0 &&
      jobCards[jobCards.length - 1].name === id;

    // Last card complete → show CompleteModal
    // if (action === "complete" && isLastCard) {
    //   setCompleteCard(card);
    //   return;
    // }

    setActionLoading(id);
    try {
      if (action === "pause") {
        // Calls Job Card controller's pause_job method
        // await frappeCall("frappe.client.run_doc_method", {
        //   docs: { doctype: "Job Card", name: id },
        //   method: "pause_job",
        //   args: { end_time: nowDatetime() },
        // });
        await frappeCall(
          "erpnext.manufacturing.doctype.job_card.job_card.pause_job_card",
          {
            job_card: id,
            end_time: frappe.datetime.now_datetime(),
          }
        );

        setLocalStatuses((p) => ({
          ...p,
          [id]: "paused",
        }));

        frappe.show_alert({
          message: "Job Paused",
          indicator: "orange",
        });
        // ✅ Only update after success
        // setLocalStatuses((p) => ({ ...p, [id]: "paused" }));

      } else if (action === "resume") {
        // Calls the whitelisted resume_job_handler in job_card.py
        // await frappeCall(
        //   "erpnext.manufacturing.doctype.job_card.job_card.resume_job_handler",
        //   { job_card: id, start_time: nowDatetime() }
        // );
        await frappeCall(
          "erpnext.manufacturing.doctype.job_card.job_card.resume_job_card",
          {
            job_card: id,
            start_time: frappe.datetime.now_datetime(),
          }
        );
        // ✅ Only update after success
        setLocalStatuses((p) => ({ ...p, [id]: "in_progress" }));

      }
      //  else if (action === "complete") {
      //   // Non-last card — auto-complete with full planned quantity
      //   // await frappeCall("frappe.client.run_doc_method", {
      //   //   docs: { doctype: "Job Card", name: id },
      //   //   method: "complete_job_card",
      //   //   args: {
      //   //     qty: card.for_quantity,
      //   //     for_quantity: card.for_quantity,
      //   //     end_time: nowDatetime(),
      //   //     loose_qty: 0,
      //   //     process_loss_qty: 0,
      //   //     auto_submit: 1,
      //   //   },
      //   // });

      //   await frappeCall(
      //     "erpnext.manufacturing.doctype.job_card.job_card.complete_job_card_api",
      //     {
      //       job_card: id,
      //       qty: card.for_quantity,
      //       for_quantity: card.for_quantity,
      //       end_time: frappe.datetime.now_datetime(),
      //       loose_qty: 0,
      //       process_loss_qty: 0,
      //     }
      //   );
      //   // ✅ Only update after success
      //   setLocalStatuses((p) => ({ ...p, [id]: "completed" }));
      // }
      else if (action === "complete") {

        // frappe.confirm(
        //   `This will automatically complete and submit the Job Card for the full quantity of ${card.for_quantity}. Do you want to proceed?`,

        //   async () => {

        //     try {
        //       setActionLoading(id);

        //       let sub_operation = "";

        //       if (card.sub_operations && card.sub_operations.length) {

        //         let pending_ops = card.sub_operations.filter(
        //           (d) => d.status !== "Complete"
        //         );

        //         if (pending_ops.length) {
        //           sub_operation = pending_ops[0].sub_operation;
        //         }
        //       }

        //       await frappeCall(
        //         "erpnext.manufacturing.doctype.job_card.job_card.complete_job_card",
        //         {
        //           job_card_id: id,

        //           qty: card.for_quantity,

        //           for_quantity: card.for_quantity,

        //           end_time: frappe.datetime.now_datetime(),

        //           sub_operation: sub_operation,

        //           loose_qty: 0,

        //           process_loss_qty: 0,

        //           auto_submit: 1,
        //         }
        //       );

        //       frappe.show_alert({
        //         message: "Job Card Completed",
        //         indicator: "green",
        //       });

        //       setLocalStatuses((p) => ({
        //         ...p,
        //         [id]: "completed",
        //       }));

        //       loadJobCards();

        //     } catch (err) {

        //       console.error(err);

        //       frappe.msgprint({
        //         title: "Completion Failed",
        //         message: String(err),
        //         indicator: "red",
        //       });

        //     } finally {

        //       setActionLoading(null);

        //     }
        //   },

        //   () => {

        //     frappe.show_alert({
        //       message: "Cancelled",
        //       indicator: "orange",
        //     });

        //   }
        // );

        if (!isLastCard) {

          setActionLoading(id);

          try {
            console.log("payload:",{
              job_card: id,
              qty: card.for_quantity,
              for_quantity: card.for_quantity,
              end_time: nowDatetime(),
              loose_qty: 0,
              process_loss_qty: 0,
              auto_submit: 1,
            })
            await frappeCall(
              "erpnext.manufacturing.doctype.job_card.job_card.complete_job_card_api",
              {
                job_card: id,
                qty: card.for_quantity,
                for_quantity: card.for_quantity,
                end_time: nowDatetime(),
                loose_qty: 0,
                process_loss_qty: 0,
                auto_submit: 1,
              }
            );

            frappe.show_alert({
              message: "Job Card Completed",
              indicator: "green",
            });

            setLocalStatuses((p) => ({
              ...p,
              [id]: "completed",
            }));

            await loadJobCards();

          } catch (err) {

            frappe.msgprint({
              title: "Completion Failed",
              message: String(err),
              indicator: "red",
            });

          } finally {
            setActionLoading(null);
          }

          return;
        }

        // LAST CARD ONLY
        setCompleteCard(card);
        return;
      }
    } catch (e) {
      console.error(`[${action}] failed for ${id}:`, e);
      setToastError(e.message || `Failed to ${action} job card`);
      // ❌ No fallback state change — state stays as-is on failure
    } finally {
      setActionLoading(null);
    }
  };

  // ── Complete last card (from CompleteModal) ───────────────────────────────

  // const handleConfirmComplete = async (card, completedQty, looseQty, endTime) => {
  //   setModalLoading(true);
  //   try {
  //     await frappeCall("frappe.client.run_doc_method", {
  //       docs: { doctype: "Job Card", name: card.name },
  //       method: "complete_job_card",
  //       args: {
  //         qty: completedQty,
  //         for_quantity: card.for_quantity,
  //         end_time: inputToFrappe(endTime),
  //         loose_qty: looseQty,
  //         process_loss_qty: 0,
  //         auto_submit: 1,
  //       },
  //     });
  //     // ✅ Only update after success
  //     setLocalStatuses((p) => ({ ...p, [card.name]: "completed" }));
  //     setCompleteCard(null);
  //     await loadJobCards();
  //   } catch (e) {
  //     console.error("Complete (last card) failed:", e);
  //     setToastError(e.message || "Failed to complete job card");
  //   } finally {
  //     setModalLoading(false);
  //   }
  // };

  //   const handleConfirmComplete = async (
  //   card,
  //   completedQty,
  //   looseQty,
  //   endTime
  // ) => {

  //   setModalLoading(true);

  //   try {

  //     const processLossQty =
  //       Number(card.for_quantity || 0) -
  //       Number(completedQty || 0);

  //     await frappeCall(
  //       "erpnext.manufacturing.doctype.job_card.job_card.complete_job_card_api",
  //       {
  //         job_card: card.name,
  //         qty: completedQty,
  //         for_quantity: card.for_quantity,
  //         end_time: inputToFrappe(endTime),
  //         loose_qty: looseQty || 0,
  //         process_loss_qty:
  //           processLossQty > 0 ? processLossQty : 0,
  //         auto_submit: 1,
  //       }
  //     );

  //     frappe.show_alert({
  //       message: "Job Card Completed",
  //       indicator: "green",
  //     });

  //     // update local state only after success
  //     setLocalStatuses((p) => ({
  //       ...p,
  //       [card.name]: "completed",
  //     }));

  //     setCompleteCard(null);

  //     await loadJobCards();

  //   } catch (e) {

  //     console.error("Complete (last card) failed:", e);

  //     frappe.msgprint({
  //       title: "Completion Failed",
  //       message: e.message || "Failed to complete job card",
  //       indicator: "red",
  //     });

  //   } finally {

  //     setModalLoading(false);

  //   }
  // };

  const handleConfirmComplete = async (
    card,
    completedQty,
    looseQty,
    endTime
  ) => {

    setModalLoading(true);

    try {

      const qty = Number(completedQty || 0);
      const loose = Number(looseQty || 0);

      const processLossQty =
        Number(card.for_quantity || 0) - qty;

      await frappeCall(
        "erpnext.manufacturing.doctype.job_card.job_card.complete_job_card_api",
        {
          job_card: card.name,

          qty: qty,

          for_quantity: Number(card.for_quantity || 0),

          end_time: frappe.datetime.now_datetime(),

          loose_qty: loose,

          process_loss_qty:
            processLossQty > 0
              ? Number(processLossQty)
              : 0,

          auto_submit: 1,
        }
      );

      frappe.show_alert({
        message: "Job Card Completed",
        indicator: "green",
      });

      setLocalStatuses((p) => ({
        ...p,
        [card.name]: "completed",
      }));

      setCompleteCard(null);

      await loadJobCards();

    } catch (e) {

      console.error("Complete (last card) failed:", e);

      frappe.msgprint({
        title: "Completion Failed",
        message: e.message || "Failed to complete job card",
        indicator: "red",
      });

    } finally {

      setModalLoading(false);

    }
  };

  const handleSaveRemark = (id, updatedRemarks) => {
    setLocalRemarks((p) => ({ ...p, [id]: updatedRemarks }));
  };

  // ── Counts ────────────────────────────────────────────────────────────────

  const counts = jobCards.reduce(
    (acc, j) => {
      const s = localStatuses[j.name] || statusFromDoc(j);
      acc[s] = (acc[s] || 0) + 1;
      return acc;
    },
    { not_started: 0, in_progress: 0, paused: 0, completed: 0 }
  );

  const pct =
    wo.qty > 0
      ? Math.round(((wo.produced_qty || 0) / wo.qty) * 100)
      : 0;
  const statusColor =
    wo.status === "Completed"
      ? "#22c55e"
      : wo.status === "In Process"
        ? "#EAB308"
        : "#6b7280";

  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e5e7eb",
        borderRadius: 14,
        overflow: "hidden",
        boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
        marginBottom: 20,
      }}
    >
      {/* Work Order Header */}
      <div
        style={{
          padding: "24px 28px",
          borderBottom: collapsed ? "none" : "1px solid #f3f4f6",
        }}
      >
        <div
          style={{
            fontSize: 11,
            fontWeight: 700,
            color: "#9ca3af",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            marginBottom: 10,
          }}
        >
          Work Order
          {isLatest && (
            <span
              style={{
                marginLeft: 8,
                background: "#EAB308",
                color: "#000",
                borderRadius: 4,
                padding: "2px 8px",
                fontSize: 10,
              }}
            >
              LATEST
            </span>
          )}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div
              style={{
                width: 48,
                height: 48,
                background: "#111",
                borderRadius: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 22,
              }}
            >
              📋
            </div>
            <div>
              <div
                style={{
                  fontWeight: 800,
                  fontSize: 22,
                  color: "#111",
                  letterSpacing: "-0.02em",
                }}
              >
                {wo.name}
              </div>
              <span
                style={{
                  display: "inline-block",
                  marginTop: 4,
                  padding: "3px 12px",
                  background: `${statusColor}22`,
                  border: `1px solid ${statusColor}44`,
                  borderRadius: 20,
                  fontSize: 12,
                  fontWeight: 700,
                  color: statusColor,
                }}
              >
                {wo.status}
              </span>
            </div>
          </div>

          <div
            style={{
              width: 1,
              height: 48,
              background: "#f3f4f6",
              marginLeft: 8,
            }}
          />

          {[
            ["Product", wo.production_item],
            ["Item", wo.item_name || "—"],
            ["Quantity", `${wo.qty} ${wo.stock_uom || ""}`],
            ["Produced", `${wo.produced_qty || 0}`],
            ["Planned Start", wo.planned_start_date || "—"],
          ].map(([l, v]) => (
            <div key={l} style={{ minWidth: 90 }}>
              <div
                style={{
                  fontSize: 11,
                  color: "#9ca3af",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                }}
              >
                {l}
              </div>
              <div
                style={{
                  fontWeight: 700,
                  fontSize: 14,
                  color: "#111",
                  marginTop: 2,
                }}
              >
                {v}
              </div>
            </div>
          ))}

          <div style={{ flex: 1, minWidth: 120 }}>
            <div
              style={{
                height: 6,
                background: "#f3f4f6",
                borderRadius: 4,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: `${pct}%`,
                  background: "#EAB308",
                  borderRadius: 4,
                  transition: "width 0.4s",
                }}
              />
            </div>
            <div
              style={{
                fontSize: 12,
                color: "#6b7280",
                marginTop: 4,
                fontWeight: 600,
              }}
            >
              {pct}% complete
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: 10,
              alignItems: "center",
              marginLeft: "auto",
            }}
          >
            {!woStarted && (
              <button
                onClick={handleStartWO}
                disabled={woStartLoading}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "10px 20px",
                  borderRadius: 8,
                  background: "#EAB308",
                  color: "#000",
                  border: "none",
                  fontWeight: 700,
                  fontSize: 14,
                  cursor: woStartLoading ? "not-allowed" : "pointer",
                  opacity: woStartLoading ? 0.7 : 1,
                  whiteSpace: "nowrap",
                  fontFamily: "inherit",
                }}
              >
                {woStartLoading ? (
                  <>
                    <span
                      style={{
                        display: "inline-block",
                        animation: "spin 0.8s linear infinite",
                      }}
                    >
                      ⟳
                    </span>{" "}
                    Starting…
                  </>
                ) : (
                  "▶ Start Work Order"
                )}
              </button>
            )}
            {woStarted && wo.status !== "Completed" && (
              <span
                style={{
                  padding: "8px 16px",
                  borderRadius: 8,
                  background: "rgba(34,197,94,0.1)",
                  border: "1px solid #bbf7d0",
                  color: "#16a34a",
                  fontWeight: 700,
                  fontSize: 13,
                }}
              >
                ✓ WO Started
              </span>
            )}
            <button
              onClick={() => setCollapsed((c) => !c)}
              style={{
                width: 36,
                height: 36,
                borderRadius: 8,
                border: "1px solid #e5e7eb",
                background: "#fff",
                cursor: "pointer",
                fontSize: 14,
                color: "#6b7280",
                fontFamily: "inherit",
              }}
            >
              {collapsed ? "▼" : "▲"}
            </button>
          </div>
        </div>
      </div>

      {/* Job Cards */}
      {!collapsed && (
        <>
          {/* Sub-header with counts */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "14px 28px",
              borderBottom: "1px solid #f3f4f6",
              background: "#fafafa",
            }}
          >
            <div
              style={{
                fontWeight: 800,
                fontSize: 13,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "#374151",
              }}
            >
              Job Cards {jcLoading ? "…" : `(${jobCards.length})`}
            </div>
            <div style={{ display: "flex", gap: 18 }}>
              {[
                ["not_started", "#ef4444"],
                ["in_progress", "#f59e0b"],
                ["paused", "#6b7280"],
                ["completed", "#22c55e"],
              ].map(([s, dot]) => (
                <div
                  key={s}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: 13,
                    color: "#374151",
                  }}
                >
                  <span
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: dot,
                      display: "inline-block",
                    }}
                  />
                  <span style={{ fontWeight: 600 }}>
                    {STATUS_CONFIG[s].label}:
                  </span>
                  <span style={{ fontWeight: 800 }}>
                    {counts[s] || 0}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Loading */}
          {jcLoading && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                padding: 48,
              }}
            >
              <div
                style={{ textAlign: "center", color: "#6b7280" }}
              >
                <div
                  style={{
                    fontSize: 28,
                    marginBottom: 10,
                    animation: "spin 1s linear infinite",
                    display: "inline-block",
                  }}
                >
                  ↻
                </div>
                <div style={{ fontWeight: 600 }}>Loading Job Cards…</div>
              </div>
            </div>
          )}

          {/* Error */}
          {jcError && (
            <div style={{ padding: "20px 28px" }}>
              <div
                style={{
                  background: "#fef2f2",
                  border: "1px solid #fecaca",
                  borderRadius: 12,
                  padding: "16px 20px",
                  color: "#dc2626",
                  fontWeight: 600,
                }}
              >
                ⚠ {jcError}
              </div>
            </div>
          )}

          {/* Table */}
          {!jcLoading && !jcError && jobCards.length > 0 && (
            <>
              {/* Column headers */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "52px 160px 1fr 160px auto",
                  gap: 14,
                  padding: "14px 28px",
                  background: "#f9fafb",
                  borderBottom: "1px solid #f3f4f6",
                }}
              >
                {["#", "Job Card ID", "Operation", "Status", "Actions"].map(
                  (h) => (
                    <div
                      key={h}
                      style={{
                        fontSize: 11,
                        fontWeight: 700,
                        color: "#9ca3af",
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                      }}
                    >
                      {h}
                    </div>
                  )
                )}
              </div>

              {jobCards.map((card, idx) => (
                <JobCardRow
                  key={card.name}
                  card={{
                    ...card,
                    remarks:
                      localRemarks[card.name] ||
                      (card.remarks
                        ? [{ text: card.remarks, time: "" }]
                        : []),
                  }}
                  localStatus={localStatuses[card.name]}
                  idx={idx}
                  totalCards={jobCards.length}
                  onAction={handleAction}
                  onStartClick={setStartCard}   // opens EmployeeModal
                  onRemark={setRemarkCard}
                  actionLoading={actionLoading}
                />
              ))}
            </>
          )}

          {!jcLoading && !jcError && jobCards.length === 0 && (
            <div
              style={{
                textAlign: "center",
                padding: 48,
                color: "#9ca3af",
                fontWeight: 600,
              }}
            >
              No job cards found for this work order.
            </div>
          )}
        </>
      )}

      {/* ── Modals ── */}

      {/* Employee select modal — triggered on ▶ Start */}
      {startCard && (
        <EmployeeModal
          card={startCard}
          // company={wo.company}
          onClose={() => setStartCard(null)}
          onConfirm={handleConfirmStart}
        />
      )}

      {/* Remarks modal */}
      {remarkCard && (
        <RemarksModal
          jobCard={{
            ...remarkCard,
            remarks:
              localRemarks[remarkCard.name] ||
              (remarkCard.remarks
                ? [{ text: remarkCard.remarks, time: "" }]
                : []),
          }}
          onClose={() => setRemarkCard(null)}
          onSaveRemark={handleSaveRemark}
        />
      )}

      {/* Complete modal — last card only */}
      {completeCard && (
        <CompleteModal
          card={completeCard}
          loading={modalLoading}
          onClose={() => !modalLoading && setCompleteCard(null)}
          onConfirm={handleConfirmComplete}
        />
      )}

      {/* Error toast */}
      {toastError && (
        <ErrorToast
          message={toastError}
          onClose={() => setToastError(null)}
        />
      )}
    </div>
  );
}

// ─── WorkOrderManufacturing (root) ─────────────────────────────────────────────

export function WorkOrderManufacturing() {
  const [woList, setWoList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleFsChange = () =>
      setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", handleFsChange);
    return () =>
      document.removeEventListener("fullscreenchange", handleFsChange);
  }, []);

  const loadWorkOrders = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      await waitForFrappe();
      const list = await frappeCall("frappe.client.get_list", {
        doctype: "Work Order",
        fields: [
          "name",
          "production_item",
          "item_name",
          "qty",
          "produced_qty",
          "status",
          "planned_start_date",
          "stock_uom",
          "company",
        ],
        limit_page_length: 200,
        order_by: "modified desc",
      });
      const all = Array.isArray(list) ? list : [];
      setWoList(all.slice(0, 2));
    } catch (e) {
      setError(e.message || "Failed to load Work Orders");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadWorkOrders();
  }, [loadWorkOrders]);

  const handleRefresh = async () => {
    setRefreshing(true);
    await loadWorkOrders();
    setTimeout(() => setRefreshing(false), 600);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(console.error);
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f3f4f6",
        fontFamily: "'DM Sans','Segoe UI',sans-serif",
      }}
    >
      {/* Header */}
      <header
        style={{
          background: "#111",
          color: "#fff",
          padding: "0 24px",
          height: 56,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              width: 34,
              height: 34,
              background: "#EAB308",
              borderRadius: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 900,
              fontSize: 18,
              color: "#111",
            }}
          >
            K
          </div>
          <span
            style={{
              fontWeight: 700,
              fontSize: 18,
              letterSpacing: "-0.02em",
            }}
          >
            Job Cards
          </span>
        </div>

        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <button
            onClick={toggleFullscreen}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 18px",
              border: "1.5px solid #4b5563",
              borderRadius: 8,
              background: "transparent",
              color: "#e5e7eb",
              fontWeight: 700,
              fontSize: 14,
              cursor: "pointer",
              fontFamily: "inherit",
            }}
          >
            <span style={{ fontSize: 16 }}>
              {isFullscreen ? "✖" : "⛶"}
            </span>
            {isFullscreen ? "Exit Full Screen" : "Full Screen"}
          </button>

          <button
            onClick={handleRefresh}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 18px",
              border: "1.5px solid #EAB308",
              borderRadius: 8,
              background: "transparent",
              color: "#EAB308",
              fontWeight: 700,
              fontSize: 14,
              cursor: "pointer",
              fontFamily: "inherit",
            }}
          >
            <span
              style={{
                display: "inline-block",
                animation: refreshing ? "spin 0.6s linear infinite" : "none",
              }}
            >
              ↻
            </span>
            Refresh
          </button>
        </div>
      </header>

      {/* Main */}
      <main
        style={{
          padding: "28px 32px",
          maxWidth: 1400,
          margin: "0 auto",
        }}
      >
        {loading && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: 80,
            }}
          >
            <div
              style={{ textAlign: "center", color: "#6b7280" }}
            >
              <div
                style={{
                  fontSize: 40,
                  marginBottom: 12,
                  animation: "spin 1s linear infinite",
                  display: "inline-block",
                }}
              >
                ↻
              </div>
              <div style={{ fontWeight: 600, fontSize: 16 }}>
                Loading Work Orders…
              </div>
            </div>
          </div>
        )}

        {error && (
          <div
            style={{
              background: "#fef2f2",
              border: "1px solid #fecaca",
              borderRadius: 12,
              padding: "20px 24px",
              color: "#dc2626",
              fontWeight: 600,
              marginBottom: 20,
            }}
          >
            ⚠ {error}
          </div>
        )}

        {!loading && !error && (
          <>
            <div
              style={{
                fontSize: 13,
                color: "#6b7280",
                fontWeight: 600,
                marginBottom: 20,
              }}
            >
              Showing {woList.length} most recent work order
              {woList.length !== 1 ? "s" : ""}
            </div>
            {woList.map((wo, idx) => (
              <WorkOrderSection
                key={wo.name}
                wo={wo}
                isLatest={idx === 0}
                defaultCollapsed={idx !== 0}
              />
            ))}
            {woList.length === 0 && (
              <div
                style={{
                  textAlign: "center",
                  padding: 80,
                  color: "#9ca3af",
                  fontWeight: 600,
                  fontSize: 16,
                }}
              >
                No work orders found
              </div>
            )}
          </>
        )}
      </main>

      {/* Global styles */}
      <style>{`
        @keyframes pulse {
          0%   { transform: scale(1);    opacity: 1;   box-shadow: 0 0 6px  rgba(250,204,21,0.7); }
          50%  { transform: scale(1.35); opacity: 0.7; box-shadow: 0 0 18px rgba(250,204,21,1);   }
          100% { transform: scale(1);    opacity: 1;   box-shadow: 0 0 6px  rgba(250,204,21,0.7); }
        }
        @keyframes spin  { to { transform: rotate(360deg); } }
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }
        @keyframes modalIn {
          from { transform: scale(0.95) translateY(10px); opacity: 0; }
          to   { transform: scale(1)    translateY(0);    opacity: 1; }
        }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        button:hover:not(:disabled) { filter: brightness(0.93); }
        input:focus, textarea:focus {
          border-color: #EAB308 !important;
          box-shadow: 0 0 0 3px rgba(234,179,8,0.15);
        }
      `}</style>
    </div>
  );
}