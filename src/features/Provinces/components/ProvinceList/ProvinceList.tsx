import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../store';
import { getProvinces } from '../../provincesApi';
import { ProvincesState, ProvinceInfo } from '../../types';
import classNames from './ProvinceList.module.css';

export const ProvinceList = () => {
    const { provincesInfo, isLoadingProvinces, errorLoadingProvinces } = useAppSelector(state => state.provinces);
    const { selectedCountry } = useAppSelector(state => state.countries);
    const dispatch = useAppDispatch();
    
    useEffect(() => {
        if (selectedCountry) dispatch(getProvinces({selectedCountry}));
    },[selectedCountry]);

    const renderProvinceInfo = (info: ProvinceInfo) => (
        <li key={info.state_code} data-testid="province-item">
            <b>{info.name} </b>({info.state_code})
        </li>
    );

    const renderProvinces = (country: ProvincesState["provincesInfo"]) => {
        const { states } = country.data;
        if (!selectedCountry) return <div>Select country to view its provinces</div>;
        if (!states.length) return <div>No data available for selected country</div>;
        return (
            <div className={classNames.list}>
                { country.data.states.map(item => renderProvinceInfo(item)) }
            </div>
        );
    };
    
    return (
        <div>
            {errorLoadingProvinces && <div data-tesid="error">Error: {errorLoadingProvinces}</div>}
            {isLoadingProvinces && <div data-testid="loading">Loading...</div>}
            {!isLoadingProvinces && renderProvinces(provincesInfo)}
        </div>
    );
};
