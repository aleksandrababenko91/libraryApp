import {
  BrowserRouter as Router,
  Routes, Route, Link
} from "react-router-dom";
import {FaBars, FaTimes} from "react-icons/fa";
import { useRef } from "react";
import './MainCss.css'



const NavBar = ({currentUser, handleLogOut}) => {
  const navRef = useRef();
  
  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }
  return(
    <header>
      <h3>Library</h3>
    <nav ref={navRef}>
            <a className="nav-item">
              <Link to="/" >
                Main Page
              </Link>
            </a>
            <a className="nav-item">
              <Link  to="/BookList" className="nav-link">
                Book list
              </Link>
            </a>
            <a className="nav-item">
              <Link  to="/RegisterForm" className="nav-link">
                Register Form
              </Link>
            </a>
            <a className="nav-item">
              <Link  to="/MyProfile" className="nav-link">
                My Profile
              </Link>
            </a>
            {currentUser ? <a className="nav-item">
              <button onClick={handleLogOut} className="nav-link">
                Log Out
              </button>
            </a> : <a className="nav-item">
              <Link to="/UserLoginForm" className="nav-link">
                Log In
              </Link>
            </a>}
            <button className="nav-btn na-close-btn" onclick={showNavBar}>
              <FaTimes></FaTimes>
            </button>
    </nav>
    <button className="nav-btn" onclick={showNavBar}>
      <FaBars></FaBars>
    </button>
  </header>
  )
}

export default NavBar
