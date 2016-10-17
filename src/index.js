import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
// Router object decides what react components are rendered onto the screen
// browserHistory object that tells react router how to interpret changes to the url
// can use hashHistory #url_stuff
import reducers from './reducers';
import routes from './routes';
import promise from 'redux-promise';

// before reaching the reducers it goes through this middleware
const createStoreWithMiddleware = applyMiddleware(
  promise
)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>
  , document.querySelector('.container'));
