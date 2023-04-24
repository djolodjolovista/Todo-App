import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export type Todo = {
  id: number;
  name: string;
  text: string;
  isCompleted: boolean;
};

export enum Status {
  IDLE = 'idle',
  LOADING = 'loading',
  SUCCEEDED = 'succeeded',
  FAILED = 'failed'
}

interface TodoState {
  todos: Todo[];
  currentTodoTitle: string;
  currentTodoText: string;
  showConfetti: boolean;
  status: Status;
  error: string | null;
}
const initialState: TodoState = {
  todos: [],
  currentTodoTitle: '',
  currentTodoText: '',
  showConfetti: false,
  status: Status.IDLE,
  error: null
};

export enum FilterTodoType {
  ACTIVE = 'active',
  COMPLETED = 'completed'
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    todoAdd: (state, action: PayloadAction<Todo>) => {
      (state.currentTodoTitle = ''),
        (state.currentTodoText = ''),
        (state.todos = state.todos.concat(action.payload));
    },
    updateCurrentText: (state, action: PayloadAction<string>) => {
      state.currentTodoText = action.payload;
    },
    updateCurrentTitle: (state, action: PayloadAction<string>) => {
      state.currentTodoTitle = action.payload;
    },
    toggleConfetti: (state, action: PayloadAction<boolean>) => {
      state.showConfetti = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = Status.LOADING;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = Status.SUCCEEDED;
        state.todos = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = Status.FAILED;
        state.error = action.error.message!;
      })
      .addCase(addNewTodo.fulfilled, (state, action) => {
        state.todos.push(action.payload);
        state.currentTodoText = '';
        state.currentTodoTitle = '';
      })
      .addCase(deleteTodo.fulfilled, (state, action: PayloadAction<number>) => {
        state.todos = state.todos.filter((t) => t.id != action.payload); //u action.payload je ono sto vrati f-ja deleteTodo
      })
      .addCase(updateTodo.fulfilled, (state, action: PayloadAction<Todo>) => {
        state.todos = state.todos.map((t) =>
          t.id === action.payload.id ? { ...t, isCompleted: !t.isCompleted } : t
        );
      });
  }
});

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await fetch('http://localhost:8080/todos').then((res) => res.json());
  return response;
});

export const addNewTodo = createAsyncThunk(
  'todos/addNewTodo',
  async ({ name, text, isCompleted = false }: Todo) => {
    const response = (
      await fetch('http://localhost:8080/todos', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: name, text: text, isCompleted: isCompleted })
      })
    ).json();
    return response;
  }
);
//iz drugog parametra createAsyncThunk se moze destructure dispatch
export const updateTodo = createAsyncThunk('todos/updateTodo', async (todo: Todo, { dispatch }) => {
  const updatedTodo: Todo = { ...todo, isCompleted: !todo.isCompleted };
  updatedTodo.isCompleted && dispatch(toggleConfetti(updatedTodo.isCompleted));
  const response = (
    await fetch(`http://localhost:8080/todos/${todo.id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedTodo)
    })
  ).json();
  return response;
});

export const deleteTodo = createAsyncThunk('todos/deleteTodo', async (todo: Todo) => {
  await fetch(`http://localhost:8080/todos/${todo.id}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  });

  return todo.id; //ovo vraca kao action payload u addCase
});

//F-ja za filtriranje todos-a
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

export const { todoAdd, updateCurrentTitle, updateCurrentText, toggleConfetti } = todoSlice.actions;
export default todoSlice.reducer;
