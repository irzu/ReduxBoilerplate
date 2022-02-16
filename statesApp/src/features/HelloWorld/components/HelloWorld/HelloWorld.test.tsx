import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { HelloWorld } from './HelloWorld';
import { createTestStore } from '../../../../common/utils/testUtils';
import { setName } from '../../helloWorldSlice';

let store;

describe("Test HelloWorld App", () => {
    beforeEach(() => {
        store = createTestStore();
    });

    test('renders empty hello message', async() => {
        const { getByTestId } = render(        
            <Provider store={store}>
                <HelloWorld />
            </Provider>
        );
        expect(getByTestId('welcome-message')).toBeInTheDocument();
    });

    test('renders personalized hello message ', async() => {
        await store.dispatch(setName('TestUser'));
        const { getByTestId } = render(        
            <Provider store={store}>
                <HelloWorld />
            </Provider>
        );
        expect(getByTestId('welcome-message')).toContainHTML('TestUser');
    });
});
