import React, { useContext, useEffect, useState } from "react";
import ContactForm from "../ContactForm";
import "./Footer.css";
import { ThemeContext } from "../../Context/ThemeProvider";
export default function Footer({ desableContacForm }) {
  const packageJson = require("../../../package.json");
  const appVersion = packageJson.version;
  const { theme } = useContext(ThemeContext);
  const [storedTheme, setStoredTheme] = useState("light");
  const localStorage = window.localStorage;

  useEffect(() => {
    let sthm = localStorage.getItem("theme");
    if (sthm) {
      setStoredTheme(sthm);
    }
  }, [theme]);

  const metaData = {
    title: "Contact me",
  };

  return (
    <footer id={storedTheme && storedTheme} className="container-lg mt-5">
     <div className='container'>
      <div className="row">
        {desableContacForm ? (
          ""
        ) : (
          <div className="col-md-6 mb-4 mt-4 text-center">
            <ContactForm />
          </div>
        )}
        <div
          className={`f-ubuntu p-5 text-white ${
            desableContacForm ? "col-12" : "col-md-6"
          } d-flex flex-column align-items-center text-center justify-content-center`}
        >
          <h3 className="primary-text mb-4 mt-4 primary-font">What's Next?</h3>
          <h4>Let's Connect.</h4>
          <p>
          <span className='h1 primary-text'>I</span>f you have a suggestion, feedback, opportunity, or are interested in collaborating on a project, we would love to hear from you! Please feel free to reach out to us using the contact details provided below. If you are expecting a reply, kindly mention your contact details in your message.
          </p>
          <div className="profile-socieal-links mb-4">
            <a
              className="text-light"
              aria-label="my facebook"
              href="https://m.facebook.com/abassthedev"
            >
              <i className="fa fa-facebook"></i>
            </a>
            <a
              className="text-light"
              aria-label="my Twitter"
              href="https://twitter.com/abass_dev"
            >
              <i className="fa fa-twitter"></i>
            </a>
            <a
              className="text-light"
              aria-label="my github"
              href="https://github.com/abass-dev"
            >
              <i className="fa fa-github"></i>
            </a>
            <a
              className="text-light"
              aria-label="my linkedin"
              href="https://www.linkedin.com/in/abassdev"
            >
              <i className="fa fa-linkedin"></i>
            </a>
            <a
              className="text-light"
              aria-label="my instagram"
              href="https://www.instagram.com/abassdev"
            >
              <i className="fa fa-instagram"></i>
            </a>
            <a
              className="text-light"
              aria-label="my pinterest"
              href="https://www.pinterest.com/abassdev"
            >
              <i className="fa fa-pinterest"></i>
            </a>
            <a className="text-light" aria-label="contact me" href="/contact">
              <i className="fa fa-envelope"></i>
            </a>
          </div>
          <h3 className="h4 primary-font primary-text">Others</h3>
          <div className="row">
            <div className="col-6">
              <div className="p-1">
                <a className="link-secondary" href="/privacy-policy">
                  Privacy Policy
                </a>
              </div>
            </div>
            <div className="col-6">
              <div className="">
                <a className="link-secondary" href="/contact">
                  Contact me
                </a>
              </div>
            </div>
            <div className="col-6">
              <div className="">
                <a className="link-secondary" href="/copyright">
                  Legal
                </a>
              </div>
            </div>
            <div className="col-6">
              <div className="">
                <a className="link-secondary" href="/my-story">
                  My story
                </a>
              </div>
            </div>
            <div className="col-12">
              <div className="">
                <a className="link-secondary" href="/login">
                  Login
                </a>
              </div>
            </div>
          </div>
        </div>

        <p className="copyright ff-ubuntu p-4 text-white">
          <a href="/copyright">Copyright</a> © 2021 - {new Date().getFullYear()}{" "}
          Abass Dev. All rights reserved. <br /> Current version: {appVersion}
        </p>
      </div>
      </div>
    </footer>
  );
}
