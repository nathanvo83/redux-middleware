import React from "react";
import "./App.css";

import { connect } from "react-redux";
// import { todoAction } from "../actions/todoAction";
import { getTodosAsync } from "../actions/todoAction";
import { bindActionCreators } from "redux";

const App = props => {
  const { todos, status, getTodosAsync } = props;
  const handlerLoad = () => {
    // console.log("1:", status);
    getTodosAsync();
    // console.log("2:", status);
  };

  return (
    <div>
      <button onClick={handlerLoad}>load todo</button>
      <br></br>
      {status === "" ? null : <label>status: {status}</label>}

      <br></br>
      {todos.map(todo => (
        <button key={todo.id}>{todo.title}</button>
      ))}
    </div>
  );
};

// const mapStateToProps = state => ({
//   todos: state.todos
// });

// shorthand
const mapStateToProps = ({ todos, status }) => ({ todos, status });

// const mapDispatchToProps = dispatch => ({
//   getTodosAsync: () => dispatch(todoAction.getTodosAsync())
// });
// shorthand
const mapDispatchToProps = dispatch =>
  bindActionCreators({ getTodosAsync }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
