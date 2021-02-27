import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// Redux imports
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// make a bunch of reducers | one for each page.

const pageOne =(state = '', action) => {
  if (action.type === 'ADD_USERS_SUBMISSION') {
    return action.payload 
  }
  return state;

}





const reduxStore = createStore(
  combineReducers({
    pageOne



  }),
  applyMiddleware(logger),
);


// Wrap our App in a Provider, this makes Redux available in
// our entire application
ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
