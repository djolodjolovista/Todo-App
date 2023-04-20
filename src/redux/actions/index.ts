import { createTodo, destroyTodo, getTodos, updateTodo } from '../lib/todoServices';
import { RootState } from '../reducers';
import { Todo } from '../reducers/todo';
import { AppDispatch } from '../../index';

export enum CounterActionType {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
  UPDATE_STEP = 'UPDATE_STEP'
}

export enum TodoActionType {
  TODO_ADD = 'TODO_ADD',
  UPDATE_CURRENT = 'UPDATE_CURRENT',
  UPDATE_CURRENT_TEXT = 'UPDATE_CURRENT_TEXT',
  TODOS_LOAD = 'TODOS_LOAD',
  TODO_REPLACE = 'TODO_REPLACE',
  TODO_REMOVE = 'TODO_REMOVE',
  SHOW_CONFETTI = 'SHOW_CONFETTI'
}

export enum MessagesActionType {
  MESSAGE_SHOW = 'MESSAGE_SHOW'
}

export const updateCounterStep = (value: number) => {
  return {
    type: CounterActionType.UPDATE_STEP,
    payload: value
  };
};

export const increment = (step: number) => {
  return {
    type: CounterActionType.INCREMENT,
    payload: {
      step: step
    }
  };
};

export const decrement = (step: number) => {
  return {
    type: CounterActionType.DECREMENT,
    payload: {
      step: step
    }
  };
};

export const updateCurrentTodo = (currentTodo: string) => {
  return {
    type: TodoActionType.UPDATE_CURRENT,
    payload: currentTodo
  };
};

export const updateCurrentTodoText = (currentTodoText: string) => {
  return {
    type: TodoActionType.UPDATE_CURRENT_TEXT,
    payload: currentTodoText
  };
};

export const loadTodos = (todos: Todo[]) => ({ type: TodoActionType.TODOS_LOAD, payload: todos });

export const fetchTodos = () => {
  return (dispatch: AppDispatch) => {
    //referenca na dispatch
    dispatch(showMessage('Loading Todos'));
    getTodos().then((todos) => dispatch(loadTodos(todos)));
  };
};

export const addTodo = (todo: Todo) => ({ type: TodoActionType.TODO_ADD, payload: todo });

export const saveTodo = (name: string, text: string) => {
  return (dispatch: AppDispatch) => {
    dispatch(showMessage('Saving Todo'));
    createTodo(name, text).then((res) => {
      return dispatch(addTodo(res as unknown as Todo));
    });
  };
};

export const showMessage = (msg: string) => ({
  type: MessagesActionType.MESSAGE_SHOW,
  payload: msg
});

export const toggleConfetti = (state: boolean) => {
  return {
    type: TodoActionType.SHOW_CONFETTI,
    payload: state
  };
};

export const replaceTodo = (todo: Todo) => ({ type: TodoActionType.TODO_REPLACE, payload: todo });

export const toggleTodo = (id: number) => {
  return (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(showMessage('Saving Todo update'));
    const { todos } = getState().todo;
    const todo: Todo = todos.find((t: Todo) => t.id === id);
    const toggled: Todo = { ...todo, isCompleted: !todo.isCompleted };
    dispatch(toggleConfetti(toggled.isCompleted));
    updateTodo(toggled).then((res) => dispatch(replaceTodo(res as unknown as Todo)));
  };
};

export const removeTodo = (id: number) => ({ type: TodoActionType.TODO_REMOVE, payload: id });

//async action creator
export const deleteTodo = (id: number) => {
  //vratice f-ju koja uzima dispatch kao prvi argument
  return (dispatch: AppDispatch) => {
    dispatch(showMessage('Removing todo'));
    destroyTodo(id).then(() => dispatch(removeTodo(id)));
  };
};
