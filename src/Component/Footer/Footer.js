import React from "react";
import ContactForm from "../ContactForm";
import "./Footer.css";
export default function Footer() {
  const packageJson = require("../../../package.json");
  const appVersion = packageJson.version;

  return (
    <div id="contact" className="row py-4 ">
      <div className="ff-ubuntu col-md-6 d-flex flex-column align-items-center text-center justify-content-center">
        <h3 id="contact" className="primary-text primary-font">
          What's Next?
        </h3>
        <h4>Let's Connect.</h4>
        <p>
          If you're interested in working on a project or have any questions,
          please feel free to leave me an email, and I'll get back to you as
          soon as possible.
        </p>
        <div className="profile-socieal-links mb-4">
          <a
            className="text-secondary"
            aria-label="my facebook"
            href="https://m.facebook.com/abassthedev"
          >
            <i className="fa fa-facebook"></i>
          </a>
          <a
            className="text-secondary"
            aria-label="my Twitter"
            href="https://twitter.com/abass_dev"
          >
            <i className="fa fa-twitter"></i>
          </a>
          <a
            className="text-secondary"
            aria-label="my github"
            href="https://github.com/abass-dev"
          >
            <i className="fa fa-github"></i>
          </a>
          <a
            className="text-secondary"
            aria-label="my linkedin"
            href="https://www.linkedin.com/in/abassdev"
          >
            <i className="fa fa-linkedin"></i>
          </a>
          <a
            className="text-secondary"
            aria-label="my instagram"
            href="https://www.instagram.com/abassdev"
          >
            <i className="fa fa-instagram"></i>
          </a>
          <a
            className="text-secondary"
            aria-label="my pinterest"
            href="https://www.pinterest.com/abassdev"
          >
            <i className="fa fa-pinterest"></i>
          </a>
          <a className="text-secondary" aria-label="contact me" href="/contact">
            <i className="fa fa-envelope"></i>
          </a>
        </div>
        <h3 className="h4 primary-font primary-text">Others</h3>
        <div className="m-2 rounded border p-1">
          <a className="link-secondary" href="/privacy-policy">
            Privacy Policy
          </a>
        </div>
        <div className="m-2 rounded border p-1">
          <a className="link-secondary" href="/contact">
            Contact me
          </a>
        </div>
        <div className="m-2 rounded border p-1">
          <a className="link-secondary" href="/my-story">
            My story
          </a>
        </div>
      </div>
      <div className="col-md-6 mb-4 mt-4 text-center">
        <ContactForm animation={true} />
      </div>
      <p className="copyright ff-ubuntu">
        Copyright © 2021 - {new Date().getFullYear()} by Abass Dev, All rights
        reserved. <br /> Version: {appVersion}
      </p>
    </div>
  );
}
