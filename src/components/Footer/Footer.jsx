import React from 'react'
import { useLocation } from "react-router-dom";
import './Footer.scss'

const Footer = () => {
    const location = useLocation();

    // Логіка визначення класу футера залежно від маршруту
    const getFooterClass = () => {
        if (location.pathname === "/") {
            return "footer home-footer"; // Синій футер для Home
        } else if (location.pathname === "/blog" || location.pathname === "/contact") {
            return "footer transparent-footer"; // Прозорий футер для Blog і Contact
        }
        return "footer default-footer"; // Стандартний футер
    };

    return (
        <>
            <div className={getFooterClass()}>
                <div className="footer__body">
                    <div className="footer__top">
                        <div className="wrap">
                            <div className="footer__top__content">
                                <div className="footer__top__text">
                                    <h2>Intersted to woek
                                        with our team?</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        Ut enim ad minim veniam.</p>
                                </div>
                                <div>
                                    <button>Let`s Talk</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <footer>
                        <div className="wrap">
                            <div className="footer__bottom">
                                <div>
                                    <div className="footer__bottom__logo"><img src="./images/logo2.png" alt="last-logo" /><h3>Afrianska</h3></div>
                                    <div>
                                        <ul>
                                            <li>A.  Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                                            <li>T.  <a href="#">+62-812-7313-4321</a></li>
                                            <li>E.  <a href="#">hello.afrian@gmail.com</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <h3>Contact US</h3>
                                    <ul>
                                        <li><a href="#">About</a></li>
                                        <li><a href="#">What We Do</a></li>
                                        <li><a href="#">Project</a></li>
                                        <li><a href="#">How It Work With Us</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h3>Follow US</h3>
                                    <ul>
                                        <li><a href="#">Instagram</a></li>
                                        <li><a href="#">Facebook</a></li>
                                        <li><a href="#">Linkedin</a></li>
                                        <li><a href="#">Youtube</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="footer__bottom__copy">2019 © Afrianska. All rights reserved.</div>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    )
}

export default Footer
