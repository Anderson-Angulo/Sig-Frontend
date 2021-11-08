import { combineReducers, createStore, applyMiddleware } from "redux";
import authReducer from "./reducers/auth.reducer";
import thunk from 'redux-thunk';

const reducers = combineReducers({
    authReducer
});
export default createStore(reducers, applyMiddleware(thunk));
