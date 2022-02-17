import React from "react";
import './App.css';
import { CountriesApp } from "./features/Countries/components/CountriesApp/CountriesApp";
import { HelloWorld } from "./features/HelloWorld/components/HelloWorld/HelloWorld";
import { Solver } from "./features/QuadraticEquationSolver/components/Solver/Solver";

const App = () => (
    <>
        <header>Redux Boilerplate</header>
        <div className="main">
            {/* <HelloWorld/> */}
            {/* <Solver /> */}
            <CountriesApp />
        </div>
    </>
);

export default App;
