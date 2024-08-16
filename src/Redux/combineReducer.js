import { combineReducers } from "@reduxjs/toolkit";
import projectReducer from "./ProjectsCRUD/Project/projectSlice";
import featureReducer from "./ProjectsCRUD/Feature/featureSlice";
import todoReducer from "./ProjectsCRUD/Todo/todoSlice";
import dashboardReducer from "./ProjectsCRUD/Dashboard/dashboardSlice"

const reducer = combineReducers({
  projects: projectReducer,
  features: featureReducer,
  todos: todoReducer,
  dashboard: dashboardReducer
});

export default reducer;
