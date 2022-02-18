import React from 'react';
import { useAppSelector, useAppDispatch } from '../../../../store';
import { Solution } from '../../types';

export const SolutionDisplay = () => {
    const { solutions } = useAppSelector(state => state.solver);

    const renderSolution = (solution: Solution) => {
        const { a, b, c, root1, root2 } = solution;

        return (
            <div key={root1}>
                {`The roots of the equation `}
                <i>{`${a}x`}{<sup>2</sup>}{`+ ${b}x + ${c} = 0`}</i>
                {` are: `}
                <b>{`${root1}`}</b> and <b>{`${root2}`}</b>
            </div>
        );
    };

    return (
        <div className='mt-3'>
            <h4>Solutions</h4>
            { solutions.length === 0 && <span>No solutions yet...</span>}
            { solutions.map(solution => renderSolution(solution))}
        </div>
    );
};
