import React, { useRef } from "react";
import "./Profile.css";
import Typical from "react-typical";
import "font-awesome/css/font-awesome.min.css";
import { MyStory } from "../";
import ProfilePicture from "../../assets/images/profile-pic2.jpg";
import { SingleSlideAnim } from "../Util/Util";
export default function Profile() {
  const profileImageRef = useRef(null);
  const profileContentRef = useRef(null);

  SingleSlideAnim(profileImageRef, ".profileImageRefId");
  SingleSlideAnim(profileContentRef, ".profileContentRefId");

  return (
    <div id="apropos" className="mb-4 pt-4">
      <div className="row">
        <div className="col-12">
          <h1 className="profile-title primary-font fw-bold">
            <span className="primary-text">Hi there, 👋 </span>
            It's Abass Dev!
          </h1>
          <h2 className="profile-title primary-text primary-font">
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
              wrapper="p"
            />
          </h2>
          <div
            id="about"
            ref={profileImageRef}
            className="row py-4 m-1 align-items-center rounded shadow-sm"
          >
            <div className="profileImageRefId zoom-in col-md-4 my-4 py-4">
              <img
                width="100%"
                height="auto"
                className="img-fluid  profpic"
                alt="Abass Dev"
                src={ProfilePicture}
              />
            </div>
            <div
              ref={profileContentRef}
              className="col-md-8 text-center ff-ubuntu"
            >
              <div className="profileContentRefId slide-first">
                <h1 className="mt-4 primary-font fw-bold text-start primary-text">
                  About me
                </h1>
                <p className="after-title"></p>
                <p className="lead text-start">
                  A passionate web and mobile app developer with over 6 years of
                  experience in programming and the internet. <br /> In my free
                  time, I enjoy writing articles on my{" "}
                  <a href="https://blog.abassdev.com">blog</a> and contributing
                  to the <a href="https://github.com/abass-dev">open-source</a>{" "}
                  community. I am also the creator of the{" "}
                  <a href="https://github.com/nigaphp">NigaPHP</a> framework.
                </p>
                <a className="mb-4" href="/my-story">
                   Read more about me...
                  </a>
                <div className="col-12 mt-2 mt-4 text-center profile-socieal-links">
                  <a
                    aria-label="my facebook"
                    href="https://m.facebook.com/abassthedev"
                  >
                    <i className="text-secondary fa fa-facebook"></i>
                  </a>
                  <a
                    aria-label="my Twitter"
                    href="https://twitter.com/abass_dev"
                  >
                    <i className="text-secondary fa fa-twitter"></i>
                  </a>
                  <a aria-label="my github" href="https://github.com/abass-dev">
                    <i className="text-secondary fa fa-github"></i>
                  </a>
                  <a
                    aria-label="my linkedin"
                    href="https://www.linkedin.com/in/abassdev"
                  >
                    <i className="text-secondary fa fa-linkedin"></i>
                  </a>
                  <a
                    aria-label="instagram"
                    href="https://www.instagram.com/abassdev"
                  >
                    <i className="text-secondary fa fa-instagram"></i>
                  </a>
                  <a
                    aria-label="my pinterest"
                    href="https://www.pinterest.com/abassdev"
                  >
                    <i className="text-secondary fa fa-pinterest"></i>
                  </a>
                  <a aria-label="contact me" href="/contact">
                    <i className="text-secondary fa fa-envelope"></i>
                  </a>
                </div>
                <br />
                <a
                  href="../../assets/pdf/abass_cv_en.pdf"
                  download
                  className="btn btn-secondary text-white"
                >
                  Download CV <span className=" fa fa-download"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
