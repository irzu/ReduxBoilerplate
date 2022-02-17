import React from 'react';
import { CountriesList } from '../CountriesList/CountriesList';
import classNames from './CountriesApp.module.css';

export const CountriesApp = () => (
    <div className={classNames.wrapper}>
        <h3 style={{ marginBottom:30 }}>Countries App</h3>
        <div className='row'>
            <div className="col-sm-4">
                <div>
                    <CountriesList/>
                </div>
            </div>
        </div>
    </div>
);
