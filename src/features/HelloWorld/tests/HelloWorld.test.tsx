import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { HelloWorld } from '../components/HelloWorld/HelloWorld';
import { setName } from '../helloWorldSlice';
import { store } from '../../../store';

describe("Test HelloWorld App", () => {

    it('renders empty hello message', async() => {
        const { getByTestId } = render(        
            <Provider store={store}>
                <HelloWorld />
            </Provider>
        );
        expect(getByTestId('welcome-message')).toContainHTML('');
    });

    it('renders personalized hello message ', async() => {
        store.dispatch(setName('TestUser'));
        const { getByTestId } = render(        
            <Provider store={store}>
                <HelloWorld />
            </Provider>
        );
        expect(getByTestId('welcome-message')).toContainHTML('TestUser');
    });
});
