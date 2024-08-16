import "./Header.css";
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
  return (
    <div className="navbarr">
      <nav className="navbar-content">
        <div className="menu">
          <div className="btn">
            <GiHamburgerMenu />
          </div>
          <ul>
            <li>
              <span className="nav-options">Home</span>
            </li>
            <li>
              <span className="nav-options">About</span>
            </li>
            <li>
              <span className="nav-options">Service</span>
            </li>
            <li>
              <span className="nav-options">Contact</span>
            </li>
          </ul>
          <div className="btn">
            <button className="butt">ContactUs</button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
