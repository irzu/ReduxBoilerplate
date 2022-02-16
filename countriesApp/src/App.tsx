import React from "react";
import './App.css';
import { CountriesApp } from "./features/CountriesDiplay/components/CountriesApp/CountriesApp";

const App = () => (
    <>
        <header>Redux Boilerplate</header>
        <div className="main">
            <CountriesApp />
        </div>
    </>
);

export default App;
