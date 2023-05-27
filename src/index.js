import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'react-toggle/style.css' // for ES6 modules
// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'
// Bootstrap Bundle JS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import { CookiesProvider } from 'react-cookie'
import { CookieAlertBox } from './Component/Cookies'
import reportWebVitals from './reportWebVitals'
import TagManager from 'react-gtm-module'
import ThemeProvider from './Context/ThemeProvider'
import { Loading } from './Component/UI'
import './index.css'

const tagManagerArgs = {
  gtmId: 'G-N8ZTB9NPSP',
}

if (process.env.NODE_ENV !== 'development') {
  TagManager.initialize(tagManagerArgs)
}

const pathName = window.location.pathname

const MyStory = lazy(() => import('./Component/MyStory/MyStory'))
const Project = lazy(() => import('./Component/Project/Project'))
const Contact = lazy(() => import('./Component/Contact/Contact'))
const Calculator = lazy(() => import('./Component/Others/Calculator/Calculator'))
const PHPInOne = lazy(() => import('./Component/Blog/AllInOne/PHPInOne/PHPInOne'))
const ReactInOne = lazy(() => import('./Component/Blog/AllInOne/ReactInOne/ReactInOne'))
const ReactNativeInOne = lazy(() => import('./Component/Blog/AllInOne/ReactNativeInOne/ReactNativeInOne'))
const Copyright = lazy(() => import('./Component/Copyright/Copyright'))
const Login = lazy(() => import('./Component/Auth/Login'))
const PrivacyPolicy = lazy(() => import('./Component/PrivacyPolicy/PrivacyPolicy'))
const NotFound = lazy(() => import('./Component/NotFound/NotFound'))

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <HelmetProvider>
        <CookiesProvider>
          <Suspense fallback={<Loading />}>
            <CookieAlertBox />
            <BrowserRouter>
              <Routes>
                <Route path='/'>
                  <Route index element={<App />} />
                  <Route path='my-story' element={<MyStory pathName={pathName} />} />
                  <Route path='contact' element={<Contact pathName={pathName} />} />
                  <Route path='copyright' element={<Copyright pathName={pathName} />} />
                  <Route path='privacy-policy' element={<PrivacyPolicy pathName={pathName} />} />
                  <Route path='projects' element={<Project pathName={pathName} />} />
                  <Route path='calculator' element={<Calculator pathName={pathName} />} />
                  <Route path='php-in-one' element={<PHPInOne pathName={pathName} />} />
                  <Route path='reactjs-in-one' element={<ReactInOne pathName={pathName} />} />
                  <Route path='react-native-in-one' element={<ReactNativeInOne pathName={pathName} />} />
                  <Route path='login' element={<Login pathName={pathName} />} />
                  <Route path='*' element={<NotFound pathName={pathName} />} />
                </Route>
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
