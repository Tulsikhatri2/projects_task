import { combineReducers } from "@reduxjs/toolkit";
import dataReducer from "./ProjectsCRUD/dataSlice";

const reducer = combineReducers({
  data: dataReducer,
});

export default reducer;
