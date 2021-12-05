import React from "react"
import "./Profile.css"
import Typical from "react-typical"
import 'font-awesome/css/font-awesome.min.css'
import resume from "../../assets/pdf/abass_cv_fr.pdf"
import {Trans, useTranslation} from 'react-i18next'
const reactStringReplace = require('react-string-replace')

function navbarToggler() {
    const collapseBtn = document.querySelector('.collapseBtn').classList
    collapseBtn.toggle('collapse')
}

export default function Profile() {

    const {t, i18n} = useTranslation();
    
    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    let description = t("profile.about.description")
    description = reactStringReplace(description, "Open-Source", (match, i) => (
        <a href="https://github.com/abass-dev?tab=repositories">{match}</a>
    ))
    description = reactStringReplace(description, "todaydevs", (match, i) => (
        <a href="https://todaydevs.com">{match}</a>
    ))
    
    return (
        <div className='container mb-4'>
      <div className='row'>
        <div className='col-12 mt-4'>
            <nav className="navbar navbarTextColor navbar-expand-md navbar-dark bg-transparent">
              <div className="container-fluid">
                <button onClick={navbarToggler} className="navbar-toggler btn btn-success-outline" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="fa fa-bars text-success"></span>
                </button>
                <div className="collapseBtn collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div className="navbar-nav md-title">
                    <a className="nav-link active" aria-current="page" href="/">{t("profile.links.home")}</a>
                    <a className="nav-link text-white" href="#apropos">{t("profile.links.about")}</a>
                    <a className="nav-link text-white" href="#competence">{t("profile.links.skill")}</a>
                    <a className="nav-link text-white" href="#projets">{t("profile.links.projects")}</a>
                    <a className="nav-link text-white" href="#contact">{t("profile.links.contact")}</a>
                    <a className="nav-link text-white btn-sm lead text-white btn btn-success" href="tel:+233-54-312-2816">Tel: <span className='fs-4 fa fa-mobile'></span> +233 054 312 2816</a>
        </div>
        </div>
        </div>
        </nav>
        </div>
        <div className='col-12 profile-header'>
            <div className="text-end my-4">
                <button className="btn btn-primary-outline btn-sm text-white" onClick={() => changeLanguage('en')}>En 🇺🇸</button>
                <button className="btn btn-primary-outline btn-sm text-white" onClick={() => changeLanguage('fr')}>Fr 🇫🇷</button>
            </div>
         <h1 id='apropos' className='text-white fw-bold'><span className='text-primary'>HELLO, </span>{t("profile.sayHello")}</h1>
          <h2 className='text-primary'>
            <Typical
                    steps={[
                        t("profile.introduce1"),
                        2000,
                        t("profile.introduce2"),
                        2000,
                        t("profile.introduce3"),
                        2000,
                        t("profile.introduce4"),
                        2000,
                    ]}
                    loop={Infinity}
                    />
          </h2>
          <div className='row align-items-center'>
            <div className='col-12 mx-4'>
                </div>
            <div className='mt-4 col-md-6'>
              <div className='profile-picture'></div>
            </div>
            <div className='col-md-6 text-white'>
              <h1 className='mt-4'>{t("profile.about.title")}</h1>
              <p className='lead text-start'>{description}</p>
            <div className='row'>
            <div className='col'>
              <a href={resume} download className='btn btn-success'>{t("profile.cv")} <span className='fa fa-download'></span></a>
            </div>
                <div className='col text-end profile-socieal-links'>
            <a href='https://www.facebook.com/abasscheik.ben'>
              <i className="fa fa-facebook"></i>
            </a>
            <a href='https://twitter.com/abasscheik1'>
              <i className="fa fa-twitter"></i>
            </a>
            <a href='https://github.com/abass-dev'>
              <i className="fa fa-github"></i>
            </a>
            <a href='https://github.com/abass-dev?tab=repositories'>
              <i className="fa fa-linkedin"></i>
            </a>
            </div>
            </div>
          
                </div>
            </div>
        </div>
        </div>
        </div>
    )
}