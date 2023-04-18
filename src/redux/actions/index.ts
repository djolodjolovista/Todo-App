import { createTodo, getTodos } from '../lib/todoServices';
import { Todo } from '../reducers/todo';

export enum TodoActionType {
  TODO_ADD = 'TODO_ADD',
  UPDATE_CURRENT = 'UPDATE_CURRENT',
  TODOS_LOAD = 'TODOS_LOAD'
}

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

export const loadTodos = (todos: Todo[]) => ({ type: TodoActionType.TODOS_LOAD, payload: todos });

export const fetchTodos = () => {
  return (dispatch: any) => {
    //referenca na dispatch
    getTodos().then((todos) => dispatch(loadTodos(todos)));
  };
};

export const addTodo = (todo: Todo) => ({ type: 'TODO_ADD', payload: todo });

export const saveTodo = (name: string) => {
  return (dispatch: any) => {
    createTodo(name).then((res) => {
      return dispatch(addTodo(res as unknown as Todo));
    });
  };
};
