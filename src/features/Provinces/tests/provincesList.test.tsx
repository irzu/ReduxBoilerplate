import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createTestStore } from '../../../common/utils/testUtils';
import { ProvinceList } from '../components/ProvinceList/ProvinceList';
import { setSelectedCountry } from '../../Countries/countriesSlice';

let store;
jest.setTimeout(20000)

describe("Test provinces list", () => {
    beforeEach(() => {
        store = createTestStore();
    });

    it('renders a list of German lands and verifies it has 16 items', async() => {
        await store.dispatch(setSelectedCountry('Germany'));
        const { getByTestId, getAllByTestId } = render(        
            <Provider store={store}>
                <ProvinceList />
            </Provider>
        );
        await waitFor(() =>expect(getByTestId('loading')).not.toBeInTheDocument);
        await waitFor(() =>expect(getAllByTestId('province-item')).toHaveLength(16));
    });
});
