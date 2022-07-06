import React, { useState } from 'react'
import Nav from '../Nav/Nav'
import Profile from '../Profile/Profile'
import Skill from '../Skill/Skill'
import { bootstrap } from 'bootstrap'
import Project from '../Project/Project'
import Work from '../Work/Work'
import { useCookies } from 'react-cookie';
import Footer from '../Footer/Footer'
import i18n from "../../i18n"
import './Home.css'
const Home = () => {
  const [cookie, setCookie] = useCookies(['alertbox'])
  const cookExpire = 3600 * 10
  const handle = () => {
    setCookie('alertbox', "showBox", { maxAge: cookExpire })
  }
  const showCookieBox = () => {
    if (!cookie.alertbox) {
      return (
        <div className="showcookie">
          <p><span className="text-warning bg-light">NOTE:</span>{" "} This Website uses Google cookies to provide services and analyze traffic.
            {" "}<a href="https://policies.google.com/technologies/cookies?hl=en-US">Learn abou it</a>
          </p>
          <button className="btn btn-outline-danger" onClick={handle}>OK</button>
        </div>
      )
    } else {
      return null
    }

  }

  return (
    <div className='container-fluid'>
      <Nav />
      <Profile />
      <Project />
      <Skill />
      <Work />
      {showCookieBox()}
      <Footer />
    </div>
  )
}

export default Home