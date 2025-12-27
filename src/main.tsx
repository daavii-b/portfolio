import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./app";

import "@/lib/i18n";
import "@/styles/global.css";

ReactDOM.createRoot(document.getElementById("app") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
