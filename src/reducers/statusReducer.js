import { types } from "../constants/todoType";

export const statusReducer = (status = "", action) => {
  switch (action.type) {
    case types.REQUEST_START:
      console.log("starting...");
      return "starting...";

    case types.REQUEST_END:
      console.log("ending...");
      return "ending...";

    default:
      return status;
  }
};
