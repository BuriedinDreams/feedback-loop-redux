import axios from 'axios';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function FormPageOne() {

  const history = useHistory(); // this is used get to the next page
  const dispatch = useDispatch(); // this is used to send information to the store/redux
  
  const [feeling, setFeeling] = useState('');

  

  const submitAction = (event) => {
    event.preventDefault();
    console.log('inside SubmitAction', event );
    console.log(feeling)
    dispatch({
      type:'ADD_USERS_SUBMISSION_FEELING',
    payload: feeling
     
    })
    history.push('/FormPageTwo') // this is taking the user to the next page once the button is clicked.
  }


  return(

      <>
        <h2>How are you feeling today?</h2>
        <p>Enter a number between 1 and 5.</p>
        <form onSubmit={submitAction}> 
          <input type='number' min="1" max="5" // this allows the user to only chose a number between 1 - 5.
            placeholder='1' onChange={(event) => {
              setFeeling(event.target.value); // this is capturing the input the user puts into the textbox and is then sent to the reducer.
            }} />

          <button  >
              Next
          </button>

        </form>
      </>
    );
  

}


export default FormPageOne;