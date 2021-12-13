import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import configureReducers from './ConfigReducer';
var createStoreWithMiddleware = composeWithDevTools(applyMiddleware(thunk))(
  createStore
);

export default function configureStore(reducerRegistry) {
  const rootReducer = configureReducers(reducerRegistry.getReducers());
  const store = createStoreWithMiddleware(rootReducer);

  reducerRegistry.setChangeListener((reducers) => {
    store.replaceReducer(configureReducers(reducers));
  });

  return store;
}
