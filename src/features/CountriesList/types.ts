export interface Country {
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

export interface CountriesState {
    countries: Country[],
    isLoadingCountries: boolean,
    errorLoadingCountries: string
}

export interface ResponseError {
    response?: {
        statusText: string
    }
}
