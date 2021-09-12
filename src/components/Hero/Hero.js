import React, { useEffect, useRef } from "react";
import "./Hero.css";
import Burger from "../../assets/images/hero-burger.png";

function Hero() {
    const hero = useRef(null);
    const image = useRef(null);

    const randNum = () => {
        return Math.floor(Math.random() * 10);
    };

    useEffect(() => {
        hero.current.addEventListener("mousemove", () => {
            image.current.style.transform = `translate(${randNum()}px, ${randNum()}px)`;
        });
    }, []);

    return (
        <div className="hero" ref={hero}>
            <div className="container hero-container">
                <div className="hero__textbox">
                    <h1 className="hero__title">
                        healthy food and delicious recipes all in one place
                    </h1>
                    <p className="hero__text">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.
                    </p>
                </div>
                <div className="hero__burger">
                    <img
                        src={Burger}
                        alt="Hamburger"
                        className="hero__img"
                        ref={image}
                    />
                </div>
            </div>
        </div>
    );
}

export default Hero;
