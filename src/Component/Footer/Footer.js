import React from "react";
import "./Footer.css";

export default function Footer() {
const packageJson = require('../../../package.json');
const appVersion = packageJson.version;
 return (
    <div id='contact' className="row bg-light pt-1">
      <div className="col-md-6 text-center">
        <h4 id="contact" className="text-primary">
          What's Next?
        </h4>
        <h2>Let's Connect</h2>
        <p className='lead'>
        If you're interested in working on a project or have any questions, please feel free to leave me an email, and I'll get back to you as soon as possible.
        </p>
      </div>
      <div className="col-md-6 mb-4 text-center profile-socieal-links">
        <a href="mailto:abass@abassdev.com" className="btn border my-4">
          Say "Hi" to me 👋
        </a>
        <br />
        <a href="https://m.facebook.com/abassthedev">
          <i className="fa fa-facebook"></i>
        </a>
        <a href="https://twitter.com/abass_dev">
          <i className="fa fa-twitter"></i>
        </a>
        <a href="https://github.com/abass-dev">
          <i className="fa fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/abassdev">
          <i className="fa fa-linkedin"></i>
        </a>
        <a href="https://www.instagram.com/abassdev">
          <i className="fa fa-instagram"></i>
        </a>
        <a href="https://www.pinterest.com/abassdev">
          <i className="fa fa-pinterest"></i>
        </a>
        <a href="mailto:abass@abassdev.com">
          <i className="fa fa-envelope"></i>
        </a> 
        <br />
             <a
                className="text-white mt-4 btn-sm btn btn-success"
                href="tel:+233598208469"
              >
                Tel: <span className="fa fa-mobile"></span> +233 59 820 8469
              </a>
      </div>
      <p className="copyright bg-secondary">
        Copyright © 2021 - {new Date().getFullYear()} by Abass Dev, All rights reserved. <br />{" "}
        Version: {appVersion}
      </p>
    </div>
  );
}
