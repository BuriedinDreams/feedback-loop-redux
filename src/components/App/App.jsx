import React from 'react';
import axios from 'axios';
import './App.css';
import FormPageOne from '../FormPageOne/FormPageOne'
import FormPageTwo from '../FormPageTwo/FormPageTwo'

import {HashRouter as Router, Route, Link} from 'react-router-dom';


function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Router>
            <div>
                <Link to="/FormPageOne">Start</Link>
            </div>

        <Route path='/FormPageOne' exact >
          <FormPageOne />
        </Route>

       
        <Route path="/FormPageTwo" exact>
          < FormPageTwo />
        </Route>
        

      </Router>
    </div>
  );
}

export default App;
