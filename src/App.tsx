import React from "react";
// import { HelloWorld } from "./features/HelloWorld/components/HelloWorld/HelloWorld";
// import { Solver } from "./features/QuadraticEquationSolver/components/Solver/Solver";
import { CountriesList } from "./features/Countries/components/CountriesList/CountriesList";
import './App.css';

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
