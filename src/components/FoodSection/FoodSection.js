import React, { useEffect, useRef, useState } from "react";
import "./FoodSection.css";
import FoodItem from "../FoodItem/FoodItem";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function FoodSection({ sectionName, foods }) {
    const rightArrow = useRef(null);
    const leftArrow = useRef(null);
    const slider = useRef(null);
    const [isScroll, setIsScroll] = useState(true);

    useEffect(() => {
        setIsScroll(slider.current.scrollWidth > slider.current.clientWidth);

        // left arrow
        leftArrow.current.addEventListener("click", () => {
            smoothScroll(slider.current, "left", 10, 125, 10);
        });

        // Right arrow
        rightArrow.current.addEventListener("click", () => {
            smoothScroll(slider.current, "right", 10, 125, 10);
        });

        // Slider AutoScroll
        const maxScrollLeft =
            slider.current.scrollWidth - slider.current.clientWidth;
        let direction = "right";
        function autoScroll() {
            if (slider.current.scrollLeft === maxScrollLeft) {
                direction = "left";
                slider.current.scrollLeft--;
            } else if (slider.current.scrollLeft === 0) {
                direction = "right";
                slider.current.scrollLeft++;
            }

            if (direction === "right") {
                slider.current.scrollLeft++;
            } else {
                slider.current.scrollLeft--;
            }
        }
        let playNumber = setInterval(autoScroll, 50);

        // Touch event for mobile devices
        slider.current.addEventListener("touchstart", () => {
            clearInterval(playNumber);
        });
        slider.current.addEventListener("touchend", () => {
            playNumber = setInterval(autoScroll, 50);
        });

        // Stoping AutoScroll on hover
        slider.current.addEventListener("mouseover", () => {
            clearInterval(playNumber);
        });
        slider.current.addEventListener("mouseleave", () => {
            playNumber = setInterval(autoScroll, 50);
        });
    }, []);

    return (
        <div className="food-section">
            <div className="container">
                <header className="food-section__header">
                    <h3 className="food-section__title">{sectionName}</h3>
                    <div className="food-section__underline"></div>
                </header>

                <div className="food-section__foods-wrapper">
                    <div className="food-section__foods" ref={slider}>
                        <div style={{ display: isScroll || "none" }}>
                            <div
                                className="arrow-container arrow-left"
                                ref={leftArrow}
                            >
                                <ArrowBackIosIcon className="food-section__arrow" />
                            </div>
                            <div
                                className="arrow-container arrow-right"
                                ref={rightArrow}
                            >
                                <ArrowForwardIosIcon className="food-section__arrow" />
                            </div>
                        </div>
                        {foods.map((food) => (
                            <FoodItem food={food} key={food.id} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FoodSection;

function smoothScroll(element, direction, speed, distance, step) {
    let scrollAmount = 0;
    var slideTimer = setInterval(function () {
        if (direction == "left") {
            element.scrollLeft -= step;
        } else {
            element.scrollLeft += step;
        }
        scrollAmount += step;
        if (scrollAmount >= distance) {
            window.clearInterval(slideTimer);
        }
    }, speed);
}
