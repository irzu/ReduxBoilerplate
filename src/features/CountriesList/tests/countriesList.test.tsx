import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createTestStore } from '../../../common/utils/testUtils';
import { getCountries } from '../countriesAPI';
import { CountriesList } from '../components/CountriesList/CountriesList';

let store;

describe("Test countries list", () => {
    beforeEach(() => {
        store = createTestStore();
    });

    it('renders countries list with 250 entries', async() => {
        await store.dispatch(getCountries());
        const { getAllByTestId } = render(        
            <Provider store={store}>
                <CountriesList />
            </Provider>
        );
        await waitFor(() =>expect(getAllByTestId('country-info')).toHaveLength(250));
    });

});
