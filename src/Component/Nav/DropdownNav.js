import { NavLink, Link } from 'react-router-dom'

export function DropdownNav() {
  return (
    <li className='nav-item dropdown'>
      <Link
        className='nav-link dropdown-toggle'
        to='#'
        id='navbarDarkDropdownMenuLink'
        role='button'
        data-bs-toggle='dropdown'
        aria-expanded='false'
      >
        <i className='fa fa-bug'></i> Others
      </Link>
      <ul className='dropdown-menu dropdown-menu-dark' aria-labelledby='navbarDarkDropdownMenuLink'>
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
        id='navbarDarkDropdownMenuLink'
        role='button'
        data-bs-toggle='dropdown'
        aria-expanded='false'
      >
        <i className='fa fa-folder'></i> Portfolio
      </Link>
      <ul className='dropdown-menu dropdown-menu-dark' aria-labelledby='navbarDarkDropdownMenuLink'>
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
  return (
    <li className='nav-item dropdown'>
      <Link
        className='nav-link dropdown-toggle'
        to='#'
        id='navbarDarkDropdownMenuLink'
        role='button'
        data-bs-toggle='dropdown'
        aria-expanded='false'
      >
        <i className='fa fa-code'></i> Shortcodes
      </Link>
      <ul className='dropdown-menu dropdown-menu-dark' aria-labelledby='navbarDarkDropdownMenuLink'>
        <li>
          <NavLink className='dropdown-item' to='/php-in-one'>
            <i className='devicon-react-original'></i> PHP In One
          </NavLink>
        </li>
        <li>
          <NavLink className='dropdown-item' to='/reactjs-in-one'>
            <i className='devicon-react-original'></i> ReactJs In One
          </NavLink>
        </li>
        <li>
          <NavLink className='dropdown-item' to='/react-native-in-one'>
            <i className='devicon-react-original'></i> React Native In One
          </NavLink>
        </li>
      </ul>
    </li>
  )
}
