import React, { useContext, useEffect, useState } from 'react'
import ContactForm from '../ContactForm'
import { NavLink, Link } from 'react-router-dom'
import { ThemeContext } from '../../Context/ThemeProvider'
import './Footer.css'
import Report from '../Report'

export default function Footer({ desableContacForm, report }) {
  const packageJson = require('../../../package.json')
  const appVersion = packageJson.version
  const { theme } = useContext(ThemeContext)
  const [storedTheme, setStoredTheme] = useState('light')
  const localStorage = window.localStorage

  useEffect(() => {
    let sthm = localStorage.getItem('theme')
    if (sthm) {
      setStoredTheme(sthm)
    }
  }, [theme])

  return (
    <>
      <Report report={report} />
      <footer id={storedTheme && storedTheme} className='container-lg mt-5'>
        <div className='container'>
          <div className='row'>
            {desableContacForm ? (
              ''
            ) : (
              <div className='col-md-6 mb-4 mt-4 text-center'>
                <ContactForm />
              </div>
            )}
            <div
              className={`f-ubuntu p-5 text-white ${
                desableContacForm ? 'col-12' : 'col-md-6'
              } d-flex flex-column align-items-center text-center justify-content-center`}
            >
              <h3 className='primary-text mb-4 mt-4 primary-font'>What's Next?</h3>
              <h4>Let's Connect.</h4>
              <p>
                <span className='h1 primary-text'>I</span>f you have a suggestion, feedback, opportunity, or are
                interested in collaborating on a project, we would love to hear from you! Please feel free to reach out
                to us using the contact details provided below. If you are expecting a reply, kindly mention your
                contact details in your message.
              </p>
              <div className='profile-socieal-links mb-4'>
                <Link className='text-light' aria-label='my facebook' to='https://m.facebook.com/abassthedev'>
                  <i className='fa fa-facebook'></i>
                </Link>
                <Link className='text-light' aria-label='my Twitter' to='https://twitter.com/abass_dev'>
                  <i className='fa fa-twitter'></i>
                </Link>
                <Link className='text-light' aria-label='my github' to='https://github.com/abass-dev'>
                  <i className='fa fa-github'></i>
                </Link>
                <Link className='text-light' aria-label='my linkedin' to='https://www.linkedin.com/in/abassdev'>
                  <i className='fa fa-linkedin'></i>
                </Link>
                <Link className='text-light' aria-label='my instagram' to='https://www.instagram.com/abassdev'>
                  <i className='fa fa-instagram'></i>
                </Link>
                <Link className='text-light' aria-label='my pinterest' to='https://www.pinterest.com/abassdev'>
                  <i className='fa fa-pinterest'></i>
                </Link>
                <Link className='text-light' aria-label='contact me' to='/contact'>
                  <i className='fa fa-envelope'></i>
                </Link>
              </div>
              <h3 className='h4 primary-font primary-text'>Others</h3>
              <div className='row'>
                <div className='col-6'>
                  <div className='p-1'>
                    <Link className='link-secondary' to='/privacy-policy'>
                      Privacy Policy
                    </Link>
                  </div>
                </div>
                <div className='col-6'>
                  <div className=''>
                    <Link className='link-secondary' to='/contact'>
                      Contact me
                    </Link>
                  </div>
                </div>
                <div className='col-6'>
                  <div className=''>
                    <Link className='link-secondary' to='/copyright'>
                      Legal
                    </Link>
                  </div>
                </div>
                <div className='col-6'>
                  <div className=''>
                    <Link className='link-secondary' to='/my-story'>
                      My story
                    </Link>
                  </div>
                </div>
                <div className='col-12'>
                  <div className=''>
                    <Link className='link-secondary' to='/login'>
                      Login
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <p className='copyright ff-ubuntu p-4 text-white'>
              <Link to='/copyright'>Copyright</Link> © 2021 - {new Date().getFullYear()} Abass Dev. All rights reserved.{' '}
              <br /> Current version: {appVersion}
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
