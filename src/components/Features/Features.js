import React from "react";
import "./Features.css";
import Feature from "./Feature/Feature";
import Title from "../Title/Title";
import Calcaulator from "../../assets/images/Calculator-pana.svg";
import Chef from "../../assets/images/Chef-pana.svg";
import Takeaway from "../../assets/images/Take Away-pana.svg";

function Features() {
    return (
        <section className="features-container">
            <div className="container">
                <Title title="Features" />

                <div className="features">
                    <Feature
                        imgUrl={Calcaulator}
                        title="best price"
                        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aliquid voluptates dolores! Porro, aliquid quisquam."
                    />
                    <Feature
                        imgUrl={Chef}
                        title="organic food"
                        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et eveniet accusantium amet!"
                    />
                    <Feature
                        imgUrl={Takeaway}
                        title="free delivery"
                        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis sunt unde iste soluta, porro eligendi fugit!"
                    />
                </div>
            </div>
        </section>
    );
}

export default Features;
