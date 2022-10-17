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
    <nav class="navbar fixed-top navbar-expand-md navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          MENU
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/#apropos">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/#projects">
                Projects
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/#skills-tools">
                Skills And Tools
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/#work">
                Work
              </a>
            </li>
            <li class="nav-item">
              <a
                className="text-white btn-sm lead btn btn-success"
                href="tel:+233-59-157-5606"
              >
                Tel: <span className="fs-4 fa fa-mobile"></span> +233 59 157
                5606
              </a>
            </li>
          </ul>
          <ul class="navbar-nav  mb-2 mb-lg-0">
            <li class="nav-item">
              <a
                class="nav-link btn btn-outline-success"
                href="https://blog.abassdev.com"
              >
                BLOG
              </a>
            </li>

            <li class="nav-item">
              <button
                className="btn btn-primary-outline btn-sm text-white"
                onClick={() => changeLanguage("en")}
              >
                {t("profile.lang.en")} US
              </button>
            </li>
            <li class="nav-item">
              <button
                className="btn btn-primary-outline btn-sm text-white"
                onClick={() => changeLanguage("fr")}
              >
                {t("profile.lang.fr")} FR
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
