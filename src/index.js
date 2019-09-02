import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import serviceWorker from './serviceWorker';
import {Provider, } from 'react-redux';
import { ConnectedRouter, } from 'connected-react-router';
// import store from './redux/store';
import configureStore, { history, } from './redux/store';

const store = configureStore();
const mountNode = document.getElementById('root');

// ReactDOM.render(<App />, mountNode);
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>, mountNode);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
