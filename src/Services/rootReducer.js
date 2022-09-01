import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk"; // use: to make asynchronous and did't get dispatch

const reducer = combineReducers({});

const store = createStore(reducer, applyMiddleware(thunk));


export default store;
