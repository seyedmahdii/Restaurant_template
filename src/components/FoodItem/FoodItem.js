import React from "react";
import "./FoodItem.css";
import TimerIcon from "@material-ui/icons/Timer";

function FoodItem({ food }) {
    return (
        <div className="food">
            <a href="#">
                <img src={food.image} alt={food.name} className="food__image" />
            </a>

            <div className="food__info-box">
                <h5 className="food__title">{food.name}</h5>
                <span className="food__category">{food.category}</span>
                <ul className="food__tags">
                    {food.tags.map((tag) => (
                        <li
                            key={Math.floor(
                                Math.random() * new Date().getTime().toString()
                            )}
                        >
                            <a className="food__tag" href="#">
                                {tag}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="food__footer">
                    <div>
                        <span className="food__time">
                            <TimerIcon className="food__time-icon" />{" "}
                            {food.time}
                        </span>
                        <span className="food__price">${food.price}</span>
                    </div>
                    <div>
                        <span className="food__feature">{food.feature}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FoodItem;
