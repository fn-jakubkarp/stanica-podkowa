import React from "react";
import ReactDOM from "react-dom/client";
import { injectSpeedInsights } from "@vercel/speed-insights";
import { inject } from "@vercel/analytics";
import App from "./App.tsx";
import "./styles/main.css";

// Vercel insights
injectSpeedInsights();
inject();
// ---

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
