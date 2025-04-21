import { render, screen } from '@testing-library/react';
import { TestProvider } from '../../../../common/utils/testProvider';
import { store } from '../../../../store';
import { setName } from '../../helloWorldSlice';
import { HelloWorld } from '../HelloWorld/HelloWorld';

describe("Test HelloWorld App", () => {

    it('renders empty hello message', () => {
        render(<HelloWorld />, { wrapper: TestProvider })
        expect(screen.getByTestId('welcome-message')).toContainHTML('');
    });

    it('renders personalized hello message ', () => {
        store.dispatch(setName('TestUser'));
        render(<HelloWorld />, { wrapper: TestProvider })
        expect(screen.getByTestId('welcome-message')).toContainHTML('TestUser');
    });
});
