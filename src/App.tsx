import { HelloWorld } from "./features/HelloWorld/components/HelloWorld/HelloWorld";
import './App.css';
import { SolverApp } from "./features/QuadraticEquationSolver/components/SolverApp/SolverApp";
import { SolverAppAsync } from "./features/QuadraticEquationSolverAsync/components/SolverAppAsync/SolverAppAsync";
import { CountriesList } from "./features/CountriesList/components/CountriesList/CountriesList";

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
