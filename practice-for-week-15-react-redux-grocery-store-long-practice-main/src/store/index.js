import { legacy_createStore, combineReducers, applyMiddleware, compose } from 'redux'
import produceReducer from './produce';

const rootReducer = combineReducers({
  produce: produceReducer
});

let enhancer;

if (process.env.NODE_ENV !== "production") {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(logger));
}

const configureStore = (preloadedState = {}) => {
  return legacy_createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;