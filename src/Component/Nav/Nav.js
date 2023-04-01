import React from "react";
import "./Nav.css";
import TagManager from 'react-gtm-module'

export default function Nav() {
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
              <a onClick={() => TagManager.dataLayer({"aboutSection": "Scrolling to about page"})} class="nav-link active" aria-current="page" href="/#apropos">
                About
              </a>
            </li>
            <li class="nav-item">
              <a onClick={() => TagManager.dataLayer({"projectsSection": "Scrolling to projects page"})}class="nav-link" href="/#projects">
                Projects
              </a>
            </li>
            <li class="nav-item">
              <a onClick={() => TagManager.dataLayer({"skillsToolsSection": "Scrolling to Skills and Tools page"})} class="nav-link" href="/#skills-tools">
                Skills & Tools
              </a>
            </li>
            <li class="nav-item">
              <a onClick={() => TagManager.dataLayer({"worksSection": "Scrolling to Works page"})} class="nav-link" href="/#work">
                Works
              </a>
            </li>
            <li class="nav-item">
              <a
               onClick={() => TagManager.dataLayer({"contactMeNumber": "Click on contact me number"})}
                className="text-white btn-sm lead btn btn-success"
                href="tel:+233598208469"
              >
                Tel: <span className="fs-4 fa fa-mobile"></span> +233 59 820 8469
              </a>
            </li>
          </ul>
          <ul class="navbar-nav  mb-2 mb-lg-0">
            <li class="nav-item">
              <a
              onClick={() => TagManager.dataLayer({"blogLink": "Click on the blog link"})}
                class="nav-link btn btn-outline-success"
                href="https://blog.abassdev.com"
              >
                BLOG
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
