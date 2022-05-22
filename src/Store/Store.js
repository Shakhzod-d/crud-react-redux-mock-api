import { createStore, combineReducers, applyMiddleware } from "redux";
import TodoReducer from "./Readucers/TodoReducer";
// import thunk from "redux-thunk";
import thunk from "redux-thunk";

const reducers = combineReducers(
  {
    todos: TodoReducer,
    // user: AuthReducer,
    // courses: CoursesReducer,
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const Store = createStore(reducers, applyMiddleware(thunk));
export default Store;
