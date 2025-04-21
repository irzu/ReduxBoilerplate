import './App.css';
import { HelloWorld } from "./features/HelloWorld/components/HelloWorld/HelloWorld";
import { SolverApp } from "./features/QuadraticEquationSolver/components/SolverApp/SolverApp";
import { SolverAppAsync } from "./features/QuadraticEquationSolverAsync/components/Solver/Solver";

const App = () => {
    return (
        <>
            <header>Redux Toolkit Playground</header>
            <div className="main">
                <HelloWorld/>
                <SolverApp />
                <SolverAppAsync />
            </div>
        </>
    );
};

export default App;
