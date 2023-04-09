import ContactForm from "../ContactForm";
import Nav from "../Nav/Nav";
import { ThemeContext } from "../../Context/ThemeProvider";

import { useState, useEffect, useContext } from "react";

const Contact = ({ pathName }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [storedTheme, setStoredTheme] = useState("light");
  const localStorage = window.localStorage;

  useEffect(() => {
    let sthm = localStorage.getItem("theme");
    if (sthm) {
      setStoredTheme(sthm);
    }
  }, [theme]);

  function handlerToggle(e) {
    toggleTheme();
  }
  const metaData = {
    title: "Contact me",
  };
  return (
    <div style={{ minHeight: "100vh" }} id={storedTheme && storedTheme}>
      {pathName && <Nav metaData={metaData} active={"contact"} />}
      <div className="container-lg">
        <div className="row">
          <div className="col-md-12">
            <h1 className="pt-4 primary-font primary-text fw-bold">
              Contact me
            </h1>
            <p className="after-title"></p>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
