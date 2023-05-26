import Nav from '../Nav/Nav'
import { Profile, Services, Project, MyStory, Skill, LatestPosts, Footer, FAQ } from '../'
import Shortcodes from '../Blog/Shortcodes/Shortcodes'
import { useContext, useState, useEffect } from 'react'
import { ThemeContext } from '../../Context/ThemeProvider'
import './Home.css'

const Home = () => {
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
    <div id={storedTheme}>
      <Nav active={'home'} />
      <div className='container-lg'>
        <Profile />
        <MyStory />
        <Project />
        <Services />
        <Skill />
        <LatestPosts />
        <Shortcodes />
        <FAQ />
      </div>
      <Footer />
    </div>
  )
}

export default Home
