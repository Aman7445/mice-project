import React, { useEffect } from "react";

const nav = () => {
  let options = document.querySelectorAll(".options");
  let slide = document.querySelector(".slide");
  options.forEach((ele, index) => {
    ele.addEventListener("mouseover", () => {
      slide.style.left = (4000 / options.length) * index + "%";
    });
  });
};

const Navbar = () => {
  useEffect(() => {
    nav();
  });
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
