import React from "react";
import './App.css';
import { HelloWorld } from "./features/HelloWorld/components/HelloWorld/HelloWorld";
import { Solver } from "./features/QuadraticEquationSolver/components/Solver/Solver";
import { CountriesList } from "./features/Countries/components/CountriesList/CountriesList";
import { ProvinceList } from "./features/Provinces/components/ProvinceList/ProvinceList";
import { useAppSelector } from "./store";

const App = () => {
    const { selectedCountry } = useAppSelector(state => state.countries);

    return (
        <>
            <header>Redux Boilerplate</header>
            <div className="main">
                {/* <HelloWorld/> */}
                {/* <Solver /> */}
                <div className='wrapper'>
                    <div className='row'>
                        <div className="col-sm-4">
                            <CountriesList/>
                        </div>
                        <div className="col-sm-8">
                            <ProvinceList selectedCountry={selectedCountry}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default App;
