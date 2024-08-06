import { createSlice } from "@reduxjs/toolkit";

const dataReducer = createSlice({
  name: "data",
  initialState: {
    projectsList: [],
    featuresList: [],
    todosList: [],
    featuresCount: 0,
    todosCount: 0,
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
    projectFeatures: (state, action) => {
      const featuresData = state.featuresList?.filter(
        (item) => item.p_id === action.payload
      );
      return {
        ...state,
        featuresList: featuresData,
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
  projectFeatures,
} = dataReducer.actions;
export default dataReducer.reducer;
