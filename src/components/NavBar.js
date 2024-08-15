import {
  faBarsStaggered,
  faCartShopping,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import SideBar from "./SideBar";
import { Link, useLocation } from "react-router-dom";
// import { Link } from "react-router-dom";

const NavBar = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const location = useLocation();
  return (
    <div className="nav-bar">
      <h1>Shoppie</h1>
      <div className="nav-links">
        <li>
          <Link to="/" className={location.pathname === '/' && 'active'}>Shop</Link>
        </li>
        <li>
          <Link to="/mens" className={location.pathname === '/mens' && 'active'}>Mens</Link>
        </li>
        <li>
          <Link to="/womens" className={location.pathname === '/womens' && 'active'}>Womens</Link>
        </li>
        <li>
          <Link to="/kids" className={location.pathname === '/kids' && 'active'}>Kids</Link>
        </li>
      </div>
      <div className="nav-left">
        <Link to="/login">
          <button className="button">Login</button>
        </Link>
        <Link to="/cart">
          <FontAwesomeIcon icon={faCartShopping} />
        </Link>
        <div className="nav-left-count">0</div>
      </div>
      <div
        className="sidebar-icon"
        onClick={() => setShowSideBar(!showSideBar)}
      >
        {!showSideBar ? (
          <FontAwesomeIcon icon={faBarsStaggered} />
        ) : (
          <FontAwesomeIcon icon={faX} />
        )}
      </div>
      {showSideBar && <SideBar />}
    </div>
  );
};

export default NavBar;
