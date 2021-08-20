import React from "react";
import "./FoodSection.css";
import FoodItem from "../FoodItem/FoodItem";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function FoodSection({ sectionName, foods }) {
    return (
        <section className="food-section">
            <div className="container">
                <header className="food-section__header">
                    <h3 className="food-section__title">{sectionName}</h3>
                    <div className="food-section__underline"></div>
                </header>

                <div className="food-section__foods">
                    <div className="arrow-container arrow-left">
                        <ArrowBackIosIcon className="food-section__arrow" />
                    </div>
                    <div className="arrow-container arrow-right">
                        <ArrowForwardIosIcon className="food-section__arrow" />
                    </div>
                    {foods.map((food, ind) => (
                        <FoodItem food={food} left={ind * 34} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FoodSection;
