import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import Foods from "./components/Foods/Foods";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className="app">
            <Header />
            <Hero />
            <Features />
            <Foods />
            <Footer />
        </div>
    );
}

export default App;
