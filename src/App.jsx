import React from "react";
import './App.css';
import AddTodoContainer from "./components/containers/add-todo";
import TodoListContainer from "./components/containers/todo-list";
import {useSelector} from "react-redux";
import {getTodos} from "./components/redux/todo/selectors";
import FilterButtons from "./components/filter-buttons";

function App() {
  return (
    <div>
      <AddTodoContainer/>
      <FilterButtons/>
      <TodoListContainer/>
    </div>
  );
}

export default App;
