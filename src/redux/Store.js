import { combineReducers, createStore, applyMiddleware  } from 'redux'
import HomeReducer from "./reducers/HomeReducer";
import LoginReducer from "./reducers/LoginReducer";

import thunk from 'redux-thunk';
import SearchReducer from "./reducers/SearchReducer";

const combinedReducers = combineReducers({
    HomeReducer,
    LoginReducer,
    SearchReducer
})

const store = createStore(combinedReducers, applyMiddleware(thunk))

export default store