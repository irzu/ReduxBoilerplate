import { useAppSelector } from '../../../../store';
import { Solution } from '../../../../common/types/types';

export const SolutionDisplay = () => {
    const { solutions, error } = useAppSelector(state => state.solver);
    const renderSolution = (solution: Solution) => {
        const { a, b, c, root1, root2, index } = solution;

        return (
            <div key={`solution-${index}`}>
                {`The equation `}
                <b>{`${a}x`}{<sup>2</sup>}{`+ ${b}x + ${c} = 0`}</b>
                {root2 ? ` has two roots: ` : ` has one root: `}
                <b>{`${root1} ${root2 ? ` and ${root2}` : ``}`}</b>
            </div>
        );
    };

    return (
        <div className='mt-3' data-testid="solutions">
            <h6>{ error }</h6>
            <h4>Solutions</h4>
            { solutions.length === 0 && <span>No solutions yet...</span>}
            { solutions.map(solution => renderSolution(solution))}
        </div>
    );
};
