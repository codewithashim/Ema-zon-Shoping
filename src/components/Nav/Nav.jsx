import React from 'react';
import './Nav.css';
import logo from '../../images/Logo.svg'

const Nav = () => {
    return (
        <nav id='mainNav'>
            <a href="?">
                <img src={logo} alt="" />
            </a>
            <ul className='navManue'>
                <li><a href="../Shop/Shop.jsx">Shop</a></li>
                <li><a href="/revew">Order Review</a></li>
                <li><a href="/invantory">Manage Inventory</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
        </nav>
    );
};

export default Nav;