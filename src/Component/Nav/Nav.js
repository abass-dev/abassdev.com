import React from "react";
import { useTranslation } from "react-i18next";
import { Link, Outlet } from "react-router-dom";

import "./Nav.css";

export default function Nav() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="row pt-2 bg-light">
      <div className="col-6 col-md-9 text-start">
        <nav className="navbar navbarTextColor navbar-expand-md navbar-dark bg-transparent">
          <div>
            <button
              className="navbar-toggler btn btn-success-outline"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="fa fa-bars text-success"></span>
            </button>
            <div
              className="collapseBtn collapse navbar-collapse"
              id="navbarNavAltMarkup"
            >
              <div className="navbar-nav md-title">
                <a
                  className="nav-link text-dark active"
                  aria-current="page"
                  href="/"
                >
                  {t("profile.links.home")}
                </a>
                <a className="nav-link text-dark" href="#apropos">
                  {t("profile.links.about")}
                </a>
                <a className="nav-link text-dark" href="#projets">
                  {t("profile.links.projects")}
                </a>
                <a className="nav-link text-dark" href="#competence">
                  {t("profile.links.skill")}
                </a>
                <a className="nav-link text-dark" href="#work">
                  {t("profile.links.work")}
                </a>
                <Link className="nav-link text-dark" to="/contact">
                  {t("profile.links.contact")}
                </Link>
                <Outlet />
                <a
                  className="text-white btn-sm lead btn btn-success"
                  href="tel:+233-54-312-2816"
                >
                  Tel: <span className="fs-4 fa fa-mobile"></span> +233 59 157
                  5606
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
            
      <div className="col-6 col-md-3 text-end">
              <a
                className="btn btn-secondary btn-sm"
                href="https://blog.abassdev.com"
              >
                BLOG
              </a>
        <button
          className="btn btn-primary-outline btn-sm text-dark"
          onClick={() => changeLanguage("en")}
        >
          {t("profile.lang.en")} 🇺🇸
        </button>
        <button
          className="btn btn-primary-outline btn-sm text-dark"
          onClick={() => changeLanguage("fr")}
        >
          {t("profile.lang.fr")} 🇫🇷
        </button>
      </div>
    </div>
  );
}
