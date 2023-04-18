enum CounterActionType {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT'
}

export interface CounterStateType {
  number: number;
  name: string;
}

const initialState: CounterStateType = {
  number: 0,
  name: 'Click-Counter'
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
        number: state.number - 1
      };

    default:
      return state;
  }
};

export default counterReducer;
