import React from "react";
import "./Profile.css";
import Typical from "react-typical";
import "font-awesome/css/font-awesome.min.css";
import MyStory from "../Story/MyStory";
import ProfilePicture from "../../assets/images/profile-pic2.jpg";

export default function Profile() {
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
          <div className="row py-4 m-1 align-items-center rounded shadow">
            <div className="col-md-5 my-4 py-4">
              <img
                width="100%"
                height="auto"
                className="profpic"
                alt="Abass Dev"
                src={ProfilePicture}
              />
            </div>
            <div className="col-md-7 text-dark">
              <h1 className="mt-4">About me</h1>
              <p className="after-title"></p>
              <p className="lead text-start">A passionate web and mobile app developer with over 6 years of experience in programming and the internet. In my free time, I enjoy writing articles on my <a href='https://blog.abassdev.com'>blog</a> and contributing to the <a href='https://github.com/abass-dev'>open-source</a> community. I am also the creator of the <a href='https://github.com/nigaphp'>NigaPHP</a> framework.</p>
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
