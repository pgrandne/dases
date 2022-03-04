import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers'
import './index.css';
import App from './App';
import { getSds } from './actions/sd';
import { getUser } from './actions/user';

const store = createStore(reducers, compose(applyMiddleware(thunk)));
store.dispatch(getSds());
store.dispatch(getUser());

ReactDOM.render(
  <div>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </div>,
    document.getElementById('root')
);

