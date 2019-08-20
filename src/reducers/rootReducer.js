import { combineReducers } from "redux";
import { todoReducer } from "./todoReducer";
import { statusReducer } from "./statusReducer";

export const rootReducer = combineReducers({
  todos: todoReducer,
  status: statusReducer
});
