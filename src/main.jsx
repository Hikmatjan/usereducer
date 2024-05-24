import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Coder from "./index.jsx";
import Local from "./localstorage/index.jsx";
import TASK from "./task/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Coder /> */}
    {/* <Local /> */}
    <TASK />
  </React.StrictMode>
);
