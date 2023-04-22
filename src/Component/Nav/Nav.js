import { useContext, useEffect, useState } from 'react'
import { ListUnorderedIcon } from '@primer/octicons-react'
import Toggle from 'react-toggle'
import { NavLink } from 'react-router-dom'
import { FaCloudMoon, FaSun } from 'react-icons/fa'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { ThemeContext } from '../../Context/ThemeProvider'
import { ScrollUpButton } from '../UI/Button'
import { ProgressBar } from '../UI/Progressbar'
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { AllInOneDropdownNav, DropdownNav, PortfolioDropdownNav } from './DropdownNav'
import './Nav.css'

export default function Nav({ metaData, active }) {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const [storedTheme, setStoredTheme] = useState('light')
  const localStorage = window.localStorage

  // Define state to keep track of the active link
  const [activeLink, setActiveLink] = useState('home')

  // Define a click event handler for the navigation links
  function handleClick(event) {
    // Prevent the default link behavior
    // event.preventDefault();

    // Set the active link based on the link that was clicked
    setActiveLink(event.target.hash.slice(1))
  }

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
      <ProgressBar color={storedTheme} />
      <ScrollUpButton />

      {metaData && (
        <Helmet>
          <meta name='theme-color' content={`${storedTheme === 'light' ? '#ffffff' : '#020113'}`} />
          <title>Abass Dev - {metaData.title}</title>
        </Helmet>
      )}
      <nav
        className={`navbar sticky-top navbar-expand-md nav-bar-opacity navbar-${storedTheme} ${storedTheme} shadow-sm`}
      >
        <div className='container-fluid'>
          <NavLink aria-label='Logo' className='navbar-brand' to='/'>
            <LazyLoadImage
             style={{borderRadius: '100%'}}
              alt='Logo'
              width='37px'
              height='37px'
              src={'https://firebasestorage.googleapis.com/v0/b/abassdev-com.appspot.com/o/logo.webp?alt=media&token=3af98e3a-57ca-4e65-9694-86b1de7262de'}
            />
          </NavLink>

          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarText'
            aria-controls='navbarText'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <ListUnorderedIcon size={25} />
          </button>
          <div className='collapse navbar-collapse primary-font' id='navbarText'>
            <ul className='navbar-nav me-auto justify-content-center'>
              <li className='nav-item'>
                <NavLink
                  onClick={handleClick}
                  className={`nav-link`}
                  aria-current='page'
                  to='/'
                >
                  <i className='fa fa-address-card'></i> About
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className={`nav-link`} aria-current='page' to='/my-story'>
                  <i className='fa fa-history'></i> My Story
                </NavLink>
              </li>

              <li className='nav-item'>
                <NavLink className={`nav-link`} to='/contact'>
                  <i className='fa fa-envelope'></i> Contact
                </NavLink>
              </li>
              <PortfolioDropdownNav active={active} activeLink={activeLink} handleClick={handleClick} />
              <AllInOneDropdownNav />
              <DropdownNav />
              <li className='nav-item'>
                <NavLink aria-label='contact me' className='nav-link'>
                  <Toggle
                    aria-label='Toggle dark mode'
                    icons={{
                      checked: <FaSun color='white' size={10} />,
                      unchecked: <FaCloudMoon color='white' size={10} />,
                    }}
                    checked={storedTheme === 'light' ? false : true}
                    onChange={handlerToggle}
                  />
                </NavLink>
              </li>
            </ul>
            <ul className='navbar-nav flex-row d-flex justify-content-around align-items-center'>
              <li className='nav-item'>
                <NavLink className='btn btn-outline-success btn-sm' to='https://blog.abassdev.com'>
                  BLOG
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink aria-label='my facebook' className='nav-link' to='https://m.facebook.com/abassthedev'>
                  <i style={{ fontSize: 24 }} className='fa fa-facebook'></i>
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink aria-label='my github' className='nav-link' to='https://github.com/abass-dev'>
                  <i style={{ fontSize: 24 }} className='fa fa-github'></i>
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink aria-label='Login' className='nav-link' to='/login'>
                  <i style={{ fontSize: 24 }} className='fa fa-user'></i>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
