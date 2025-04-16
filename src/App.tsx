import { HelloWorld } from "./features/HelloWorld/components/HelloWorld/HelloWorld";
import './App.css';
import { SolverApp } from "./features/QuadraticEquationSolver/components/SolverApp/SolverApp";

const App = () => {
    return (
        <>
            <header>Redux Toolkit Playground</header>
            <div className="main">
                <HelloWorld/>
                <SolverApp />
            </div>
        </>
    );
};

export default App;
