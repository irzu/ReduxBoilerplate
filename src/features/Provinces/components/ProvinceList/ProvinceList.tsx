import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../store';
import { getStates } from '../../provincesApi';
import { ProvincesState, ProvincesProps, ProvinceInfo } from '../../types';
import classNames from './ProvinceList.module.css';

export const ProvinceList = (props: ProvincesProps) => {
    const { selectedCountry } = props;
    const { provincesInfo, isLoadingProvinces, errorLoadingProvinces } = useAppSelector(state => state.provinces);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (selectedCountry) dispatch(getStates({selectedCountry}));
    },[selectedCountry]);

    const renderStateInfo = (info: ProvinceInfo) => (
        <li key={info.state_code}>
            <b>{info.name} </b>({info.state_code})
        </li>
    );

    const renderStates = (country: ProvincesState["provincesInfo"]) => {
        const { states } = country.data;
        if (!selectedCountry) return <div>Select country to view its provinces</div>;
        if (!states.length) return <div>No data available for selected country</div>;
        return (
            <div className={classNames.list}>
                { country.data.states.map(item => renderStateInfo(item)) }
            </div>
        );
    };
    
    return (
        <div>
            {errorLoadingProvinces && <div>Error: {errorLoadingProvinces}</div>}
            {isLoadingProvinces && <div>Loading...</div>}
            {!isLoadingProvinces && renderStates(provincesInfo)}
        </div>
    );
};
