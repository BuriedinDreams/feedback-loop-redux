import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// Redux imports
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';


const defaultSubmission = {
  feeling: '',
  understanding: '',
  support: '',
  comments: '',
}

const piggyBank =(state = defaultSubmission, action) => {
  if (action.type === 'ADD_USERS_SUBMISSION_FEELING') {
    return { ...state, feeling: action.payload  } 
  }

  if (action.type === 'ADD_USERS_SUBMISSION_UNDERSTANDING') {
    return { ...state, understanding: action.payload  } 
  }

  if (action.type === 'ADD_USERS_SUBMISSION_SUPPORT') {
    return { ...state, support: action.payload  } 
  }

  if (action.type === 'ADD_USERS_SUBMISSION_COMMENTS') {
    return { ...state, comments: action.payload  } 
  }

  return state;

}



const reduxStore = createStore(
  combineReducers({
    piggyBank,


  }),
  applyMiddleware(logger),
);


// Wrap our App in a Provider, this makes Redux available in
// our entire application
ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
