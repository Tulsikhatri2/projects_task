import { createSlice } from "@reduxjs/toolkit";

const dataReducer = createSlice({
  name: "data",
  initialState: {
    projectsList: [],
    featuresList: [],
    todosList: [],
  },
  reducers: {
    createProject: (state, action) => {
      return {
        ...state,
        projectsList: [...state.projectsList, action.payload],
      };
    },

    createFeature: (state, action) => {
      return {
        ...state,
        featuresList: [...state.featuresList, action.payload],
      };
    },

    createTodos: (state, action) => {
      return {
        ...state,
        todosList: [...state.todosList, action.payload],
      };
    },

    deleteProject: (state, action) => {
      const deletedProject = [...state.projectsList];
      const list = deletedProject.filter(
        (items) => items.id !== action.payload
      );
      return {
        ...state,
        projectsList: list,
      };
    },
    deleteFeature: (state, action) => {
      const deletedFeatures = [...state.featuresList];
      const list = deletedFeatures.filter(
        (items) => items.id !== action.payload
      );
      return {
        ...state,
        featuresList: list,
      };
    },
    deleteTodos: (state, action) => {
      const deletedTodos = [...state.todosList];
      const list = deletedTodos.filter((item) => item.id !== action.payload);
      return {
        ...state,
        todosList: list,
      };
    },
  },
});

export const {
  createProject,
  createFeature,
  deleteFeature,
  deleteProject,
  createTodos,
  deleteTodos,
} = dataReducer.actions;
export default dataReducer.reducer;
