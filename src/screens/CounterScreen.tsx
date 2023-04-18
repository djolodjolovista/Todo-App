import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/reducers';
import { increment, decrement } from '../redux/actions';

const CounterScreen = () => {
  const counter = useSelector((state: RootState) => state.counter.number);
  const isLogged = useSelector((state: RootState) => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment(4))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {isLogged ? <h3>Valuable information that I should not see!</h3> : ''}
    </div>
  );
};

export default CounterScreen;
