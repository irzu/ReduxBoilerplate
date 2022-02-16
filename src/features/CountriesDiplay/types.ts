export type Country = {
    abbreviation: string,
    capital: string,
    currency: string,
    name: string,
    phone: string,
    population: number,
    media: {
        flag: string,
        emblem: string,
        orthographic: string
    },
    id: number
}

export type StateInfo = {
    name: string,
    state_code: string
}

export type CountriesState = {
    countries: Country[],
    isLoadingCountries: boolean,
    errorLoadingCountries: string,
    selectedCountry: string,
    countryInfo: {
        data: {
            states: StateInfo[]
        }
    },
    isLoadingStates: boolean,
    errorLoadingStates: string
}

export type CountryInfoProps = {
    selectedCountry: string
}
