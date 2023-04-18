import { TodoActionType } from '../actions';

export interface Todo {
  id: number;
  name: string;
  isCompleted: boolean;
}

export interface TodosState {
  todos: Todo[];
  currentTodo: string;
}

const initialState: TodosState = {
  todos: [],
  currentTodo: 'temp'
};

const todoReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case TodoActionType.TODO_ADD:
      return {
        ...state,
        currentTodo: '',
        todos: state.todos.concat(action.payload as Todo) //payload ce biti todo objekat
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
