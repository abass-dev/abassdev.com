import { NavLink, Link } from 'react-router-dom'
import SearchShortcodes from '../Blog/Search/SearchShortcodes'
import { Navigate } from 'react-router-dom'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'

export function DropdownNav() {
  return (
    <li className='nav-item dropdown'>
      <Link
        className='nav-link dropdown-toggle'
        to='#'
        id='navbarDarkDropdownMenuLink2'
        role='button'
        data-bs-toggle='dropdown'
        aria-expanded='false'
      >
        <i className='fa fa-bug'></i> Apps & Others
      </Link>
      <ul className='dropdown-menu dropdown-menu-dark' aria-labelledby='navbarDarkDropdownMenuLink2'>
        <li>
          <a className='dropdown-item' href='/repo-inspector'>
            <i className='fa fa-bomb'></i> Repo Inspector
          </a>
        </li>
        <li>
          <a className='dropdown-item' href='/calculator'>
            <i className='fa fa-calculator'></i> Calculator
          </a>
        </li>
        <li>
          <a className='dropdown-item' href='/#faq'>
            <i className='fa fa-question'></i> FAQs
          </a>
        </li>
        <li>
          <NavLink className='dropdown-item' to='/copyright'>
            <i className='fa fa-gavel'></i> Legal
          </NavLink>
        </li>
        <li>
          <NavLink className='dropdown-item' to='/privacy-policy'>
            <i className='fa fa-shield'></i> Privacy policy
          </NavLink>
        </li>
      </ul>
    </li>
  )
}
export function PortfolioDropdownNav({ active, activeLink, handleClick }) {
  return (
    <li className='nav-item dropdown'>
      <Link
        className='nav-link dropdown-toggle'
        to='#'
        id='navbarDarkDropdownMenuLink3'
        role='button'
        data-bs-toggle='dropdown'
        aria-expanded='false'
      >
        <i className='fa fa-folder'></i> Portfolio
      </Link>
      <ul className='dropdown-menu dropdown-menu-dark' aria-labelledby='navbarDarkDropdownMenuLink3'>
        <li>
          <NavLink onClick={handleClick} className={`dropdown-item`} to='/projects'>
            <i className='fa fa-folder-open'></i> Projects
          </NavLink>
        </li>
        <li>
          <a onClick={handleClick} className={`dropdown-item`} href='/#skills-tools'>
            <i className='fa fa-wrench'></i> Skills & Tools
          </a>
        </li>
        <li>
          <a onClick={handleClick} className={`dropdown-item`} href='/#services'>
            <i className='fa fa-briefcase'></i> Services
          </a>
        </li>
      </ul>
    </li>
  )
}
export function AllInOneDropdownNav() {
  const [query, setQuery] = useState()
  const [searchQuery, setSearchQuery] = useState()
  const location = useLocation()
  // console.log(location.pathname);
  const handleSearchSubmit = () => {
    if (query) {
      setSearchQuery(query)
    }
  }
  return (
    <li className='nav-item dropdown'>
      <Link
        className='nav-link dropdown-toggle'
        to='#'
        id='navbarDarkDropdownMenuLink1'
        role='button'
        data-bs-toggle='dropdown'
        aria-expanded='false'
      >
        <i className='fa fa-code'></i> Short Codes
      </Link>
      <ul className='dropdown-menu dropdown-menu-dark' aria-labelledby='navbarDarkDropdownMenuLink1'>
        <li>
          <NavLink className='dropdown-item' to='/all-in-one'>
            All
          </NavLink>
        </li>
        <li>
          <NavLink className='dropdown-item' to='/php-in-one'>
            PHP In One
          </NavLink>
        </li>
        <li>
          <NavLink className='dropdown-item' to='/reactjs-in-one'>
            ReactJs In One
          </NavLink>
        </li>
        <li>
          <NavLink className='dropdown-item' to='/react-native-in-one'>
            React Native In One
          </NavLink>
        </li>
        {location.pathname == '/all-in-one' ? (
          ''
        ) : (
          <div className='nav-search-shortcodes'>
            <input onChange={(e) => setQuery(e.target.value)} placeholder='Find ShortCodes...' />
            <button onClick={handleSearchSubmit}>Go</button>
            {searchQuery && <Navigate to='/all-in-one' state={{ searchQuery }} />}
          </div>
        )}
      </ul>
    </li>
  )
}
