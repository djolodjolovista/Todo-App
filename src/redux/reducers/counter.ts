import { CounterActionType } from '../actions';

export interface CounterStateType {
  number: number;
  name: string;
  step: number;
}

const initialState: CounterStateType = {
  number: 0,
  name: 'Click-Counter',
  step: 1
};

const counterReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CounterActionType.INCREMENT:
      return {
        ...state,
        number: state.number + action.payload.step
      };

    case CounterActionType.DECREMENT:
      return {
        ...state,
        number: state.number - action.payload.step
      };

    case CounterActionType.UPDATE_STEP:
      return {
        ...state,
        step: action.payload
      };

    default:
      return state;
  }
};

export default counterReducer;
