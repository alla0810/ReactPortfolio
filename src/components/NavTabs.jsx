import { Link, useLocation } from 'react-router-dom';
import '../css/NavTabs.css';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <nav className="nav_background">
      <ul className="nav nav-item">
        <Link to="/" className="nav_name"> 
          {/* <img className="nav_img" src={"./logo3.png"}/> */}
          {'KyoSook Shin'}
        </Link>
      </ul>
    <ul className="nav  nav_tab_margin">
      <li className="nav-item">
        <Link 
        to="/"
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/' ? 'nav-link nav_font active' : 'nav-link nav_font'}
        >
          About me
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/Portfolio"
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === '/' ? 'nav-link nav_font active' : 'nav-link nav_font'}
        >
          Portfolio
        </Link>
      </li>


      <li className="nav-item">
        <Link
          to="/Contact"
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/Contact' ? 'nav-link nav_font active' : 'nav-link nav_font'}
        >
          Contact
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Resume"
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/Resume' ? 'nav-link nav_font active' : 'nav-link nav_font'}
        >
          Resume
        </Link>
      </li>
    </ul>
    </nav>

  );
}

export default NavTabs;
