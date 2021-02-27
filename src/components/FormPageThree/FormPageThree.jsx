import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


function FormPageThree() {

  const history = useHistory(); // this is used get to the next page
  const dispatch = useDispatch(); // this is used to send information to the store/redux

  const [support, setSupport] = useState('');

  const submitAction = (event) => {
    event.preventDefault();
    console.log('inside SubmitAction', event );
    console.log(support)
    dispatch({
      type:'ADD_USERS_SUBMISSION_SUPPORT',
    payload: support
     
    })
    history.push('/FormPageFour')
  }


  return(

    <>
        <h2>How well are you being supported?</h2>
        <p>Enter a number between 1 and 5.</p>
        <form onSubmit={submitAction}> 
          <input type='number' min="1" max="5"
            placeholder='1' onChange={(event) => {
              setSupport(event.target.value);
            }} />

          <button >
              Next
          </button>

        </form>
      </>
  );

}


export default FormPageThree;