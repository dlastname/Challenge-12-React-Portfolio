import React from "react";
import { Link, useLocation } from "react-router-dom";
// import './styles/Nav.css';

const Nav = () => {
  const currentPage = useLocation().pathname;

  return (
      <ul className="nav-list">
        <li className="nav-item">
          <Link
            to="/"
            className={currentPage === "/" ? "nav-link active" : "nav-link"}
          >
            Portfolio
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="/aboutme"
            className={
              currentPage === "/aboutme" ? "nav-link active" : "nav-link"
            }
          >
            About Me
          </Link>
        </li>

        <li className="nav-item">
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
  );
};

export default Nav;
