import { useAppSelector } from '../../../../store';
import { Solution } from '../../types';

export const SolutionDisplay = () => {
    const { solutions } = useAppSelector(state => state.solverAsync);

    const renderSolution = (solution: Solution) => {
        const { a, b, c, root1, root2 } = solution;

        return (
            <div key={root1}>
                {`The equation `}
                <b>{`${a}x`}{<sup>2</sup>}{`+ ${b}x + ${c} = 0`}</b>
                {root2 ? ` has two roots: ` : ` has one root: `}
                <b>{`${root1} ${root2 ? ` and ${root2}` : ``}`}</b>
            </div>
        );
    };

    return (
        <div className='mt-3' data-testid="solutions">
            <h4>Solutions</h4>
            { solutions.length === 0 && <span>No solutions yet...</span>}
            { solutions.map(solution => renderSolution(solution))}
        </div>
    );
};
