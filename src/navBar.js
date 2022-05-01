import React from "react";

// import {links,social} from "./data"

const Navbar = () => {
    return (
            <nav className="nav-center">
                <div className="nav-header">
                    <img src="{logo}" alt="logo" />
                </div>
                <div className="link-container show-container">
                    <ul className="links">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                        <li>
                            <a href="#">Product</a>
                        </li>
                    </ul>
                    <ul className="social-icons">
                        <li>
                            <a href="https://www.twitter.com">
                            <i className="bi bi-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com">
                            <i className="bi bi-facebook"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com">
                            <i className="bi bi-linkedin"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.behance.com">
                            <i className="bi bi-behance"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div>                    <button className="nav-toggle">
                        <div className="nav-line1"></div>
                        <div className="nav-line2"></div>
                        <div className="nav-line3"></div>
                    </button></div>
                <ul className='social-icons'></ul>
            </nav>
    );
}


export default Navbar