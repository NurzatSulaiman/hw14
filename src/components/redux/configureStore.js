import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import todoReducer from "./todo/reducers";
import FilterReducer from "./filter/reducers";
import thunk from "redux-thunk";
import postsReducer from "./post/reducers";

const rootReducer = combineReducers({
  todos: todoReducer,
  activeTodoFilter: FilterReducer,
  posts: postsReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))