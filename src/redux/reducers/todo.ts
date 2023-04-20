import { TodoActionType } from '../actions';

export interface Todo {
  id: number;
  name: string;
  text: string;
  isCompleted: boolean;
}

export interface TodosState {
  todos: Todo[];
  currentTodo: string;
  currentTodoText: string;
  showConfetti: boolean;
}

const initialState: TodosState = {
  todos: [],
  currentTodo: '',
  currentTodoText: '',
  showConfetti: false
};

export enum FilterTodoType {
  ACTIVE = 'active',
  COMPLETED = 'completed'
}

export const getVisibleTodos = (todos: Todo[], filter: string) => {
  switch (filter) {
    case FilterTodoType.ACTIVE:
      return todos.filter((t) => !t.isCompleted);

    case FilterTodoType.COMPLETED:
      return todos.filter((t) => t.isCompleted);

    default:
      return todos;
  }
};

const todoReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case TodoActionType.TODO_ADD:
      return {
        ...state,
        currentTodo: '',
        currentTodoText: '',
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

    case TodoActionType.UPDATE_CURRENT_TEXT:
      return {
        ...state,
        currentTodoText: action.payload
      };

    case TodoActionType.TODO_REPLACE:
      return {
        ...state,
        todos: state.todos.map((t) => (t.id === action.payload.id ? action.payload : t)) //ako je ispunjen uslov vrati novi todo ako nije vrati stari todo
      };

    case TodoActionType.TODO_REMOVE:
      return {
        ...state,
        todos: state.todos.filter((t) => t.id != action.payload)
      };

    case TodoActionType.SHOW_CONFETTI:
      return {
        ...state,
        showConfetti: action.payload
      };

    default:
      return state;
  }
};

export default todoReducer;
