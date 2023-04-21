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
          <NavLink
            onClick={handleClick}
            className={`dropdown-item`}
            to='/projects'
          >
            <i className='fa fa-folder-open'></i> Projects
          </NavLink>
        </li>
        <li>
          <a
            onClick={handleClick}
            className={`dropdown-item`}
            href='/#skills-tools'
          >
            <i className='fa fa-wrench'></i> Skills & Tools
          </a>
        </li>
        <li>
          <a
            onClick={handleClick}
            className={`dropdown-item`}
            href='/#work'
          >
            <i className='fa fa-briefcase'></i> Works
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
        <i className='fa fa-code'></i> All In One
      </Link>
      <ul className='dropdown-menu dropdown-menu-dark' aria-labelledby='navbarDarkDropdownMenuLink'>
        <li>
          <NavLink className='dropdown-item' to='/dev-blog/reactjs-in-one'>
            <i className='devicon-react-original'></i> ReactJs in one
          </NavLink>
        </li>
      </ul>
    </li>
  )
}
