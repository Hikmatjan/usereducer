import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Coder from "./index.jsx";
import Local from "./localstorage/index.jsx";
import EXample from "./example.jsx";
import CODER from "./task/index.jsx";
import TASK from "./coder/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Coder /> */}
    {/* <Local /> */}
    {/* <App /> */}
    {/* <CODER /> */}
    <TASK />
  </React.StrictMode>
);
