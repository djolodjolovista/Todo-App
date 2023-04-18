export interface Todo {
  id: number;
  name: string;
  isCompleted: boolean;
}

enum TodoActionType {
  TODO_ADD = 'TODO_ADD',
  UPDATE_CURRENT = 'UPDATE_CURRENT'
}

export interface TodosState {
  todos: Todo[];
  currentTodo: string;
}

const initialState: TodosState = {
  todos: [
    { id: 1, name: 'Create Static UI', isCompleted: true },
    { id: 2, name: 'Create Initial State', isCompleted: true },
    { id: 3, name: 'Use State To Render UI', isCompleted: true }
  ],
  currentTodo: 'temp'
};

const todoReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case TodoActionType.TODO_ADD:
      return {
        ...state,
        todos: state.todos.concat(action.payload) //payload ce biti todo objekat
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
