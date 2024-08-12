import { combineReducers } from "@reduxjs/toolkit";
import projectReducer from "./ProjectsCRUD/Project/projectSlice";
import featureReducer from "./ProjectsCRUD/Feature/featureSlice";
import todoReducer from "./ProjectsCRUD/Todo/todoSlice";

const reducer = combineReducers({
  projects: projectReducer,
  features: featureReducer,
  todos: todoReducer,
});

export default reducer;
