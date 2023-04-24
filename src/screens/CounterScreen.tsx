import React from 'react';
import './CounterScreen.css';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { increment, decrement, updateStep } from '../features/counter/counterSlice';

const CounterScreen = () => {
  const counter = useAppSelector((state) => state.counter.value);
  const step = useAppSelector((state) => state.counter.step);
  const dispatch = useAppDispatch();
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

        <div className="step-container">
          <h3>Step:</h3>
          <input
            className="step-input"
            type="number"
            value={step}
            onChange={(e) =>
              isNaN(parseInt(e.target.value)) ? 0 : dispatch(updateStep(parseInt(e.target.value)))
            }
          />
        </div>
      </div>
    </div>
  );
};

export default CounterScreen;
