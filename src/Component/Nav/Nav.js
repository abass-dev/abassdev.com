import React from "react";
import "./Nav.css";
import TagManager from 'react-gtm-module'
import ProfilePicture from "../../assets/images/logo.png";

export default function Nav() {
  return (
    <nav class="navbar fixed-top navbar-expand-md navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          <img alt='Abass Dev Logo' style={{borderRadius: '100%', border: '1px solid red'}} width='35px' height='35px' src={ProfilePicture}/>
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
              <a onClick={() => TagManager.dataLayer({"myStorySection": "Scrolling to my story page"})} class="nav-link" aria-current="page" href="/#myStory">
                My Story
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
              <a onClick={() => TagManager.dataLayer({"contactSection": "Scrolling to contact page"})} class="nav-link" href="/#contact">
                Contact
              </a>
            </li>
          </ul>
          <ul style={{backgroundColor: window.screen.width < 500 ?  '#373737' : 'transparent'}} class="navbar-nav flex-row d-flex justify-content-around align-items-center">
            <li class="nav-item">
              <a
              onClick={() => TagManager.dataLayer({"blogLink": "Click on the blog link"})}
                className="btn btn-outline-success btn-sm"
                href="https://blog.abassdev.com"
              >
                BLOG
              </a>
            </li>
            <li class="nav-item">
                  <a className='nav-link' href="https://m.facebook.com/abassthedev">
                    <i style={{fontSize: 24}} className="fa fa-facebook"></i>
                  </a> 
            </li>
            <li class="nav-item">
                  <a className='nav-link' href="https://github.com/abass-dev">
                    <i style={{fontSize: 24}} className="fa fa-github"></i>
                  </a> 
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
