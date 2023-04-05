import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import { CookiesProvider } from "react-cookie";
import MyStory from "../src/Component/Story/MyStory";
import Contact from "../src/Component/Contact";
import NotFound from "../src/Component/NotFound/NotFound";
import Nav from "./Component/Nav/Nav";
import reportWebVitals from "./reportWebVitals";
import TagManager from "react-gtm-module";
import "./index.css";

const tagManagerArgs = {
  gtmId: "G-N8ZTB9NPSP",
};

TagManager.initialize(tagManagerArgs);

const pathName = window.location.pathname 

ReactDOM.render(
  <React.StrictMode>
  <Nav />
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
            <Route path="/mystory" element={<MyStory pathName={pathName} />} />
            <Route path="/contact" element={<Contact pathName={pathName} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </CookiesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
