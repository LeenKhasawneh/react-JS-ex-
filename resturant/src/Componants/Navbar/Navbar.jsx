import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="nav">
        <h2>Pizza</h2>
        <div className="links">
          <a href="">Home</a>
          <a href="">Gallery</a>
          <a href="">Contact</a>
          <a href="">About</a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
