import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <h1>LoanAptech</h1>
      </div>

      <div className="navbar-links">
        <div className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/loans" className="nav-link">Loans</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          <button className="nav-button">SignUp</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;