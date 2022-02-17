import React from "react";
import { useAppSelector } from "./store";
import dynamicImport from "./common/utils/dynamicImport";
import ErrorBoundary from "./common/utils/ErrorBoundary";
import { CountriesList } from "./features/Countries/components/CountriesList/CountriesList";
import './App.css';

const App = () => {
    const { selectedCountry } = useAppSelector(state => state.countries);
    const ProvincesApp = React.lazy(dynamicImport('provincesApp', './ProvincesApp'));
    return (
        <>
            <header>Redux Boilerplate</header>
            <div className='wrapper'>
                <div className='row'>
                    <div className="col-sm-4">
                        <h4>Select country</h4>
                        <CountriesList/>
                    </div>
                    <div className="col-sm-8">
                        <ErrorBoundary>
                            <React.Suspense fallback={<div>Initilaizing app...</div>}>
                                <h4>Provinces/states {selectedCountry ? `of ${selectedCountry}` : ''}</h4>
                                <ProvincesApp selectedCountry={selectedCountry}/>
                            </React.Suspense>
                        </ErrorBoundary>
                    </div>
                </div>
            </div>
        </>
    );
};

export default App;
