import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Todo } from "@/constants/type";

type TodoInitialState = {
  todos: Todo[];
};

const initialState: TodoInitialState = {
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

