import { Profile, Skill, Project, Work, Footer } from '../'
import { LatestPosts } from '../Blog'
import { CookieAlertBox } from '../Cookies'
import Toggle from 'react-toggle'
import { FaCloudMoon, FaSun } from "react-icons/fa";
import Nav from '../Nav/Nav'
import { SunIcon } from '@primer/octicons-react'
import { useContext, useState, useEffect } from 'react'
import { ThemeContext } from '../../Context/ThemeProvider'
import "./Home.css";

const Home = () => {
  const {theme, toggleTheme} = useContext(ThemeContext)
  const [storedTheme, setStoredTheme] = useState('light')
  const localStorage = window.localStorage
  
  useEffect(() => {
    let sthm = localStorage.getItem('theme')
    if (sthm) {
      setStoredTheme(sthm)
    }
  }, [theme])
  function handlerToggle(e) {
      toggleTheme()
  }
  return (
    <>
    <Nav />
     <div id={storedTheme} className="container-lg">
       <div style={{
         position: 'fixed',
         bottom: '10px',
         right: '10px',
         zIndex: 1000
       }}> 
        </div>
        <Profile />
        <Project />
        <Skill />
        <Work />
        <LatestPosts />
        <Footer />
      </div>
      </>
  );
};

export default Home;
