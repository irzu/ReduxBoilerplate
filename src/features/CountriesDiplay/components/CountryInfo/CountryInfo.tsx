import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'src/store';
import { getStates } from '../../countriesAPI';
import { CountriesState, StateInfo } from '../../types';
import classNames from './CountryInfo.module.css';

export const CountryInfo = () => {

    const { countryInfo, isLoadingStates, errorLoadingStates, selectedCountry } = useAppSelector(state => state.countries);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getStates({selectedCountry}));
    },[selectedCountry]);

    const renderStateInfo = (info: StateInfo) => (
        <li key={info.state_code}>
            <b>{info.name} </b>({info.state_code})
        </li>
    );

    const renderStates = (country: CountriesState["countryInfo"]) => {
        const { states } = country.data;
        if (!states.length) return <div>No data available</div>;
        return (
            <div className={classNames.list}>
                { country.data.states.map(item => renderStateInfo(item)) }
            </div>
        );
    };
    
    return (
        <div>
            {errorLoadingStates && <div>Error: {errorLoadingStates}</div>}
            {isLoadingStates && <div>Loading...</div>}
            {!isLoadingStates && renderStates(countryInfo)}
        </div>
    );
};
