import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../store';
import { setName } from '../../helloWorldSlice';
import classNames from './HelloWorld.module.css';

export const HelloWorld = () => {
    const [ inputValue, setInputValue ] = useState('');

    const { userName } = useAppSelector(state => state.helloWorld);
    const dispatch = useAppDispatch();

    return (
        <div className={classNames.wrapper}>
            <h3 data-testid="welcome-message">Hello {userName}!</h3>
            <div className="form-group">
                <label>Enter your name</label>
                <input className='form-control' value={inputValue} onChange={(e) => setInputValue(e.target.value)} type='text'/>
            </div>
            <button className='btn btn-primary' onClick={() => dispatch(setName(inputValue))}>Submit</button>
        </div>
    );
};
