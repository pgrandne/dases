import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers'
import './index.css';
import App from './App';
import { getPosts } from './actions/post';
import { getUser } from './actions/user';

const store = createStore(reducers, compose(applyMiddleware(thunk)));
store.dispatch(getPosts());
store.dispatch(getUser());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

