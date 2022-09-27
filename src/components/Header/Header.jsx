import React from 'react';
import './Header.css'
import heroImg from '../../images/hero-bg.jpg'

const Header = () => {
    return (
        <section id='heroSection'>
            <div className="container">
                <div className="leftContain">
                    <p>Sale up to 70% off</p>
                    <h1>New Collection For Fall</h1>
                    <h4>Discover all the new arrivals of ready-to-wear collection.</h4>
                    <button className='shopBtn'>SHOP NOW</button>
                </div>
                <div className="rightContain">
                    <img src={heroImg} alt="Hero" />
                </div>
            </div>
        </section>
    );
};

export default Header;