import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

function FormPageFour() {

  const history = useHistory(); // this is used get to the next page
  const dispatch = useDispatch(); // this is used to send information to the store/redux

  const [comments, setComments] = useState('');

  const submitAction = (event) => {
    event.preventDefault();
    console.log('inside SubmitAction', event );
    console.log(comments)
    dispatch({
      type:'ADD_USERS_SUBMISSION_COMMENTS',
    payload: comments
    })
    history.push('/ReviewFeedBack')

  }

  return(

    <>
        <h2>Any comment you would like to share?</h2>
        <p>Enter comment in the textbox.</p>
        <form onSubmit={submitAction}> 
          <input type='text' 
            placeholder='Comments here' onChange={(event) => {
              setComments(event.target.value);
            }} />

          <button >
              Review Results
          </button>

        </form>
      </>
  );

}


export default FormPageFour;