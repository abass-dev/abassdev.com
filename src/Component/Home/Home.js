import Nav from '../Nav/Nav'
import { Profile, Work, Project, MyStory, Skill, LatestPosts, Footer } from '../'
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
        <Work />
        <Skill />
        <LatestPosts />
      </div>
      <Footer />
    </div>
  )
}

export default Home
