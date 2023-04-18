export const increment = (step: number) => {
  return {
    type: 'INCREMENT',
    payload: {
      step: step
    }
  };
};

export const decrement = () => {
  return {
    type: 'DECREMENT'
  };
};

export const updateCurrentTodo = (currentTodo: string) => {
  return {
    type: 'UPDATE_CURRENT',
    payload: currentTodo
  };
};
