import React from "react";
import './App.css';
import { CountriesList } from "./features/Countries/components/CountriesList/CountriesList";
import { HelloWorld } from "./features/HelloWorld/components/HelloWorld/HelloWorld";
import { Solver } from "./features/QuadraticEquationSolver/components/Solver/Solver";

const App = () => (
    <>
        <header>Redux Boilerplate</header>
        <div className="main">
            {/* <HelloWorld/> */}
            {/* <Solver /> */}
            <div className="wrapper">
                <CountriesList />
            </div>
        </div>
    </>
);

export default App;
