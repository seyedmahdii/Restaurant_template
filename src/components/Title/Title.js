import React from "react";
import "./Title.css";

function Title({ title }) {
    return (
        <div className="title-container">
            <div className="title-wrapper">
                <h2 className="title">{title}</h2>
                <div className="underline"></div>
            </div>
        </div>
    );
}

export default Title;
