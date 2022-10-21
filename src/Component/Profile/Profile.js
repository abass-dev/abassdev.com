import React from "react";
import "./Profile.css";
import Typical from "react-typical";
import "font-awesome/css/font-awesome.min.css";
import MyStory from "../Story/MyStory";
import ProfilePicture from "../../assets/images/profile-pic2.jpg";
import { useCookies } from "react-cookie";

export default function Profile() {
  const [cookie, setCookie] = useCookies(["transalertbox"]);
  const cookExpire = 3600 * 60;
  const handle = () => {
    setCookie("transalertbox", "transAlertBox", { maxAge: cookExpire });
  };
  const alertBox = () => {
    if (!cookie.transalertbox) {
      return (
        <div
          class="col-md-6 alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          <strong>Note: </strong>This website has been translated from to
          English, which means it may be incomplete. You can also help to
          improve the translation by cloning the repository{" "}
          <a href="https://github.com/abass-dev/portfolio/tree/master/public/locales">
            here.
          </a>{" "}
          Thanks anyway 🙏
          <button
            onClick={handle}
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      );
    } else {
      return null;
    }
  };
  return (
    <div className="my-4">
      <div className="row">
        <div className="col-12 profile-header">
          <h1 id="apropos" className="mt-4 pt-4 text-dark fw-bold">
            <span className="text-primary">Hi there 👋</span>
            It's Abass Dev!
          </h1>
          <h2 className="text-primary">
            <Typical
              steps={[
                "Freelancer 🌠",
                2000,
                "Full-Stack Developer 💻",
                2000,
                "6+ years of experience 📆",
                2000,
                "Open-source 💗",
                2000,
              ]}
              loop={Infinity}
            />
          </h2>
          {alertBox()}
          <div className="row py-4 m-1 align-items-center rounded shadow">
            <div className="col-md-6 my-4 py-4">
              <img
                width="100%"
                height="auto"
                className="profpic"
                alt="Abass Dev profile picture"
                src={ProfilePicture}
              />
            </div>
            <div className="col-md-6 text-dark">
              <h1 className="mt-4">About me</h1>
              <p className="after-title"></p>
              <p className="lead text-start">
                I'm a Web and Mobile App developer passionate about the internet
                and programming for over 6 years. In my free time, I write
                articles on my blog and contribute to the Open-Source community.
                I'm the Creator of Nigatedev framework.
              </p>

              <div className="row">
                <div className="col-12 mt-2 col-md-7 text-center profile-socieal-links">
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
                <div className="text-center mt-2 col-12 col-md-5">
                  <a
                    href="../../assets/pdf/abass_cv_en.pdf"
                    download
                    className="btn btn-success"
                  >
                    RESUME <span className="fa fa-download"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <MyStory />
        </div>
      </div>
    </div>
  );
}
