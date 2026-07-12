import React from "react";
import ReactDOM from "react-dom/client";
// import { registerServiceWorker } from "./services/registerSW";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
// registerServiceWorker();