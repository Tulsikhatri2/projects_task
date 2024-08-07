import { combineReducers } from "@reduxjs/toolkit";
import dataReducer from "./ProjectsCRUD/dataSlice";
import projectReducer from "./ProjectsCRUD/Project/projectSlice";
import featureReducer from "./ProjectsCRUD/Feature/featureSlice";
import todoReducer from "./ProjectsCRUD/Todo/todoSlice";

const reducer = combineReducers({
  data: dataReducer,
  projects: projectReducer,
  features: featureReducer,
  todos: todoReducer,
});

export default reducer;
