import React from "react";
import "./Nav.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav id="mainNav">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <ul className="navManue">
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/order">Order</Link>
        </li>
        <li>
          <Link to="/inventory">Maneg Invventory</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
