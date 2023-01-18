import React, {useEffect} from "react";
import './App.css';
import AddTodoContainer from "./components/containers/add-todo";
import TodoListContainer from "./components/containers/todo-list";
import {useDispatch, useSelector} from "react-redux";
import {getTodos} from "./components/redux/todo/selectors";
import FilterButtons from "./components/filter-buttons";
import postsOperations from "./components/redux/post/thunk"

function App() {
  const posts = useSelector(state => state.posts.list)
  const dispatch = useDispatch()
  const {fetchPosts} = postsOperations
  useEffect(() => {
    dispatch(fetchPosts())
  },[])

  console.log(posts, 'posts')
  return (
    <div style={{width: '400px', display: 'flex', justifyContent: 'space-around', flexDirection: 'column', margin: '0 auto'}}>
      <div style={{marginTop: '40px'}}>
        <AddTodoContainer/>
        <FilterButtons/>
        <TodoListContainer/>
      </div>
    </div>
  );
}

export default App;
