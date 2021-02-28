import React from 'react';
import axios from 'axios';
import './App.css';
import FormPageOne from '../FormPageOne/FormPageOne'
import FormPageTwo from '../FormPageTwo/FormPageTwo'
import FormPageThree from '../FormPageThree/FormPageThree'
import FormPageFour from '../FormPageFour/FormPageFour'
import ReviewFeedBack from '../ReviewFeedBack/ReviewFeedBack'
import ThanksForFeedBack from '../ThanksForFeedBack/ThanksForFeedBack'

import {HashRouter as Router, Route, Link} from 'react-router-dom';


function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>

      

      <Router>

          <Route path ='/' exact >
          <div>
            <p>To begin the survey press the start button.</p>
                <Link to="/FormPageOne">Start</Link>
          </div>
          </Route>
            

        <Route path='/FormPageOne' exact >
          <FormPageOne />
        </Route>

        <Route path="/FormPageTwo" exact>
          < FormPageTwo />
        </Route>

        <Route path="/FormPageThree" exact>
          < FormPageThree />
        </Route>

        <Route path="/FormPageFour" exact>
          < FormPageFour />
        </Route>

        <Route path="/ReviewFeedBack" exact>
        <ReviewFeedBack />
        </Route>

        <Route path="/ThanksForFeedBack" exact>
        <ThanksForFeedBack />
        </Route>


        

      </Router>
    </div>
  );
}

export default App;
