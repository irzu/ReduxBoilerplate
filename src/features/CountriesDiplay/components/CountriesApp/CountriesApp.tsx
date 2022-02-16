import React from 'react';
import { CountriesList } from '../CountriesList/CountriesList';
import { CountryInfo } from '../CountryInfo/CountryInfo';
import classNames from './CountriesApp.module.css';

export const CountriesApp = () => (
    <div className={classNames.wrapper}>
        <h3 style={{ marginBottom:30 }}>Countries App</h3>
        <div className='row'>
            <div className="col-sm-4">
                <CountriesList/>
            </div>
            <div className="col-sm-8">
                <CountryInfo/>
            </div>
        </div>
    </div>
);
