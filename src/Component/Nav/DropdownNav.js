export function DropdownNav() {
  return (
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        href="#"
        id="navbarDarkDropdownMenuLink"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <i className="fa fa-bug"></i> Others
      </a>
      <ul
        className="dropdown-menu dropdown-menu-dark"
        aria-labelledby="navbarDarkDropdownMenuLink"
      >
        <li>
          <a class="dropdown-item" href="/copyright">
            <i className="fa fa-gavel"></i> Legal
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="/privacy-policy">
            <i className="fa fa-shield"></i> Privacy policy
          </a>
        </li>
      </ul>
    </li>
  );
}
export function PortfolioDropdownNav(active, activeLink, handleClick) {
  return (
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        href="#"
        id="navbarDarkDropdownMenuLink"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <i className="fa fa-folder"></i> Portfolio
      </a>
      <ul
        className="dropdown-menu dropdown-menu-dark"
        aria-labelledby="navbarDarkDropdownMenuLink"
      >
       <li>
                <a
                  onClick={handleClick}
                  className={`dropdown-item ${
                    active === "projects" ? "text-primary" : ""
                  }`}
                  href="/projects"
                >
                  <i className="fa fa-folder-open"></i> Projects
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  className={`dropdown-item ${
                    activeLink === "skills-tools" ? "active" : ""
                  }`}
                  href="/#skills-tools"
                >
                  <i className="fa fa-wrench"></i> Skills & Tools
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  className={`dropdown-item ${
                    activeLink === "work" ? "text-primary" : ""
                  }`}
                  href="/#work"
                >
                  <i className="fa fa-briefcase"></i> Works
                </a>
              </li>
      </ul>
    </li>
  );
}
export function AllInOneDropdownNav() {
  return (
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        href="#"
        id="navbarDarkDropdownMenuLink"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <i className="fa fa-code"></i> All In One
      </a>
      <ul
        className="dropdown-menu dropdown-menu-dark"
        aria-labelledby="navbarDarkDropdownMenuLink"
      >
        <li>
          <a class="dropdown-item" href="/blog/reactjs-in-one">
            <i class="fa fa-react"></i> ReactJs in one
          </a>
        </li>
      </ul>
    </li>
  );
}
