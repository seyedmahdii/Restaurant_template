import React, { useRef } from "react";
import "./Header.css";
import { IconButton } from "@material-ui/core";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {
    const headerRef = useRef(null);
    window.addEventListener("scroll", () => {
        const scrollHeight = window.pageYOffset;
        if (scrollHeight > 150) {
            headerRef.current.className = "header header--fixed";
        } else {
            headerRef.current.className = "header";
        }
    });

    return (
        <header className="header" ref={headerRef}>
            <div className="container container--header">
                <div className="header-container">
                    <div className="header__logo-container">
                        <img
                            src="https://cdn.opeqe.com/image/Logo/opeqe-logo.svg"
                            alt="Logo"
                            className="header__logo"
                        />
                    </div>

                    <div className="header__list">
                        <a href="#" className="header__list-item">
                            Orders
                        </a>

                        <a href="#" className="header__list-item">
                            Locations
                        </a>

                        <a
                            href="#"
                            className="header__button header__button--bordered"
                        >
                            Log In
                        </a>
                        <a
                            href="#"
                            className="header__button header__button--fill"
                        >
                            Sign Up
                        </a>
                        <IconButton>
                            <ShoppingBasketIcon className="header__icon" />
                        </IconButton>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
