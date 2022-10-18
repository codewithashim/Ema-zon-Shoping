import React, { useContext } from "react";
import "./Nav.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
import { AuthContex } from "../Context/UserContex";

const Nav = () => {
  const { user } = useContext(AuthContex);

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

        {user?.uid ? (
          <li>
            <Link to="/logout" on>Logout</Link>
          </li>
        ) : (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}

        <li>
          <div className="text-white">
            <span>{user?.email}</span>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
