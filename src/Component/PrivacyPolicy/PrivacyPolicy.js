import { useEffect, useState, useContext } from 'react'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
import { ThemeContext } from '../../Context/ThemeProvider'

export default function PrivacyPolicy({ pathName }) {
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
    title: 'Privacy policy',
  }

  return (
    <div id={storedTheme && storedTheme}>
      {pathName && <Nav metaData={metaData} />}
      <div className='container-lg pt-4'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <h1 className='primary-text primary-font ff-ubuntu'>Privacy Policy</h1>
              <p className='after-title'></p>
              <div className='card border-0 mt-4 mb-4 shadow-sm'>
                <div className='card-body'>
                  <h2 className='h3'>Privacy policy for abassdev.com</h2>
                  <p>
                    At abassdev.com, the privacy of our visitors is of utmost importance to us. This privacy policy
                    outlines the types of personal information that is received and collected by abassdev.com and how it
                    is used.
                  </p>
                </div>
              </div>
              <div className='card border-0 mb-4 shadow-sm'>
                <div className='card-body'>
                  <h2 className='h3'>Information We Collect</h2>
                  <p>
                    We may collect personal information such as your name, email address, and other contact details when
                    you fill out the contact form on our website. This information is collected solely for the purpose
                    of communicating with you regarding your inquiry or request.
                  </p>
                </div>
              </div>
              <div className='card border-0 mb-4 shadow-sm'>
                <div className='card-body'>
                  <p>
                    We may also collect non-personal information such as your IP address, browser type, operating
                    system, and the date and time of your visit. This information is used to analyze trends, administer
                    the site, track user's movement around the site, and gather demographic information.
                  </p>
                </div>
              </div>
              <div className='card border-0 mb-4 shadow-sm'>
                <div className='card-body'>
                  <h2 className='h3'>Google Services</h2>
                  <p>
                    We use Google Analytics to collect information about how visitors use our website. Google Analytics
                    collects information such as how often users visit our website, what pages they visit when they do
                    so, and what other sites they used prior to coming to our website. We use the information we get
                    from Google Analytics to improve our website and services.
                  </p>
                  <p>
                    We also use Google Search Console to monitor and optimize the performance of our website in Google
                    search results. Google Search Console collects information such as search queries, click-through
                    rates, and website errors.
                  </p>
                  <p>
                    Google may use cookies to collect information about your use of our website. You can learn more
                    about how Google uses cookies by visiting Google's{' '}
                    <a href='https://policies.google.com/privacy?hl=en-US'>Privacy & Terms</a> page.
                  </p>
                </div>
              </div>
              <div className='card border-0 mb-4 shadow-sm'>
                <div className='card-body'>
                  <h2 className='h3'>Security</h2>
                  <p>
                    We take reasonable steps to protect the personal information we collect from unauthorized access,
                    disclosure, alteration, or destruction. However, no website can be completely secure, so we cannot
                    guarantee the security of your personal information.
                  </p>
                </div>
              </div>
              <div className='card border-0 mb-4 shadow-sm'>
                <div className='card-body'>
                  <h2 className='h3'>Changes to this Privacy Policy</h2>
                  <p>
                    We may update this privacy policy from time to time. We will notify you of any changes by posting
                    the new privacy policy on this page. You are advised to review this privacy policy periodically for
                    any changes.
                  </p>
                </div>
              </div>
              <div className='card border-0 mb-4 shadow-sm'>
                <div className='card-body'>
                  <h2 className='h3'>Contact Us</h2>
                  <p>
                    If you have any questions about this privacy policy, please <a href='/contact'>contact us</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer report='PrivacyPolicy/PrivacyPolicy.js' />
    </div>
  )
}
