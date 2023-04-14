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
    <div id={storedTheme && storedTheme}>
      {pathName && <Nav metaData={metaData} active={"contact"} />}
      <div className="container-lg">
        <div className="row d-flex align-items-center">
          <div className="col-12">
            <h1 className="pt-4 primary-font primary-text fw-bold">
              Contact me
            </h1>
            <p className="after-title mb-5"></p>
          </div>
          <div className="col-md-6 ff-ubuntu">
            <div itemscope itemtype="http://schema.org/Person">
              <h1 itemprop="name">Abass Dev</h1>
              <p>
                <span itemprop="jobTitle">Web and mobile app developer</span>{" "}
                {" at "}
                <span itemprop="affiliation">self-employed</span>
              </p>
              <p
                itemprop="address"
                itemscope
                itemtype="http://schema.org/PostalAddress"
              >
                <span itemprop="streetAddress">19 Patrice Lumumba Road</span>,
                <span itemprop="addressLocality">Accra</span>,
                <span itemprop="addressRegion">GH</span>,
                <span itemprop="postalCode">GA-254-4987</span>,
                <span itemprop="addressCountry">Ghana</span>
              </p>
              <p>
                Email:{" "}
                <a href="mailto:abass@abassdev.com.com" itemprop="email">
                  abass@abassdev.com
                </a>
                <br />
                Phone: <span itemprop="telephone">+233 59 820 8469</span>
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <ContactForm />
          </div>
        </div>
      </div>
      <Footer desableContacForm={true} />
    </div>
  );
};

export default Contact;
