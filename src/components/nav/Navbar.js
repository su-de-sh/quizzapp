import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <h1 className="logo">QUIZZ</h1>
        <div className="link_side">
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/quiz" className="link">
            Quiz
          </Link>
          <Link to="/about" className="link">
            About
          </Link>
          <Link to="/contact" className="link">
            Contact
          </Link>
          <Link to="/login" className="link">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
