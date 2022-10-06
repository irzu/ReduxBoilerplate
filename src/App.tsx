import React from "react";
// import { HelloWorld } from "./features/HelloWorld/components/HelloWorld/HelloWorld";
// import { Solver } from "./features/QuadraticEquationSolver/components/Solver/Solver";
import { CountriesList } from "./features/Countries/components/CountriesList/CountriesList";
import { ProvinceList } from "./features/Provinces/components/ProvinceList/ProvinceList";
import './App.css';

const App = () => {

    return (
        <>
            <header>Redux Boilerplate</header>
            <div className="main">
                {/* <HelloWorld/> */}
                {/* <Solver /> */}
                <div className='wrapper'>
                    <div className='row'>
                        <div className="col-sm-4">
                            <h4>Countries</h4>
                            <CountriesList/>
                        </div>
                        <div className="col-sm-8">
                            <h4>Provinces/states</h4>
                            <ProvinceList/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default App;
