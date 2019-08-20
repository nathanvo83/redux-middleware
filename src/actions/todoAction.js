import { types } from "../constants/todoType";
import { todo_api_url } from "../constants/urls";
const axios = require("axios");

// sync
// const addTodo = todo => ({ type: types.ADD_TODO, todo: todo });
// const updateTodo = todo => ({ type: types.UPDATE_TODO, todo: todo });
// const deleteTodo = todo => ({ type: types.DELETE_TODO, todo: todo });

// async
const reqStart = () => ({ type: types.REQUEST_START });
const reqEnd = () => ({ type: types.REQUEST_END });
const getTodos = todos => ({
  type: types.GET_TODOS,
  todos: todos
});

// async action (thunk) creators
export const getTodosAsync = () => (dispatch, getState) => {
  // start
  dispatch(reqStart());

  setTimeout(() => {
    // fetch data (success, error)
    axios
      .get(todo_api_url)
      .then(function(response) {
        // handle success
        dispatch(getTodos(response.data));
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .finally(function() {
        // always executed
        // end
        dispatch(reqEnd());
      });
  }, 3000);

  // // fetch data (success, error)
  // axios
  //   .get(todo_api_url)
  //   .then(function(response) {
  //     // handle success
  //     dispatch(getTodos(response.data));
  //   })
  //   .catch(function(error) {
  //     // handle error
  //     console.log(error);
  //   })
  //   .finally(function() {
  //     // always executed
  //     // end
  //     dispatch(reqEnd());
  //   });
};

export const todoAction = {
  getTodosAsync
};
