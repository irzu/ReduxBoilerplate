import React from "react";
import './App.css';
import { HelloWorld } from "./features/HelloWorld/components/HelloWorld/HelloWorld";

const App = () => (
    <>
        <header>Redux Boilerplate</header>
        <div className="main">
            <HelloWorld/>
        </div>
    </>
);

export default App;
