import { HelloWorld } from "./features/HelloWorld/components/HelloWorld/HelloWorld";
import './App.css';
import { SolverApp } from "./features/QuadraticEquationSolver/components/SolverApp/SolverApp";
import { SolverAppAsync } from "./features/QuadraticEquationSolverAsync/components/SolverAppAsync/SolverAppAsync";

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
