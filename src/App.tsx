import './App.css';
import { CountriesList } from "./features/CountriesList/components/CountriesList/CountriesList";
import { HelloWorld } from "./features/HelloWorld/components/HelloWorld/HelloWorld";
import { SolverApp } from "./features/QuadraticEquationSolver/components/SolverApp/SolverApp";
import { SolverAppAsync } from "./features/QuadraticEquationSolverAsync/components/SolverAppAsync/SolverAppAsync";

const App = () => {
    return (
        <>
            <header>Redux Toolkit Playground</header>
            <div className="main">
                <h3>Welcome to Redux Toolkit Playground</h3>
                <p>Go to App.tsx and uncomment the apps you want to play with, altenatively follow the tutorial step by step and see the codebase incrementing gradually by switching to one of below branches:</p>
                <ul>
                    <li>chapter1-HelloWorld</li>
                    <li>chapter2-EquationSolver</li>
                    <li>chapter3-EquationSolverAsync</li>
                    <li>chapter4-CountriesList</li>
                </ul>
                <hr/>
                {/* <HelloWorld/> */}
                {/* <SolverApp /> */}
                {/* <SolverAppAsync /> */}
                {/* <CountriesList /> */}
            </div>
        </>
    );
};

export default App;
