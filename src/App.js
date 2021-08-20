import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import FoodSection from "./components/FoodSection/FoodSection";
import MexicanData from "./data/Mexican";
import LunchAndDinnerData from "./data/LunchAndDinner";
import JapaneseData from "./data/Japanese";
import Footer from "./components/Footer/Footer";
import ReadyToOrder from "./components/ReadyToOrder/ReadyToOrder";

function App() {
    return (
        <div className="app">
            <Header />
            <Hero />
            <FoodSection
                sectionName="Lunch & Dinner"
                foods={LunchAndDinnerData}
            />
            <FoodSection sectionName="Mexican" foods={MexicanData} />
            <FoodSection sectionName="Japanese" foods={JapaneseData} />
            <ReadyToOrder />
            <Footer />
        </div>
    );
}

export default App;
