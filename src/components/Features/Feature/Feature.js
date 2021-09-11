import React from "react";
import "./Feature.css";

function Feature({ imgUrl, title, text }) {
    return (
        <div className="feature">
            <img src={imgUrl} className="feature__img" alt="Feature" />
            <h5 className="feature__title">{title}</h5>
            <p className="feature__text">{text}</p>
        </div>
    );
}

export default Feature;
