export interface ProvinceInfo {
    name: string,
    state_code: string
}

export interface ProvincesState {
    provincesInfo: {
        data: {
            states: ProvinceInfo[]
        }
    },
    isLoadingProvinces: boolean,
    errorLoadingProvinces: string
}

export interface ProvincesProps {
    selectedCountry?: string
}
