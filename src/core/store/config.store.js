import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import configureReducers from './config.reducer';
var createStoreWithMiddleware = composeWithDevTools(applyMiddleware(thunk))(createStore);

export default function configureStore(reducerRegistry) {

    var rootReducer = configureReducers(reducerRegistry.getReducers())
    var store = createStoreWithMiddleware(rootReducer);

    reducerRegistry.setChangeListener((reducers) => {
        store.replaceReducer(configureReducers(reducers))
    })

    return store
}
