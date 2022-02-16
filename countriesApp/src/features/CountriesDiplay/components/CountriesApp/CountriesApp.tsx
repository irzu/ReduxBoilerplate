import React from 'react';
import { useAppSelector } from 'src/store';
import { CountriesList } from '../CountriesList/CountriesList';
import { CountryInfo } from '../CountryInfo/CountryInfo';
import classNames from './CountriesApp.module.css';

export const CountriesApp = () => {
    const { selectedCountry } = useAppSelector(state => state.countries);
    return (
        <div className={classNames.wrapper}>
            <h3 style={{ marginBottom:30 }}>Countries App</h3>
            <div className='row'>
                <div className="col-sm-4">
                    <CountriesList/>
                </div>
                <div className="col-sm-8">
                    <CountryInfo selectedCountry={selectedCountry}/>
                </div>
            </div>
        </div>
    );
};
