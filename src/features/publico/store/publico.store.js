import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import authReducer from "./reducers/auth.reducer";
import recuperarContrasenaReducer from "./reducers/recuperar-contrasena.reducer";
import thunk from 'redux-thunk';

const reducers = combineReducers({
    authReducer,
    recuperarContrasenaReducer
});
export default createStore(reducers,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )

);
