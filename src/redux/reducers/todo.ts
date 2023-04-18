import { getTodos } from '../lib/todoServices';

export interface Todo {
  id: number;
  name: string;
  isCompleted: boolean;
}

enum TodoActionType {
  TODO_ADD = 'TODO_ADD',
  UPDATE_CURRENT = 'UPDATE_CURRENT',
  TODOS_LOAD = 'TODOS_LOAD'
}

export interface TodosState {
  todos: Todo[];
  currentTodo: string;
}

const initialState: TodosState = {
  todos: [],
  currentTodo: 'temp'
};

export const loadTodos = (todos: Todo[]) => ({ type: TodoActionType.TODOS_LOAD, payload: todos });

export const fetchTodos = () => {
  return (dispatch: any) => {
    //referenca na dispatch
    getTodos().then((todos) => dispatch(loadTodos(todos)));
  };
};

const todoReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case TodoActionType.TODO_ADD:
      return {
        ...state,
        todos: state.todos.concat(action.payload) //payload ce biti todo objekat
      };

    case TodoActionType.TODOS_LOAD:
      return {
        ...state,
        todos: action.payload
      };

    case TodoActionType.UPDATE_CURRENT:
      return {
        ...state,
        currentTodo: action.payload
      };

    default:
      return state;
  }
};

export default todoReducer;
