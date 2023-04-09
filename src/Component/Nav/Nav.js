import { useContext, useEffect, useState } from "react";
import { ListUnorderedIcon } from "@primer/octicons-react";
import ProfilePicture from "../../assets/images/logo.png";
import Toggle from "react-toggle";
import { FaCloudMoon, FaSun } from "react-icons/fa";
import Helmet from "react-helmet";
import { ThemeContext } from "../../Context/ThemeProvider";

import "./Nav.css";

export default function Nav({ metaData, active }) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [storedTheme, setStoredTheme] = useState("light");
  const localStorage = window.localStorage;

  // Define state to keep track of the active link
  const [activeLink, setActiveLink] = useState("home");

  // Define a click event handler for the navigation links
  function handleClick(event) {
    // Prevent the default link behavior
    // event.preventDefault();

    // Set the active link based on the link that was clicked
    setActiveLink(event.target.hash.slice(1));
  }

  useEffect(() => {
    let sthm = localStorage.getItem("theme");
    if (sthm) {
      setStoredTheme(sthm);
    }
  }, [theme]);
  function handlerToggle(e) {
    toggleTheme();
  }
  return (
    <>
      {metaData && (
        <Helmet>
          <title>Abass Dev - {metaData.title}</title>
        </Helmet>
      )}
      <nav
        className={`navbar sticky-top navbar-expand-md nav-bar-opacity navbar-${storedTheme} ${storedTheme} shadow-sm`}
      >
        <div className="container-fluid">
          <a aria-label="Logo" className="navbar-brand" href="/">
            <img
              alt="Abass Dev Logo"
              style={{ borderRadius: "100%", border: "4px solid #00000025" }}
              width="37px"
              height="37px"
              src={ProfilePicture}
            />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <ListUnorderedIcon size={25} />
          </button>
          <div
            className="collapse navbar-collapse primary-font"
            id="navbarText"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  onClick={handleClick}
                  className={`nav-link ${
                    activeLink === "home" && active === "home" ? "active" : ""
                  }`}
                  aria-current="page"
                  href="/"
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    active === "my-story" ? "active" : ""
                  }`}
                  aria-current="page"
                  href="/my-story"
                >
                  My Story
                </a>
              </li>
              <li className="nav-item">
                <a
                  onClick={handleClick}
                  className={`nav-link ${
                    activeLink === "projects" ? "active" : ""
                  }`}
                  href="/#projects"
                >
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a
                  onClick={handleClick}
                  className={`nav-link ${
                    activeLink === "skills-tools" ? "active" : ""
                  }`}
                  href="/#skills-tools"
                >
                  Skills & Tools
                </a>
              </li>
              <li className="nav-item">
                <a
                  onClick={handleClick}
                  className={`nav-link ${
                    activeLink === "work" ? "active" : ""
                  }`}
                  href="/#work"
                >
                  Works
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${active === "contact" ? "active" : ""}`}
                  href="/contact"
                >
                  Contact
                </a>
              </li>

              <li className="nav-item">
                <a aria-label="contact me" className="nav-link">
                  <Toggle
                    aria-label="Toggle dark mode"
                    icons={{
                      checked: <FaSun color="white" size={10} />,
                      unchecked: <FaCloudMoon color="white" size={10} />,
                    }}
                    checked={storedTheme === "light" ? false : true}
                    onChange={handlerToggle}
                  />
                </a>
              </li>
            </ul>
            <ul className="navbar-nav flex-row d-flex justify-content-around align-items-center">
              <li className="nav-item">
                <a
                  className="btn btn-outline-success btn-sm"
                  href="https://blog.abassdev.com"
                >
                  BLOG
                </a>
              </li>
              <li className="nav-item">
                <a
                  aria-label="my facebook"
                  className="nav-link"
                  href="https://m.facebook.com/abassthedev"
                >
                  <i style={{ fontSize: 24 }} className="fa fa-facebook"></i>
                </a>
              </li>
              <li className="nav-item">
                <a
                  aria-label="my github"
                  className="nav-link"
                  href="https://github.com/abass-dev"
                >
                  <i style={{ fontSize: 24 }} className="fa fa-github"></i>
                </a>
              </li>
              <li className="nav-item">
                <a aria-label="contact me" className="nav-link" href="/contact">
                  <i style={{ fontSize: 24 }} className="fa fa-envelope"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
