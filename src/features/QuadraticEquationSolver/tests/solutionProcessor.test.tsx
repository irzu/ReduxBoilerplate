import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createTestStore } from '../../../common/utils/testUtils';
import { getSolutionAsync } from '../solverAPI';
import { SolutionDisplay } from '../components/SolutionDisplay/SolutionDisplay';

let store;

describe("Test Quadratic Equation solver App", () => {
    beforeEach(() => {
        store = createTestStore();
    });

    it('solves equation that has one root', async() => {
        await store.dispatch(getSolutionAsync({a:4, b:4, c:1}));
        const { getByTestId } = render(        
            <Provider store={store}>
                <SolutionDisplay />
            </Provider>
        );
        await waitFor(() =>expect(getByTestId('solution')).toHaveTextContent('The equation 4x2+ 4x + 1 = 0 has one root: -0.5'));
    });

    it('solves equation that has two real roots', async() => {
        await store.dispatch(getSolutionAsync({a:10, b:5, c:0}));
        const { getByTestId } = render(        
            <Provider store={store}>
                <SolutionDisplay />
            </Provider>
        );
        await waitFor(() =>expect(getByTestId('solution')).toHaveTextContent('The equation 10x2+ 5x + 0 = 0 has two roots: 0 and -0.5'));
    });

    it('solves equation that has two complex roots', async() => {
        await store.dispatch(getSolutionAsync({a:10, b:5, c:34}));
        const { getByTestId } = render(        
            <Provider store={store}>
                <SolutionDisplay />
            </Provider>
        );
        await waitFor(() =>expect(getByTestId('solution')).toHaveTextContent('The equation 10x2+ 5x + 34 = 0 has two roots: -0.25 + 1.83i and -0.25 - 1.83i'));
    });
});
