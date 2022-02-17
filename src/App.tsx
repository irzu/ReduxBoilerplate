import React from "react";
import { HelloWorld } from "./features/HelloWorld/components/HelloWorld/HelloWorld";
import './App.css';

const App = () => (
    <>
        <header>Redux Boilerplate</header>
        <div className="main">
            <HelloWorld/>
        </div>
    </>
);

export default App;
