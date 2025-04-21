import { EquationInput } from '../EquationInput/EquationInput';
import { SolutionDisplay } from '../SolutionDisplay/SolutionDisplay';
import classNames from '../../../../common/styles/SolverApp.module.css'

export const SolverApp = () => (
    <div className={classNames.wrapper}>
        <h3 style={{ marginBottom:30 }}>Quadratic Equation Solver</h3>
        <EquationInput />
        <SolutionDisplay />
    </div>
);
