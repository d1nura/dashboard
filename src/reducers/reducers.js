import todoReducer from "./todoReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  todoReducer: todoReducer
});

export default allReducers;
