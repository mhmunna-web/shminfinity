import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ReactGA from "react-ga4";

import "./index.css";
import App from "./App.jsx";

// Initialize Google Analytics 4
ReactGA.initialize("G-H0B9RR0W0V");

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);