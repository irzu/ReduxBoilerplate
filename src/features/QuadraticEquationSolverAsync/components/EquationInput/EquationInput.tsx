import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../store';
import { getSolutionAsync } from '../../solverAPI';

export const EquationInput = () => {
    const [ inputState, setInputState ] = useState({a: '', b: '', c: ''});
    const { isProcessing, error } = useAppSelector(state => state.solverAsync);
    const dispatch = useAppDispatch();

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        const { name, value } = e.currentTarget; 
        setInputState(prevState => ({...prevState, [name]: value}));
    };

    const renderLoadingMessage = () => (
        <div className='mt-3'>Calculating, please wait...</div>
    );

    const renderErrorMessage = () => (
        <div className='mt-3 text-danger'>
            {`Calculation failed: ${error}`}
        </div>
    );

    return (
        <div>
            <h4>Define equation</h4>
            <div className='form-inline mt-3'>
                <input className='form-control mr-1' type='number' name='a' value={inputState.a} onChange={handleChange} />
                <span><i>x<sup>2</sup> + </i></span>
                <input className='form-control mr-1' type='number' name='b' value={inputState.b} onChange={handleChange} />
                <span><i>x + </i></span>
                <input className='form-control mr-1' type='number' name='c' value={inputState.c} onChange={handleChange} />
                <span><i>= 0</i></span>
            </div>
            <button 
                className='btn btn-primary mt-3'
                onClick={() => dispatch(
                    getSolutionAsync(
                        {
                            a: Number(inputState.a), 
                            b: Number(inputState.b), 
                            c: Number(inputState.c),
                        }
                    )
                )} 
                disabled={!inputState.a || !inputState.b || !inputState.c}
            >
                Solve!
            </button>
            <div>
                { isProcessing && renderLoadingMessage() }
                { error && renderErrorMessage() }
            </div>
        </div>
    );
};
