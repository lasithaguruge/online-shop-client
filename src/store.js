import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from './redux/reducers';

const configureStore = () => {
  const middleware = [thunk];
  if (process.env.NODE_ENV !== 'production') {
    middleware.push(logger);
  }

  const store = createStore(
    reducers,
    applyMiddleware(...middleware)
  );

  store.subscribe(() => {
    store.getState()
  });

  return store;
};

export default configureStore();
