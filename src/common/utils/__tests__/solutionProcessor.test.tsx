import { render, screen } from '@testing-library/react';
import { SolutionDisplay } from '../../../features/QuadraticEquationSolver/components/SolutionDisplay/SolutionDisplay';
import { getSolution } from '../../../features/QuadraticEquationSolver/solverSlice';
import { store } from '../../../store';
import { TestProvider } from '../testProvider';


describe("Test Quadratic Equation solver App", () => {

    it('solves equation that has one root', () => {
        store.dispatch(getSolution({a:4, b:4, c:1}));
        render(<SolutionDisplay />, {wrapper: TestProvider});
        expect(screen.getByTestId('solutions')).toHaveTextContent('The equation 4x2+ 4x + 1 = 0 has one root: -0.5');
    });

    it('solves equation that has two real roots', async() => {
        store.dispatch(getSolution({a:10, b:5, c:0}));
        render(<SolutionDisplay />, {wrapper: TestProvider});
        expect(screen.getByTestId('solutions')).toHaveTextContent('The equation 10x2+ 5x + 0 = 0 has two roots: 0 and -0.5');
    });

    it('solves equation that has two complex roots', async() => {
        store.dispatch(getSolution({a:10, b:5, c:34}));
        render(<SolutionDisplay />, {wrapper: TestProvider});
        expect(screen.getByTestId('solutions')).toHaveTextContent('The equation 10x2+ 5x + 34 = 0 has two roots: -0.25 + 1.83i and -0.25 - 1.83i');
    });
});
