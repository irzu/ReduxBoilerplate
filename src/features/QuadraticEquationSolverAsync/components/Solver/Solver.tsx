import React from 'react';
import { EquationInput } from '../EquationInput/EquationInput';
import { SolutionDisplay } from '../SolutionDisplay/SolutionDisplay';
import classNames from './Solver.module.css';

export const Solver = () => (
    <div className={classNames.wrapper}>
        <h3 style={{ marginBottom:30 }}>Quadratic Equation Solver</h3>
        <EquationInput />
        <SolutionDisplay />
    </div>
);
