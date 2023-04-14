import Nav from "../Nav/Nav";
import { Footer } from "../";
import { ThemeContext } from "../../Context/ThemeProvider";
import { useState, useEffect, useContext } from "react";
import ContactForm from "../ContactForm";

const Contact = ({ pathName }) => {
  const { theme } = useContext(ThemeContext);
  const [storedTheme, setStoredTheme] = useState("light");
  const localStorage = window.localStorage;

  useEffect(() => {
    let sthm = localStorage.getItem("theme");
    if (sthm) {
      setStoredTheme(sthm);
    }
  }, [theme]);

  const metaData = {
    title: "Contact me",
  };

  return (
    <div style={{ minHeight: "100vh" }} id={storedTheme && storedTheme}>
      {pathName && <Nav metaData={metaData} active={"contact"} />}
      <div className="container-lg">
        <div className="row">
          <div className="col-12 pb-5">
            <h1 className="pt-4 primary-font primary-text fw-bold">
              Contact me
            </h1>
            <p className="after-title mb-5"></p>
            <ContactForm />
          </div>
        </div>
        <Footer desableContacForm={true} />
      </div>
    </div>
  );
};

export default Contact;
