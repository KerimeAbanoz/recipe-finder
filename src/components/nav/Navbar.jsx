import React from "react";
import "./Navbar.style";
import Nav, { Brand, Menu, MenuLink, Hamburger } from "./Navbar.style";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <Nav justify="space-between" wrap="wrap">
      <a href="">
        <i>Recipe Finder</i>
      </a>
      <div>
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
        <Link to="register">Register</Link>
        <Link to="logout">Logout</Link>
      </div>
    </Nav>
  );
};

export default Navbar;
