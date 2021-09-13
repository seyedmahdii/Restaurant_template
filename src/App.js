import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import Foods from "./components/Foods/Foods";
import Footer from "./components/Footer/Footer";
import Loading from "./components/Loading/Loading";

function App() {
    const [isLoading, setIsLoading] = useState(true);
    window.addEventListener("load", () => {
        setIsLoading(false);
    });
    if (isLoading) {
        return <Loading />;
    }

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
