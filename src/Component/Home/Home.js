import { lazy, Suspense } from 'react'
import { CookieAlertBox } from '../Cookies'
import Toggle from 'react-toggle'
import { Loading } from '../UI'
import { FaCloudMoon, FaSun } from 'react-icons/fa'
import Nav from '../Nav/Nav'
import { SunIcon } from '@primer/octicons-react'
import { useContext, useState, useEffect } from 'react'
import { ThemeContext } from '../../Context/ThemeProvider'
import './Home.css'

const Home = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
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
  const Profile = lazy(() => import('../Profile/Profile'))
  const MyStory = lazy(() => import('../MyStory/MyStory'))
  const Project = lazy(() => import('../Project/Project'))
  const Skill = lazy(() => import('../Skill/Skill'))
  const Work = lazy(() => import('../Work/Work'))
  const LatestPosts = lazy(() => import('../Blog/LatestPosts'))
  const Footer = lazy(() => import('../Footer/Footer'))
  return (
    <div id={storedTheme}>
      <Nav active={'home'} />
      <div className='container-lg'>
        <Suspense fallback={<Loading />}>
          <Profile />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <MyStory />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <Project />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <Skill />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <Work />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <LatestPosts />
        </Suspense>
      </div>
      <Suspense fallback={<Loading />}>
        <Footer />
      </Suspense>
    </div>
  )
}

export default Home
