import React from "react";
// import { HelloWorld } from "./features/HelloWorld/components/HelloWorld/HelloWorld";
import { Solver } from "./features/QuadraticEquationSolver/components/Solver/Solver";
import './App.css';

const App = () => (
    <>
        <header>Redux Boilerplate</header>
        <div className="main">
            {/* <HelloWorld/> */}
            <Solver />
        </div>
    </>
);

export default App;
