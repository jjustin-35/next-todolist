import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type Todo = {
  id: string;
  memo: string;
  isFinished: boolean;
};

type InitialState = {
  todos: Todo[];
};

const initialState: InitialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    postTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },
    putTodo: (state, action: PayloadAction<Todo>) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      );
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    putToggleTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, isFinished: !todo.isFinished }
          : todo
      );
    },
  },
});

export const { postTodo, putTodo, removeTodo, putToggleTodo } = todoSlice.actions;
export default todoSlice.reducer;

