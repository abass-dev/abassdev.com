import React from 'react'
import 'font-awesome/css/font-awesome.min.css'
import projectCode from '../../assets/images/project-nigatedev.jpg'
import projectTodaydevs from '../../assets/images/projet-todaydevs.jpg'
import projectPortfolio from '../../assets/images/project-portfolio.jpg'
import projectPHPCode from '../../assets/images/php_code.jpg'
import projectReactNative1 from '../../assets/images/screenshot.jpg'
import {useTranslation} from 'react-i18next'
import './Project.css'
export default function Project() {
    const {t} = useTranslation();
    return (
        <div className='home-container'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <h1 id='projets' className='mt-4 large-title text-start fw-bold text-white'>{t("project.title")}</h1>
                    </div>

                    <div className='col-md-6 mb-4'>
                        <div className='card border-secondary'>
                            <img alt='' className='card-img-top' src={projectPHPCode} />
                            <div class="text-white card-img-overlay">
                                <p className='h2 md-title card-title'>
                                    {t("project.nigatedev.title")}
                                </p>
                                <a href="http://github.com/nigatedev/nigatedev" class="btn mt-2 card-dark text-primary btn-primary-outline btn-sm"><i className='fa fa-github'></i> Code</a>
                                {" "}
                                <a className='text-center' href="https://packagist.org/packages/nigatedev/nigatedev" title="version"><img alt='' src="https://img.shields.io/packagist/v/nigatedev/nigatedev.svg?style=flat-square" /></a>
                                {" "}
                                <a href="https://github.com/nigatedev/nigatedev/blob/master/LICENSE" title="license"><img alt='' src="https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square" /></a>

                                {" "}
                                <a href="https://github.com/nigatedev/nigatedev/issues"><img alt="Issues" src="https://img.shields.io/github/issues/nigatedev/nigatedev?color=0088ff" /></a>
                            </div>
                            <div className='card-body card-dark text-white'>
                                <i className='fw-bold fa fa-code'></i>
                                {" "}
                                <span className='fw-lighter'>
                                    PHP, JavaScript, Sass, Shell, Twig
                                </span>
                                {" "}
                                <p className='md-title'>
                                    {t("project.nigatedev.description")}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-6 mb-4'>
                        <div className='card border-secondary'>
                            <img alt='todaydevs' className='card-img-top' src={projectTodaydevs} />
                            <div class="text-white card-img-overlay">
                                <p className='h2 md-title text-light card-title'>
                                    {t("project.todaydevs.title")}
                                </p>
                                <a href="https://todaydevs.com" class="btn mt-2 card-dark text-primary btn-primary-outline btn-sm"><i className='fa fa-globe'></i> Site</a>
                            </div>
                            <div className='card-body'>
                                <i className='fw-bold fa fa-code'></i>
                                <span className='fw-lighter'>
                                    {" "}
                                    WordPress
                                </span>
                                <p className='md-title'>
                                   {t("project.todaydevs.description")} 
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 mb-4'>
                        <div className='card border-secondary'>
                            <img alt='' className='card-img-top' src={projectCode} />
                            <div class="text-white card-img-overlay">
                                <p className='h2 md-title text-light card-title'>
                                    {t("project.formbuilder.title")}
                                </p>
                                <a href="https://github.com/abass-dev/BenOSP-FormBuilder" class="btn mt-2 text-primary btn-primary-outline btn-sm card-dark"><i className='fa fa-github'></i> Code</a>
                                    <a className='text-center' href="https://packagist.org/packages/benosp/formbuilder" title="version"><img alt='' src="https://img.shields.io/packagist/v/benosp/formbuilder.svg?style=flat-square" /></a>
                                {" "}
                                <a href="https://github.com/abass-dev/BenOSP-FormBuilder/blob/master/LICENSE" title="license"><img alt='' src="https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square" /></a>

                                {" "}
                                <a href="https://github.com/abass-dev/BenOSP-FormBuilder/issues"><img alt="Issues" src="https://img.shields.io/github/issues/abass-dev/BenOSP-FormBuilder?color=0088ff" /></a>
                            </div>
                            <div className='card-body'>
                                <i className='fw-bold fa fa-code'></i>
                                <span className='fw-lighter'>
                                    {" "}
                              PHP, HTML, Bootstrap
                          </span>
                                <p className='md-title'>
                                    {t("project.formbuilder.description")}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-6 mb-4'>
                        <div className='card border-secondary'>
                            <img alt='' className='card-img-top' src={projectPortfolio} />
                            <div class="text-white card-img-overlay">
                                <p className='h2 md-title text-light card-title'>
                                    {t("project.portfolio.title")}
                                </p>
                                <a href="https://github.com/abass-dev/portfolio" class="btn mt-2 text-primary btn-primary-outline btn-sm card-dark"><i className='fa fa-github'></i> Code</a>
                                {" "}
                                <a href="https://github.com/abass-dev/portfolio/blob/master/LICENSE" title="license"><img alt='' src="https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square" /></a>
                                {" "}
                                <a href="https://github.com/abass-dev/portfolio/issues"><img alt="Issues" src="https://img.shields.io/github/issues/abass-dev/portfolio?color=0088ff" /></a>
                            </div>
                            <div className='card-body card-dark text-light'>
                                <i className='fw-bold fa fa-code'></i>
                                <span className='fw-lighter'>
                                    {" "}
                                    React, NodeJs, Express
                                </span>
                                <p className='md-title'>
                                    {t("project.portfolio.description")}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-6 mb-4'>
                        <div className='card border-secondary'>
                            <img alt='' className='card-img-top' src={projectCode} />
                            <div class="text-white card-img-overlay">
                                <p className='h2 md-title text-light card-title'>
                                    {t("project.dynacard.title")}
                                </p>
                                <a href="https://github.com/abass-dev/dynacard" class="btn mt-2 text-primary btn-primary-outline btn-sm card-dark"><i className='fa fa-github'></i> Code</a>
                                {" "}
                                <a href="https://github.com/abass-dev/dynacard/blob/master/LICENSE" title="license"><img alt='' src="https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square" /></a>
                                {" "}
                                <a href="https://github.com/abass-dev/dynacard/issues"><img alt="Issues" src="https://img.shields.io/github/issues/abass-dev/dynacard?color=0088ff" /></a>
                            </div>
                            <div className='card-body card-dark text-light'>
                                <i className='fw-bold fa fa-code'></i>
                                <span className='fw-lighter'>
                                    {" "}
                                    JavaScript
                                </span>
                                <p className='md-title'>
                                    {t("project.dynacard.description")}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-6 mb-4'>
                        <div className='card border-secondary'>
                            <img alt='' className='card-img-top' src={projectReactNative1} />
                            <div class="text-white card-img-overlay">
                                <p className='h2 md-title text-light card-title'>
                                    {t("project.reactnative1.title")}
                                </p>
                                <a href="https://github.com/abass-dev/portfolio-with-react-native" class="btn mt-2 text-primary btn-primary-outline btn-sm card-dark"><i className='fa fa-github'></i> Code</a>
                                {" "}
                                <a href="https://github.com/abass-dev/portfolio-with-react-native/blob/master/LICENSE" title="license"><img alt='' src="https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square" /></a>
                                {" "}
                                <a href="https://github.com/abass-dev/portfolio-with-react-native/issues"><img alt="Issues" src="https://img.shields.io/github/issues/abass-dev/portfolio-with-react-native?color=0088ff" /></a>
                            </div>
                            <div className='card-body text-dark'>
                                <i className='fw-bold fa fa-code'></i>
                                <span className='fw-lighter'>
                                    {" "}
                                    ReactNative
                                </span>
                                <p className='md-title'>
                                    {t("project.reactnative1.description")}
                                </p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}