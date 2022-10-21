import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="row bg-light pt-1">
      <div className="col-md-6 text-center">
        <h4 id="contact" className="text-primary">
          What's Next?
        </h4>
        <h2>Let's Connect</h2>
        <p>
          If you are interested in working on a project or have any questions,
          please leave an email and I will get back to you as soon as possible.
        </p>
      </div>
      <div className="col-md-6 text-center profile-socieal-links">
        <a href="mailto:abass@abassdev.com" className="btn border my-4">
          Hi to me? 👋
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
      </div>
      <p className="copyright bg-secondary">
        Copyright © 2021 - 2022 by Abass Dev, All rights reserved. <br />{" "}
        Version: 2.0.1
      </p>
    </div>
  );
}
