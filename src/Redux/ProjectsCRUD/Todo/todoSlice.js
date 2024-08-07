import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todoList: [],
  },
  reducers: {
    createTodos: (state, action) => {
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    },
    deleteTodos: (state, action) => {
      const deletedTodos = [...state.todoList];
      const list = deletedTodos.filter((item) => item.id !== action.payload);
      return {
        ...state,
        todoList: list,
      };
    },
  },
});

export const {createTodos, deleteTodos} = todoSlice.actions
export default todoSlice.reducer
