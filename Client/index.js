import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

import 'babel-polyfill';


import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';





const store = createStore(
    (state ={}) => state,
    applyMiddleware(thunk)
)

render(
    <Provider store={store}>
      <Router history = {browserHistory} routes = {routes}/>
    </Provider>,
    document.getElementById('app')
);
