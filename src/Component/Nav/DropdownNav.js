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
export function AllInOnDropdownNav() {
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
            <i class="fa fa-react"></i> React in one
          </a>
        </li>
      </ul>
    </li>
  );
}
