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

export type CountriesState = {
    countries: Country[],
    isLoadingCountries: boolean,
    errorLoadingCountries: string,
    selectedCountry?: string
}

export type CountryInfoProps = {
    selectedCountry: string
}
