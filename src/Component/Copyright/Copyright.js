import React, { useState, useEffect, useContext } from 'react'
import Nav from '../Nav'
import { ThemeContext } from '../../Context/ThemeProvider'
import Footer from '../Footer'

export default function Copyright() {
  const { theme } = useContext(ThemeContext)
  const [storedTheme, setStoredTheme] = useState('dark')
  const localStorage = window.localStorage

  useEffect(() => {
    let sthm = localStorage.getItem('theme')
    if (sthm) {
      setStoredTheme(sthm)
    }
  }, [theme, localStorage])

  const metaData = { title: 'Copyright' }

  return (
    <>
      <Nav metaData={metaData} action='copyright' />
      <div id={storedTheme && storedTheme}>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <h1 className='mt-4 primary-text primary-font ff-ubuntu'>Copyright</h1>
              <p className='after-title'></p>
              <div className='card border-0 shadow-sm'>
                <div className='card-body'>
                  <div>
                    <h2 className='h3'>© {new Date().getFullYear()} Abass Dev. All rights reserved.</h2>
                    <p>
                      The materials and content displayed on this website, including but not limited to text, graphics,
                      logos, images, videos, and software, are the property of Abass Dev or its content suppliers and
                      are protected by international copyright laws. Reproduction, modification, distribution, or any
                      other form of exploitation of the materials and content on this website is prohibited without
                      express written consent from Abass Dev.
                    </p>
                    <p>
                      The information and materials provided on this website are for general informational purposes only
                      and do not constitute professional advice. While Abass Dev strives to keep the information on this
                      website accurate and up-to-date, we make no representations or warranties of any kind, express or
                      implied, about the completeness, accuracy, reliability, suitability, or availability with respect
                      to the website or the information, products, services, or related graphics contained on the
                      website for any purpose. Any reliance you place on such information is therefore strictly at your
                      own risk.
                    </p>
                    <p>
                      In no event will Abass Dev be liable for any loss or damage including without limitation, indirect
                      or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or
                      profits arising out of, or in connection with, the use of this website.
                    </p>
                    <p>
                      Through this website, you are able to link to other websites which are not under the control of
                      Abass Dev. We have no control over the nature, content, and availability of those sites. The
                      inclusion of any links does not necessarily imply a recommendation or endorse the views expressed
                      within them.
                    </p>
                    <p>
                      Every effort is made to keep the website up and running smoothly. However, Abass Dev takes no
                      responsibility for, and will not be liable for, the website being temporarily unavailable due to
                      technical issues beyond our control.
                    </p>
                    <p>Thank you for visiting our website. We hope you find it informative and useful.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer report='Copyright/Copyright.js' />
      </div>
    </>
  )
}
