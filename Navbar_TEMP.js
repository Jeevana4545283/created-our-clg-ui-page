import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg"; // Ensure correct path
import "./Navbar.css"; // Import CSS

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="Logo" /> {/* Correct usage */}
        </Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/gym-mess-library">Facilities</Link></li>
        <li><Link to="/student-reviews">Reviews</Link></li>
        <li><Link to="/clubs-societies">Clubs</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
