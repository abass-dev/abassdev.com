import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-toggle/style.css" // for ES6 modules
import Toggle from 'react-toggle'
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import { CookiesProvider } from "react-cookie";
import PrivacyPolicy from "./Component/PrivacyPolicy/PrivacyPolicy";
import MyStory from "./Component/Story/MyStory";
import Contact from "./Component/Contact";
import { FaCloudMoon, FaSun } from "react-icons/fa";

import NotFound from "./Component/NotFound/NotFound";
import { CookieAlertBox } from './Component/Cookies'
import reportWebVitals from "./reportWebVitals";
import TagManager from "react-gtm-module";
import ThemeProvider, { ThemeContext }from './Context/ThemeProvider'
import "./index.css";

const tagManagerArgs = {
  gtmId: "G-N8ZTB9NPSP",
};
TagManager.initialize(tagManagerArgs);

const pathName = window.location.pathname 

ReactDOM.render(
  <React.StrictMode>
   <ThemeProvider>
    <CookiesProvider>
      <Suspense
        fallback={
          <div className="lds-ripple">
            <div></div>
            <div></div>
          </div>
        }
      >
       <CookieAlertBox />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/mystory" element={<MyStory pathName={pathName} />} />
            <Route path="/contact" element={<Contact pathName={pathName} />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy pathName={pathName} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </CookiesProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
