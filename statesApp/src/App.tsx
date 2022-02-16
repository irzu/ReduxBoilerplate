import React from "react";
import './App.css';
import { CountryInfo } from "./features/CountriesDiplay/components/CountryInfo/CountryInfo";
import { useAppSelector } from "./store";

const App = () => {
    const { selectedCountry } = useAppSelector(state => state.countries);
    
    return (
        <div className="main">
            <CountryInfo selectedCountry={selectedCountry} />
        </div>
    );
};

export default App;
