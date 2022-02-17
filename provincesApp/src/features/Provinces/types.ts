export type ProvinceInfo = {
    name: string,
    state_code: string
}

export type ProvincesState = {
    provincesInfo: {
        data: {
            states: ProvinceInfo[]
        }
    },
    isLoadingProvinces: boolean,
    errorLoadingProvinces: string
}

export type ProvincesProps = {
    selectedCountry?: string
}
