import React from "react"
import "./Profile.css"
import Typical from "react-typical"
import 'font-awesome/css/font-awesome.min.css'
import resume from "../../assets/pdf/abass_cv_fr.pdf"

function navbarToggler() {
    const collapseBtn = document.querySelector('.collapseBtn').classList
    collapseBtn.toggle('collapse')
}

export default function Profile() {
    return (
        <div className='container mb-4'>
      <div className='row'>
        <div className='col-12 my-4'>
            <nav className="navbar navbarTextColor navbar-expand-md navbar-dark bg-transparent">
              <div className="container-fluid">
                <button onClick={navbarToggler} className="navbar-toggler btn btn-success-outline" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="fa fa-bars text-success"></span>
                </button>
                <div className="collapseBtn collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div className="navbar-nav md-title">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    <a className="nav-link text-white" href="#apropos">À-propos</a>
                    <a className="nav-link text-white" href="#competence">Compétence</a>
                    <a className="nav-link text-white" href="#projets">Projets</a>
                    <a className="nav-link text-white" href="#contact">Contact</a>
                    <a className="nav-link text-white btn-sm lead text-white btn btn-success" href="tel:+233-54-312-2816">Tel: <span className='fs-4 fa fa-mobile'></span> +233 054 312 2816</a>
        </div>
        </div>
        </div>
        </nav>
        </div>
        <div className='col-12 profile-header'>
          <h1 id='apropos' className='text-white fw-bold'><span className='text-primary'>HELLO,</span> JE SUIS ABASS DEV</h1>
          <h2 className='text-primary'>
            <Typical
                    steps={[
                        'Je suis freelance 🌠',
                        2000,
                        'Je suis développeur Full-Stack 💻',
                        2000,
                        'J\'ai 6+ ans d\'expérience 📆',
                        2000,
                        'J\'💗ime l\'Open-Source',
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
              <h1 className='mt-4'>À-propos de moi</h1>
              <p className='lead text-start'>
                Je suis un développeur web et mobile 
                passionné de l'internet et de la programmation depuis plus 6 ans.
                <br /> Pendant mon temps libre, j'écris des articles sur <a href='https://todaydevs.com'>todaydevs</a> et contribue à la communauté <a href='https://github.com/abass-dev?tab=repositories'>Open-Source</a>
              </p>
            <div className='row'>
            <div className='col'>
              <a href={resume} download className='btn btn-success'>MON CV <span className='fa fa-download'></span></a>
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
            <a href='https://github.com/abass-dev'>
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