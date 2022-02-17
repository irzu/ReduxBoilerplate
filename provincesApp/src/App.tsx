import React from "react";
import { ProvinceList } from "./features/Provinces/components/ProvinceList/ProvinceList";
import { ProvincesProps } from "./features/Provinces/types";
import './App.css';

const App = (props: ProvincesProps) => {
    const { selectedCountry } = props;
    return (
        <>
            <div className="main">
                <ProvinceList selectedCountry={selectedCountry} />            
            </div>
        </>
    );
};

export default App;
