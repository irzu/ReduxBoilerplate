import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'src/store';
import { getCountries } from '../../countriesAPI';
import { Country as CountryType } from '../../types';
import classNames from './CountriesList.module.css';

export const CountriesList = () => {
    useEffect(() => {
        dispatch(getCountries());
    },[]);
    
    const { countries, isLoadingCountries, errorLoadingCountries } = useAppSelector(state => state.countries);
    const dispatch = useAppDispatch();

    const renderCountryInfo = (country: CountryType) => (
        <div className={classNames.item} key={country.id}>
            <div className={classNames.subItem} style={{minWidth:180}}>
                <img width={150} src={country.media.flag} alt="flag"/>
            </div>
            <div className={classNames.subItem}>
                <div><b>{country.name}</b></div>
                <div>{country.capital}</div>
            </div>
        </div>
    );
    
    return (
        <div>
            {errorLoadingCountries && <div>Error: {errorLoadingCountries}</div>}
            {isLoadingCountries && <div>Loading...</div>}
            {countries.map(country => renderCountryInfo(country))}
        </div>
    );
};
