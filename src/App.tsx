import React from "react";
import './App.css';
import { CountriesList } from "./features/CountriesDiplay/components/CountriesList/CountriesList";
import { HelloWorld } from "./features/HelloWorld/components/HelloWorld/HelloWorld";
import { Solver } from "./features/QuadraticEquationSolver/components/Solver/Solver";

const App = () => (
    <>
        <header>Redux Boilerplate</header>
        <div className="main">
            {/* <HelloWorld/> */}
            {/* <Solver /> */}
            <CountriesList />
        </div>
    </>
);

export default App;
