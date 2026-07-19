import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ReactGA from "react-ga4";
import clarity from "@microsoft/clarity";

import "./index.css";
import App from "./App.jsx";

// Google Analytics 4
ReactGA.initialize("G-H0B9RR0W0V");

// Microsoft Clarity
clarity.init("xp3l526q8a");

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);