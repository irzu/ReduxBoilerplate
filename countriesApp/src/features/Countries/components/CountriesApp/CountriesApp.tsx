import React from 'react';
import { useAppSelector } from 'src/store';
import { CountriesList } from '../CountriesList/CountriesList';
import classNames from './CountriesApp.module.css';
import dynamicImport from '../../../../common/utils/dynamicImport';
import ErrorBoundary from 'src/common/utils/ErrorBoundary';

export const CountriesApp = () => {
    const { selectedCountry } = useAppSelector(state => state.countries);
    const ProvincesApp = React.lazy(dynamicImport('provincesApp', './ProvincesApp'));

    return (
        <div className={classNames.wrapper}>
            <div className='row'>
                <div className="col-sm-4">
                    <h4>Select country</h4>
                    <CountriesList/>
                </div>
                <div className="col-sm-8">
                    <ErrorBoundary>
                        <React.Suspense fallback={<div>Initilaizing app...</div>}>
                            <ProvincesApp selectedCountry={selectedCountry}/>
                        </React.Suspense>
                    </ErrorBoundary>
                </div>
            </div>
        </div>
    );
};
