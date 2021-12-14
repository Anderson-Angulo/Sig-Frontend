import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import configureReducers from './ConfigReducer';
import axiosMiddleware from 'core/interceptors/axios.middleware';

const middleware = [/*axiosMiddleware(client, middlewareConfig),*/ thunk];

var createStoreWithMiddleware = composeWithDevTools(
  applyMiddleware(...middleware)
)(createStore);

export default function configureStore(reducerRegistry) {
  var rootReducer = configureReducers(reducerRegistry.getReducers());
  var store = createStoreWithMiddleware(rootReducer);
  axiosMiddleware(store);
  reducerRegistry.setChangeListener((reducers) => {
    store.replaceReducer(configureReducers(reducers));
  });

  return store;
}
