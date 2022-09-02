import { Cancel, Menu } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = ({ open, handleOpen, handleClose }) => {
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
        <div className="hamburger_menu">
          {open ? (
            <>
              <Menu fontSize="large" onClick={handleOpen}></Menu>
            </>
          ) : (
            <>
              <Cancel onClick={handleClose} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
