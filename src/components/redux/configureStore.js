import {combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import todoReducer from "./todo/reducers";
import FilterReducer from "./filter/reducers";

const rootReducer = combineReducers({
  todos: todoReducer,
  activeTodoFilter: FilterReducer
})

export const store = createStore(rootReducer, composeWithDevTools())