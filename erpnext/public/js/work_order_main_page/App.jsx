// App.jsx
import * as React from "react";
import { WorkOrderManufacturing } from "./WorkOrderManufacturing";

export function App() {
  // FIX: Added brackets [ ] around dynamicMessage
  // const [dynamicMessage] = React.useState("Hello from App.jsx"); 
  
  return (
    <div className="m-4">
      <WorkOrderManufacturing />
      {/* <h3>{dynamicMessage}</h3>
      <h4>Start editing at erpnext/public/js/work_order_main_page/App.jsx</h4> */}
    </div>
  );
}