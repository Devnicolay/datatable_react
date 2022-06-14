import React from "react";
import { render } from "react-dom";
// import css
import "./lib/styles/style.css";
// import DataTable component
import DataTable from "./lib/components/DataTable.tsx";
// import columns for dataTable
import { columns } from "./lib/columns/columns";

const App = () => (
  <div>
    <h1>Your DataTable</h1>
    <DataTable
      data={[{ firstName: "Laura", lastName: "Nicolay" }]}
      columns={columns}
    />
  </div>
);

render(<App />, document.getElementById("root"));
