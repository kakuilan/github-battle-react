// 创建store
import { createBrowserHistory, } from 'history';
import { applyMiddleware, compose, createStore, } from 'redux';
import { routerMiddleware, } from 'connected-react-router';
import ReduxThunk from 'redux-thunk';
import combineReducers from './reducers.js';

export const history = createBrowserHistory();

// preloadedState为初始状态
export default function configureStore(preloadedState) {
  const store = createStore(
    combineReducers(history), // root reducer with router state
    preloadedState,
    compose(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        ReduxThunk
        // ... other middlewares ...
      ),
    ),
  );

  return store;
}
