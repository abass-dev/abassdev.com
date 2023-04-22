import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'react-toggle/style.css' // for ES6 modules
// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'
// Bootstrap Bundle JS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import { CookiesProvider } from 'react-cookie'
import PrivacyPolicy from './Component/PrivacyPolicy/PrivacyPolicy'
import MyStory from './Component/MyStory/MyStory'
import Project from './Component/Project/Project'
import Contact from './Component/Contact'
import Copyright from './Component/Copyright'
import NotFound from './Component/NotFound/NotFound'
import { CookieAlertBox } from './Component/Cookies'
import reportWebVitals from './reportWebVitals'
import TagManager from 'react-gtm-module'
import ThemeProvider from './Context/ThemeProvider'
import { Loading } from './Component/UI'
import { ReactInOne } from './Component/AllInOne'
import Login from './Component/Auth/Login'
import './index.css'

const tagManagerArgs = {
  gtmId: 'G-N8ZTB9NPSP',
}
TagManager.initialize(tagManagerArgs)

const pathName = window.location.pathname

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <HelmetProvider>
        <CookiesProvider>
          <Suspense fallback={<Loading />}>
            <CookieAlertBox />
            <BrowserRouter>
              <Routes>
                <Route exact path='/' element={<App />} />
                <Route exact path='/my-story' element={<MyStory pathName={pathName} />} />
                <Route exact path='/contact' element={<Contact pathName={pathName} />} />
                <Route exact path='/copyright' element={<Copyright pathName={pathName} />} />
                <Route exact path='/privacy-policy' element={<PrivacyPolicy pathName={pathName} />} />
                <Route exact path='/projects' element={<Project pathName={pathName} />} />
                <Route exact path='/dev-blog/reactjs-in-one' element={<ReactInOne pathName={pathName} />} />
                <Route exact path='/login' element={<Login pathName={pathName} />} />
                <Route exact path='*' element={<NotFound pathName={pathName} />} />
                <Route exact path='*/*' element={<NotFound pathName={pathName} />} />
                <Route exact path='*/*/*' element={<NotFound pathName={pathName} />} />
              </Routes>
            </BrowserRouter>
          </Suspense>
        </CookiesProvider>
      </HelmetProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)

reportWebVitals()
