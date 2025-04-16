import { HelloWorld } from "./features/HelloWorld/components/HelloWorld/HelloWorld";
import './App.css';

const App = () => {
    return (
        <>
            <header>Redux Toolkit Playground</header>
            <div className="main">
                <HelloWorld/>
            </div>
        </>
    );
};

export default App;
