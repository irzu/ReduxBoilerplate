import { useAppDispatch, useAppSelector } from '../../../../store';
import { getCountries } from '../../countriesAPI';
import { Country as CountryType } from '../../types';
import classNames from './CountriesList.module.css';

export const CountriesList = () => {
    const { countries, isLoadingCountries, errorLoadingCountries } = useAppSelector(state => state.countries);
    const dispatch = useAppDispatch();

    const renderCountryInfo = (country: CountryType) => (
        <div className={classNames.item} key={country.id} data-testid="country-info">
            <div className={`col-sm-3 ${classNames.subItem}`}>
                <img width={30} src={country.media.flag} alt="flag" style={{marginBottom:20}} />
            </div>
            <div className={`col-sm-9 ${classNames.subItem}`}>
                <div><b>{country.name}</b></div>
                <div>{country.capital}</div>
            </div>
        </div>
    );

    return (
        <div className={classNames.wrapper}>
            <h3 style={{ marginBottom:30 }}>Countries List</h3>
            <button className='btn btn-primary' onClick={() => dispatch(getCountries())}>Fetch countries list</button>
            <hr/>
            {errorLoadingCountries && <div>Error: {errorLoadingCountries}</div>}
            {isLoadingCountries && <div>Loading...</div>}
            <div className={classNames.list}>
                {countries.map(country => renderCountryInfo(country))}
            </div>
        </div>
    );
};
