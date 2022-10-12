import React from "react";
import "./Footer.css";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <div className="row bg-light pt-1">
      <div className="col-md-6 text-center">
        <h4 id="contact" className="text-primary">
          {t("footer.thenext")}
        </h4>
        <h2>{t("footer.letsconnect")}</h2>
        <p>{t("footer.contactdesk")}</p>
      </div>
      <div className="col-md-6 text-center profile-socieal-links">
        <a href="mailto:abass@abassdev.com" className="btn border my-4">
          {t("footer.sayhi")} 👋
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
        {t("footer.copyright")} <br /> Version: 2.0.1
      </p>
    </div>
  );
}
