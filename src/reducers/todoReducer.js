import { types } from "../constants/todoType";

export const todoReducer = (todos = [], action) => {
  switch (action.type) {
    case types.GET_TODOS:
      console.log("->", action.todos);
      return action.todos;

    default:
      return todos;
  }
};
