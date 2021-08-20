import React from "react";
import "./ReadyToOrder.css";

function ReadyToOrder() {
    return (
        <div className="order">
            <div className="container">
                <h2 className="order__title">Ready to order?</h2>
                <h4 className="order__subtitle">
                    Browse our menu for dine-in, delivery or pickup and catering
                </h4>
                <div className="order__details">
                    <div>
                        <span className="order__method">ASAP Pickup</span>
                        <p className="order__address">
                            Opeqe San Francisco - 235 Montgomery Street
                        </p>
                    </div>
                    <a href="#" className="order__button">
                        Change
                    </a>
                    <div className="order__select-btns">
                        <button className="order__select-btn">Delivery</button>
                        &nbsp;
                        <span className="order__or">or</span>&nbsp;
                        <button className="order__select-btn order__select-btn--chosen">
                            Pickup
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReadyToOrder;
