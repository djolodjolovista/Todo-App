import { useSelector } from 'react-redux';
import { createTodo, destroyTodo, getTodos, updateTodo } from '../lib/todoServices';
import { RootState } from '../reducers';
import { Todo } from '../reducers/todo';
import { AppDispatch } from '../../index';

export enum TodoActionType {
  TODO_ADD = 'TODO_ADD',
  UPDATE_CURRENT = 'UPDATE_CURRENT',
  TODOS_LOAD = 'TODOS_LOAD',
  TODO_REPLACE = 'TODO_REPLACE',
  TODO_REMOVE = 'TODO_REMOVE'
}

export enum MessagesActionType {
  MESSAGE_SHOW = 'MESSAGE_SHOW'
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
    dispatch(showMessage('Loading Todos'));
    getTodos().then((todos) => dispatch(loadTodos(todos)));
  };
};

export const addTodo = (todo: Todo) => ({ type: 'TODO_ADD', payload: todo });

export const saveTodo = (name: string) => {
  return (dispatch: any) => {
    dispatch(showMessage('Saving Todo'));
    createTodo(name).then((res) => {
      return dispatch(addTodo(res as unknown as Todo));
    });
  };
};

export const showMessage = (msg: string) => ({
  type: MessagesActionType.MESSAGE_SHOW,
  payload: msg
});

export const replaceTodo = (todo: Todo) => ({ type: TodoActionType.TODO_REPLACE, payload: todo });

export const toggleTodo = (id: number) => {
  return (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(showMessage('Saving Todo update'));
    const { todos } = getState().todo;
    const todo: Todo = todos.find((t: Todo) => t.id === id);
    const toggled: Todo = { ...todo, isCompleted: !todo.isCompleted };
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
