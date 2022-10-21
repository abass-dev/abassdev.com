import React from "react";
import "font-awesome/css/font-awesome.min.css";
import projectCode from "../../assets/images/project-nigatedev.jpg";
import projectTodaydevs from "../../assets/images/projet-todaydevs.jpg";
import projectPortfolio from "../../assets/images/project-portfolio.png";
import projectPHPCode from "../../assets/images/php_code.jpg";
import projectReactNative1 from "../../assets/images/screenshot.jpg";
import "./Project.css";

export default function Project() {
  return (
    <div className="home-container">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 id="projects" className="mt-4 large-title text-start fw-bold">
              NOTABLE PROJECTS
            </h1>
            <p className="after-title"></p>
          </div>
          <div className="col-md-6 mb-4">
            <p className="md-title text-secondary">NIGATEDEV FRAMEWORK</p>
            <div className="card border-gray ">
              <img
                alt="Php code"
                className="card-img-top"
                src={projectPHPCode}
              />
              <div className="card-body bg-light border-gray">
                <i className="fw-bold fa fa-code"></i>{" "}
                <span className="fw-lighter">
                  PHP, JavaScript, Sass, Shell, Twig
                </span>
                <p>
                  <a
                    href="http://github.com/nigatedev/nigatedev"
                    class="btn mt-2 bg-light text-dark  text-primary btn-primary-outline btn-sm"
                  >
                    <i className="fa fa-github"></i> Code
                  </a>{" "}
                  <a
                    className="text-center"
                    href="https://packagist.org/packages/nigatedev/nigatedev"
                    title="version"
                  >
                    <img
                      alt="Nigatedev Framework"
                      src="https://img.shields.io/packagist/v/nigatedev/nigatedev.svg?style=flat-square"
                    />
                  </a>{" "}
                  <a
                    href="https://github.com/nigatedev/nigatedev/blob/master/LICENSE"
                    title="license"
                  >
                    <img
                      alt="Nigatedev Framework License"
                      src="https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square"
                    />
                  </a>{" "}
                  <a href="https://github.com/nigatedev/nigatedev/issues">
                    <img
                      alt="Report Nigatedev Framework Issues"
                      src="https://img.shields.io/github/issues/nigatedev/nigatedev?color=0088ff"
                    />
                  </a>
                </p>
                <p className="md-title">
                  Nigatedev is a time-saving PHP framework coded by Abass Dev
                  (Abass Ben Cheik) and contributors.
                </p>
                <p>
                  <a href="https://nigatedev.herokuapp.com/">List of demo</a>
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <p className="md-title text-secondary">TODAYDEVS WEBSITE</p>
            <div className="card border-gray ">
              <img
                alt="todaydevs website"
                className="card-img-top"
                src={projectTodaydevs}
              />
              <div className="card-body bg-light">
                <p>
                  <i className="fw-bold fa fa-code"></i>
                  <span className="fw-lighter"> WordPress</span>
                </p>
                <p>
                  <a
                    href="https://todaydevs.com"
                    class="btn mt-2 bg-light text-dark  text-primary btn-primary btn-sm"
                  >
                    <i className="fa fa-globe"></i> Visit the site
                  </a>
                </p>
                <p className="md-title">
                  With TodayDevs, stay informed about new technology! We share
                  everything about new technologies concerning web, mobile and
                  software while trying to stay up to date with new
                  technologies.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <p className="md-title text-secondary">FORM BUILDER</p>
            <div className="card border-gray ">
              <img
                alt="BOSP FormBuilder"
                className="card-img-top"
                src={projectCode}
              />
              <div className="card-body bg-light">
                <p>
                  <i className="fw-bold fa fa-code"></i>
                  <span className="fw-lighter"> PHP, HTML, Bootstrap</span>
                </p>
                <p>
                  <a
                    href="https://github.com/abass-dev/BenOSP-FormBuilder"
                    class="btn mt-2 text-primary btn-primary-outline btn-sm bg-light text-dark "
                  >
                    <i className="fa fa-github"></i> Code
                  </a>{" "}
                  <a
                    className="text-center"
                    href="https://packagist.org/packages/benosp/formbuilder"
                    title="version"
                  >
                    <img
                      alt=""
                      src="https://img.shields.io/packagist/v/benosp/formbuilder.svg?style=flat-square"
                    />
                  </a>{" "}
                  <a
                    href="https://github.com/abass-dev/BenOSP-FormBuilder/blob/master/LICENSE"
                    title="license"
                  >
                    <img
                      alt="BOSP Formbuilder License"
                      src="https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square"
                    />
                  </a>{" "}
                  <a href="https://github.com/abass-dev/BenOSP-FormBuilder/issues">
                    <img
                      alt="Issues"
                      src="https://img.shields.io/github/issues/abass-dev/BenOSP-FormBuilder?color=0088ff"
                    />
                  </a>
                </p>
                <p className="md-title">
                  Form builder is an open-source project written in PHP and
                  styled with bootstrap css by Abass Dev (Abass Ben Cheik) to be
                  easily used to build html forms.
                </p>
                <p>
                  Live demo on
                  <a href="https://nigatedev.herokuapp.com/todo">
                    ( Todo list )
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <p className="md-title text-secondary">
              MY PORTFOLIO (This website)
            </p>
            <div className="card border-gray ">
              <img
                alt="Abass Dev portfolio code source (Gitbub)"
                className="card-img-top"
                src={projectPortfolio}
              />
              <div className="card-body bg-light text-dark  text-light">
                <p>
                  <i className="fw-bold fa fa-code"></i>
                  <span className="fw-lighter"> React, NodeJs, Express</span>
                </p>
                <p>
                  <a
                    href="https://github.com/abass-dev/portfolio"
                    class="btn mt-2 text-primary btn-primary-outline btn-sm bg-light text-dark "
                  >
                    <i className="fa fa-github"></i> Code
                  </a>{" "}
                  <a
                    href="https://github.com/abass-dev/portfolio/blob/master/LICENSE"
                    title="license"
                  >
                    <img
                      alt=""
                      src="https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square"
                    />
                  </a>{" "}
                  <a href="https://github.com/abass-dev/portfolio/issues">
                    <img
                      alt="Issues"
                      src="https://img.shields.io/github/issues/abass-dev/portfolio?color=0088ff"
                    />
                  </a>
                </p>
                <p className="md-title">
                  This portfolio was build using ReactJs
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <p className="md-title text-secondary">
              DYNACARD (ReactNative library)
            </p>
            <div className="card border-gray ">
              <img alt="" className="card-img-top" src={projectCode} />
              <div className="card-body bg-light text-dark  text-light">
                <p>
                  <i className="fw-bold fa fa-code"></i>
                  <span className="fw-lighter"> JavaScript</span>
                </p>
                <p>
                  <a
                    href="https://github.com/abass-dev/dynacard"
                    class="btn mt-2 text-primary btn-primary-outline btn-sm bg-light text-dark "
                  >
                    <i className="fa fa-github"></i> Code
                  </a>{" "}
                  <a
                    href="https://github.com/abass-dev/dynacard/blob/master/LICENSE"
                    title="license"
                  >
                    <img
                      alt=""
                      src="https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square"
                    />
                  </a>{" "}
                  <a href="https://github.com/abass-dev/dynacard/issues">
                    <img
                      alt="Issues"
                      src="https://img.shields.io/github/issues/abass-dev/dynacard?color=0088ff"
                    />
                  </a>
                </p>
                <p className="md-title">
                  Dynacard is an open-source ReactNative library that can help
                  you easily create beautiful cards for your ReactNative
                  application.
                </p>
                <p>
                  Live demo
                  <a href="https://abassdev.com/abassdev.apk">
                    {" "}
                    abassdev.apk ( Install the app here )
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-1">
            <p className="md-title text-secondary">
              Android Application (ReactNative)
            </p>
            <div className="card border-gray ">
              <img alt="" className="card-img-top" src={projectReactNative1} />
              <div className="card-body text-dark bg-light">
                <p>
                  <i className="fw-bold fa fa-code"></i>
                  <span className="fw-lighter"> ReactNative</span>
                </p>
                <p>
                  <a
                    href="https://github.com/abass-dev/portfolio-with-react-native"
                    class="btn mt-2 text-primary btn-primary-outline btn-sm bg-light text-dark "
                  >
                    <i className="fa fa-github"></i> Code
                  </a>{" "}
                  <a
                    href="https://github.com/abass-dev/portfolio-with-react-native/blob/master/LICENSE"
                    title="license"
                  >
                    <img
                      alt=""
                      src="https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square"
                    />
                  </a>{" "}
                </p>
                <p className="md-title">
                  Convert my portfolio to Android App using ReactNative
                  <a href="https://abassdev.com/abassdev.apk">
                    {" "}
                    Download the Apk
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col border-bottom border-2"></div>
        </div>
      </div>
    </div>
  );
}
