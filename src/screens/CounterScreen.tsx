import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/reducers';
import { increment, decrement, updateCounterStep } from '../redux/actions';
import './CounterScreen.css';

const CounterScreen = () => {
  const counter = useSelector((state: RootState) => state.counter.number);
  const step = useSelector((state: RootState) => state.counter.step);
  const isLogged = useSelector((state: RootState) => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <div>
        <div className="buttons-container">
          <button className="counter-buttons" onClick={() => dispatch(increment(step))}>
            +
          </button>
          <button className="counter-buttons" onClick={() => dispatch(decrement(step))}>
            -
          </button>
        </div>
        {isLogged ? <h3>Valuable information that I should not see!</h3> : ''}
        <div className="step-container">
          <h3>Step:</h3>
          <input
            className="step-input"
            type="number"
            value={step}
            onChange={(e) =>
              isNaN(parseInt(e.target.value))
                ? 0
                : dispatch(updateCounterStep(parseInt(e.target.value)))
            }
          />
        </div>
      </div>
    </div>
  );
};

export default CounterScreen;
