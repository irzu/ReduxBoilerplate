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
                <HelloWorld/>
                <SolverApp />
                <SolverAppAsync />
                <CountriesList />
            </div>
        </>
    );
};

export default App;
