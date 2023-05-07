import React, { useRef, useContext, useState, useEffect } from 'react'
import projectCode from '../../assets/images/project-nigatedev.webp'
import projectPortfolio from '../../assets/images/project-portfolio.webp'
import projectSocialContributionApp from '../../assets/images/social_contribution_app.webp'
import projectFakaray from '../../assets/images/fakaray.webp'
import projectPHPCode from '../../assets/images/php_code.webp'
import projectReactNative1 from '../../assets/images/screenshot.webp'
import { SingleSlideAnim } from '../Util/Util'
import { Footer, Nav } from '../'
import { ThemeContext } from '../../Context/ThemeProvider'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import './Project.css'

export default function Project({ pathName }) {
  const nigaPHPRef = useRef(null)
  const portfolioRef = useRef(null)
  const formBuilderRef = useRef(null)
  const fakarayRef = useRef(null)
  const dinacardRef = useRef(null)
  const socialAppRef = useRef(null)
  const portfolioApkRef = useRef(null)

  SingleSlideAnim(nigaPHPRef, '.projetRefId')
  SingleSlideAnim(portfolioRef, '.projetRefId')
  SingleSlideAnim(formBuilderRef, '.projetRefId')
  SingleSlideAnim(dinacardRef, '.projetRefId')
  SingleSlideAnim(fakarayRef, '.projetRefId')

  const { theme, toggleTheme } = useContext(ThemeContext)
  const [storedTheme, setStoredTheme] = useState('light')
  const localStorage = window.localStorage

  useEffect(() => {
    let sthm = localStorage.getItem('theme')
    if (sthm) {
      setStoredTheme(sthm)
    }
  }, [theme])

  const metaData = {
    title: 'Projects',
  }

  return (
    <div id={pathName ? storedTheme : ''}>
      {pathName && <Nav metaData={metaData} active={'projects'} />}

      <div className='home-container mt-4'>
        <div className='container-lg'>
          <div className='row'>
            <div className='col-md-12'>
              <h1 id='projects' className={`mb-4 primary-text primary-font ${!pathName && 'text-center'}`}>
                Notable projects
              </h1>
              {pathName && <p className='text-center after-title'></p>}
            </div>
            <div ref={nigaPHPRef} className='col-md-6 mb-4'>
              <div className='projetRefId card border-0 shadow-sm slide-first'>
                <div className='card-body'>
                  <LazyLoadImage
                    width={'100%'}
                    height={'auto'}
                    alt={'NigaPHP framework'}
                    effect='blur'
                    className='rounded'
                    src={projectPHPCode} // use normal <img> attributes as props
                  />
                  <h2 className='md-title mt-3 h4 '>NigaPHP Framework</h2>
                  <i className='fw-bold fa fa-code'></i>{' '}
                  <span className='fw-lighter'>PHP, JavaScript, Sass, Shell, Twig</span>
                  <p>
                    <a
                      href='http://github.com/nigatedev/nigatedev'
                      class='btn mt-2 bg-light text-dark  text-primary btn-primary-outline btn-sm'
                    >
                      <i className='fa fa-github'></i> Code
                    </a>{' '}
                    <a
                      className='text-center'
                      href='https://packagist.org/packages/nigatedev/nigatedev'
                      title='version'
                    >
                      <img
                        alt='NigaPHP Framework'
                        src='https://img.shields.io/packagist/v/nigatedev/nigatedev.svg?style=flat-square'
                      />
                    </a>{' '}
                    <a href='https://github.com/nigatedev/nigatedev/blob/master/LICENSE' title='license'>
                      <img
                        alt='NigaPHP Framework License'
                        src='https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square'
                      />
                    </a>{' '}
                    <a href='https://github.com/nigatedev/nigatedev/issues'>
                      <img
                        alt='Report NigaPHP Framework Issues'
                        src='https://img.shields.io/github/issues/nigatedev/nigatedev?color=0088ff'
                      />
                    </a>
                  </p>
                  <p className='md-title'>
                    NigaPHP is a lightweight PHP web application framework designed to simplify and speed up the
                    development process for PHP developers. It was initially created by Abass Dev and has since been
                    maintained and contributed to by a community of developers. With its user-friendly interface and
                    powerful features, NigaPHP has become a popular choice for building scalable and secure web
                    applications.
                  </p>
                  Let's discover{' '}
                  <a href='https://docs.nigaphp.abassdev.com/'>
                    <strong>NigaPHP Framework in 5 minutes.</strong>
                  </a>
                </div>
              </div>
            </div>

            <div ref={formBuilderRef} className='col-md-6 mb-4'>
              <div className='projetRefId slide-second card border-0 shadow-sm'>
                <div className='card-body '>
                  <LazyLoadImage
                    alt={'BOSP FormBuilder'}
                    width={'100%'}
                    height={'auto'}
                    effect='blur'
                    className='rounded'
                    src={projectCode} // use normal <img> attributes as props
                  />
                  <h2 className='md-title mt-3'>Form builder</h2>
                  <p>
                    <i className='fw-bold fa fa-code'></i>
                    <span className='fw-lighter'> PHP, HTML, Bootstrap</span>
                  </p>
                  <p>
                    <a
                      href='https://github.com/abass-dev/BenOSP-FormBuilder'
                      class='btn mt-2 text-primary btn-primary-outline btn-sm bg-light text-dark '
                    >
                      <i className='fa fa-github'></i> Code
                    </a>{' '}
                    <a className='text-center' href='https://packagist.org/packages/benosp/formbuilder' title='version'>
                      <img alt='' src='https://img.shields.io/packagist/v/benosp/formbuilder.svg?style=flat-square' />
                    </a>{' '}
                    <a href='https://github.com/abass-dev/BenOSP-FormBuilder/blob/master/LICENSE' title='license'>
                      <img
                        alt='BOSP Formbuilder License'
                        src='https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square'
                      />
                    </a>{' '}
                    <a href='https://github.com/abass-dev/BenOSP-FormBuilder/issues'>
                      <img
                        alt='Issues'
                        src='https://img.shields.io/github/issues/abass-dev/BenOSP-FormBuilder?color=0088ff'
                      />
                    </a>
                  </p>
                  <p className='md-title'>
                    Looking for a user-friendly solution for building HTML forms? Check out Form Builder, an open-source
                    project created by Abass Dev. The project is built with PHP and styled using Bootstrap CSS, making
                    it simple to create custom forms with ease.
                  </p>
                  <p>
                    Live demo on <a href='https://nigatedev.herokuapp.com/todo'>( Todo list )</a>
                  </p>
                </div>
              </div>
            </div>

            <div ref={fakarayRef} className='col-md-6 mb-4'>
              <div className='projetRefId slide-second card border-0 shadow-sm'>
                <div className='card-body '>
                  <LazyLoadImage
                    alt={'Fakaray'}
                    width={'100%'}
                    height={'auto'}
                    effect='blur'
                    className='rounded'
                    src={projectFakaray} // use normal <img> attributes as props
                  />
                  <h2 className='md-title mt-3'>Fakaray</h2>
                  <p>
                    <i className='fw-bold fa fa-code'></i>
                    <span className='fw-lighter'> React, Firebase, SASS</span>
                  </p>
                  <p className='md-title'>
                    Fakaray is a user-friendly chat application that enables seamless communication between friends and
                    family. With its intuitive interface and robust features, Fakaray offers a chat experience that is
                    comparable to that of other popular chat apps on the market.
                  </p>
                </div>
              </div>
            </div>

            <div ref={portfolioRef} className='col-md-6 mb-4'>
              <div className='projetRefId card border-0 shadow-sm slide-first'>
                <div className='card-body'>
                  <LazyLoadImage
                    width={'100%'}
                    height={'auto'}
                    alt={'Abass Dev portfolio'}
                    effect='blur'
                    className='rounded'
                    src={projectPortfolio} // use normal <img> attributes as props
                  />
                  <h2 className='md-title h4 mt-3'>My portfolio (abassdev.com)</h2>
                  <p>
                    <i className='fw-bold fa fa-code'></i>
                    <span className='fw-lighter'> React, NodeJs, Express & Firebase</span>
                  </p>
                  <p>
                    <a
                      href='https://github.com/abass-dev/abassdev.com'
                      class='btn mt-2 text-primary btn-primary-outline btn-sm bg-light text-dark '
                    >
                      <i className='fa fa-github'></i> Code
                    </a>{' '}
                    <a href='https://github.com/abass-dev/abassdev.com/blob/master/LICENSE' title='license'>
                      <img alt='' src='https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square' />
                    </a>{' '}
                    <a href='https://github.com/abass-dev/abassdev.com/issues'>
                      <img
                        alt='Issues'
                        src='https://img.shields.io/github/issues/abass-dev/abassdev.com?color=0088ff'
                      />
                    </a>
                  </p>
                  <p className='md-title'>This portfolio was build using ReactJs.</p>
                  <p>
                    By using ReactJs, the developer can create reusable UI components that can be used across the entire
                    application, making it easier to maintain and update. ReactJs also provides a virtual DOM (Document
                    Object Model) that allows for faster updates to the user interface compared to traditional web
                    development techniques.
                  </p>
                  <a href='https://abassdev.com/'>Go live...</a>
                </div>
              </div>
            </div>

            <div ref={dinacardRef} className='col-md-6'>
              <div className='projetRefId slide-second card border-0 shadow-sm'>
                <div className='card-body '>
                  <LazyLoadImage
                    width={'100%'}
                    height={'auto'}
                    alt={'Dynacard'}
                    effect='blur'
                    className='rounded'
                    src={projectCode} // use normal <img> attributes as props
                  />
                  <h2 className='md-title mt-3 h4 '>Dynacard</h2>
                  <p>
                    <i className='fw-bold fa fa-code'></i>
                    <span className='fw-lighter'> JavaScript</span>
                  </p>
                  <p>
                    <a
                      href='https://github.com/abass-dev/dynacard'
                      class='btn mt-2 text-primary btn-primary-outline btn-sm bg-light text-dark '
                    >
                      <i className='fa fa-github'></i> Code
                    </a>{' '}
                    <a href='https://github.com/abass-dev/dynacard/blob/master/LICENSE' title='license'>
                      <img alt='' src='https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square' />
                    </a>{' '}
                    <a href='https://github.com/abass-dev/dynacard/issues'>
                      <img alt='Issues' src='https://img.shields.io/github/issues/abass-dev/dynacard?color=0088ff' />
                    </a>
                  </p>
                  <p className='md-title'>
                    Dynacard is a React Native library that enables developers to effortlessly design visually stunning
                    cards for their applications. This open-source library provides a flexible and customizable platform
                    for creating beautiful cards within your React Native project.
                  </p>
                  <p>
                    Live demo
                    <a href='https://abassdev.com/abassdev.apk'> abassdev.apk ( Install the app here )</a>
                  </p>
                </div>
              </div>
            </div>

            {pathName && (
              <>
                {SingleSlideAnim(portfolioApkRef, '.projetRefId')}
                {SingleSlideAnim(socialAppRef, '.projetRefId')}
                <div ref={socialAppRef} className='col-md-6 mb-4'>
                  <div className='card projetRefId slide-first border-0 shadow-sm'>
                    <div className='card-body '>
                      <LazyLoadImage
                        width={'100%'}
                        height={'auto'}
                        alt={'Social contribution'}
                        effect='blur'
                        className='rounded'
                        src={projectSocialContributionApp} // use normal <img> attributes as props
                      />
                      <h2 className='md-title mt-3 h4 '>Social contribution app</h2>
                      <p>
                        <i className='fw-bold fa fa-code'></i>
                        <span className='fw-lighter'> React Native</span>
                      </p>
                      <p></p>
                      <p className='md-title'>Source: private repository</p>
                    </div>
                  </div>
                </div>

                <div ref={portfolioApkRef} className='col-md-6 mb-1'>
                  <div className='card projetRefId slide-second border-0 shadow-sm'>
                    <div className='card-body '>
                      <LazyLoadImage
                        width={'100%'}
                        height={'auto'}
                        alt={'React Native app'}
                        effect='blur'
                        className='rounded'
                        src={projectReactNative1} // use normal <img> attributes as props
                      />
                      <h2 className='md-title mt-3 h4 '>Android Application</h2>
                      <p>
                        <i className='fw-bold fa fa-code'></i>
                        <span className='fw-lighter'> ReactNative</span>
                      </p>
                      <p>
                        <a
                          href='https://github.com/abass-dev/portfolio-with-react-native'
                          class='btn mt-2 text-primary btn-primary-outline btn-sm bg-light text-dark '
                        >
                          <i className='fa fa-github'></i> Code
                        </a>{' '}
                        <a
                          href='https://github.com/abass-dev/portfolio-with-react-native/blob/master/LICENSE'
                          title='license'
                        >
                          <img
                            alt=''
                            src='https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square'
                          />
                        </a>{' '}
                      </p>
                      <p className='md-title'>
                        Transform my portfolio into an interactive Android app with the power of React Native.
                      </p>
                      <a href='https://abassdev.com/abassdev.apk'> Download the Apk</a>
                    </div>
                  </div>
                </div>
              </>
            )}
            {!pathName && (
              <a className='mb-4 mt-1' href='/projects'>
                See more projects...
              </a>
            )}
          </div>
        </div>
      </div>
      {pathName && <Footer report='Project/Project.js' />}
    </div>
  )
}
