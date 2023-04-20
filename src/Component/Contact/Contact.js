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
      <div style={{ minHeight: "75vh" }} className="container">
        <div className="row d-flex align-items-center">
          <div className="col-md-6 mt-4">
            <h1 className="pt-4 primary-font primary-text fw-bold">
              Contact me
            </h1>
            <p className="after-title mb-4"></p>
            <p className="text-center ff-ubuntu">
              <span className="h1 primary-text">I</span>f you have a suggestion,
              feedback, opportunity, or are interested in collaborating on a
              project, we would love to hear from you! Please feel free to reach
              out to us using the contact details provided below. If you are
              expecting a reply, kindly mention your contact details in your
              message.
            </p>
          </div>
          
          <div className="col-md-6 ff-ubuntu mt-4">
            <div itemScope itemType="http://schema.org/Person">
              <h1 itemProp="name">Abass Dev</h1>
              <p>
                <span itemProp="jobTitle">Web and mobile app developer</span>{" "}
                {" at "}
                <span itemProp="affiliation">self-employed</span>
              </p>
              <p
                itemProp="address"
                itemScope
                itemType="http://schema.org/PostalAddress"
              >
                <span itemProp="streetAddress">19 Patrice Lumumba Road</span>,
                <span itemProp="addressLocality">Accra</span>,
                <span itemProp="addressRegion">GH</span>,
                <span itemProp="postalCode">GA-254-4987</span>,
                <span itemProp="addressCountry">Ghana</span>
              </p>
              <p>
                Email:{" "}
                <a href="mailto:abass@abassdev.com.com" itemProp="email">
                  abass@abassdev.com
                </a>
                <br />
                Phone: <span itemProp="telephone">+233 59 820 8469</span>
              </p>
            </div>
          </div>
          <div className="col-md-12 mt-4">
            <ContactForm />
          </div>
        </div>
      </div>
      <Footer desableContacForm={true} />
    </div>
  );
};

export default Contact;
