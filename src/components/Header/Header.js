import React, { useEffect, useRef, useState } from "react";
import "./Header.css";
import { IconButton } from "@material-ui/core";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import MenuIcon from "@material-ui/icons/Menu";
import Logo from "../../assets/images/Logo.png";
import CloseIcon from "@material-ui/icons/Close";

function Header() {
    const headerRef = useRef(null);
    const headerList = useRef(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    window.addEventListener("scroll", () => {
        const scrollHeight = window.pageYOffset;
        if (scrollHeight > 150) {
            headerRef.current.className = "header header--fixed";
        } else {
            headerRef.current.className = "header";
        }
    });

    useEffect(() => {}, []);

    const sideMenuHandler = () => {
        if (isMenuOpen) {
            headerList.current.classList.remove("header__list--open");
        } else {
            headerList.current.classList.add("header__list--open");
        }
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header" ref={headerRef}>
            <div className="container container--header">
                <div className="header-container">
                    <div className="header__logo-container">
                        <a href="#">
                            <img
                                src={Logo}
                                alt="Logo"
                                className="header__logo"
                            />
                        </a>
                    </div>

                    <div className="header__right">
                        <div className="header__list" ref={headerList}>
                            <div className="header__buttons">
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
                            </div>
                            <a href="#" className="header__list-item">
                                Orders
                            </a>
                            <a href="#" className="header__list-item">
                                Locations
                            </a>
                            <a href="#" className="header__list-item">
                                Foods
                            </a>
                        </div>
                        <div>
                            <IconButton className="header__main-btn">
                                <ShoppingBasketIcon className="header__icon" />
                            </IconButton>
                            <IconButton
                                className="header__main-btn header__menu-btn"
                                onClick={sideMenuHandler}
                            >
                                {isMenuOpen ? (
                                    <CloseIcon className="header__icon header__menu-icon" />
                                ) : (
                                    <MenuIcon className="header__icon header__menu-icon" />
                                )}
                            </IconButton>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
