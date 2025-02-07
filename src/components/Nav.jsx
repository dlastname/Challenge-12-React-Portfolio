import React from "react";
import { Link, useLocation } from "react-router-dom";
import '../styles/Header.css'

const Nav = () => {
  const currentPage = useLocation().pathname;

  return (
    <nav className="navbar-nav ms-auto">
      <ul className="navbar-nav d-flex flex-row">
        <li className="nav-item me-3">
          <Link
            to="/"
            className={currentPage === "/" ? "nav-link active" : "nav-link"}
          >
            About Me
          </Link>
        </li>

        <li className="nav-item me-3">
          <Link
            to="/portfolio"
            className={
              currentPage === "/portfolio" ? "nav-link active" : "nav-link"
            }
          >
            Portfolio
          </Link>
        </li>

        <li className="nav-item me-3">
          <Link
            to="/contact"
            className={
              currentPage === "/contact" ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="/resume"
            className={
              currentPage === "/resume" ? "nav-link active" : "nav-link"
            }
          >
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
