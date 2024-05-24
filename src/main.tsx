import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/main.css";

// Analytics
import { injectSpeedInsights } from "@vercel/speed-insights";
import { inject } from "@vercel/analytics";

// Vercel insights
injectSpeedInsights();
inject();
// ---

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
