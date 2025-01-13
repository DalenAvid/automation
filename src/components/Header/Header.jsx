import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        
        <header className="header">
            
            <div className="header__logo">
                <img src="./images/logo.png" alt="logo" />
            </div>
            <button className="header__burger" onClick={toggleMenu}>
                ☰
            </button>
            <div className={`header__menu ${menuOpen ? 'header__menu--open' : ''}`}>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/blog" >Blog</Link></li>
                        <li><Link to="/contact">Contact</Link></li>

                    </ul>
                </nav>
            </div>
        </header>
       
    );
};

export default Header;
