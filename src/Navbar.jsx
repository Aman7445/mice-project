import React from "react";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="#" className="option">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="option">
            Contact
          </a>
        </li>
        <li>
          <a href="#" className="option">
            About
          </a>
        </li>
      </ul>
      <span className="slide"></span>
    </nav>
  );
};

export default Navbar;
