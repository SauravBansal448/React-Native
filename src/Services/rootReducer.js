import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk"; // use: to make asynchronous and did't get dispatch
import homeReducer from "./Home/reducer";

const reducer = combineReducers({homeReducer});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
