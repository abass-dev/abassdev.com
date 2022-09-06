import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import { CookiesProvider } from "react-cookie";
import Contact from "../src/Component/Contact/Contact";
import reportWebVitals from "./reportWebVitals";
import "./i18n";
import "./index.css";
ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
      <Suspense
        fallback={
          <div className="lds-ripple">
            <div></div>
            <div></div>
          </div>
        }
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </CookiesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
