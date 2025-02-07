import React from "react";
import Nav from "./Nav.jsx";
import '../styles/Header.css';


const Header = () => {
  return (
    <header className="header navbar navbar-light bg-light">
      <div className="container-fluid">
        <h1 className="navbar-brand">Daniel Llorens</h1> <Nav />
      </div>
    </header>
  );
};

export default Header;
