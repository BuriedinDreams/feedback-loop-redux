import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';



function ReviewFeedBack() {

    // this is grabbing the users final results from the survey.
  const getUsersResults = useSelector((store) => {
  return store.usersSubmission; 
  // this is our Reducer, So, we are able to retrieve the data from here --
  // and am able to place it onto the DOM.
  });

  console.log('This is users Submission', getUsersResults);


  const submitResults =() => {
  
      axios({
        method: 'POST',
        url: '/',
        data: {}
      }).then((response) => {
        console.log('RESPONSE ON POST',response);

        }).catch((error) => {
        console.log('ERROR ON POST',error);

        })  
        
  };


  return (
    <div>
      
      <h1>Review your feedback.</h1>
        
      <h3>Feelings: {getUsersResults.feeling} </h3>
      <h3>Understanding: {getUsersResults.understanding} </h3>
      <h3>Support: {getUsersResults.support} </h3>
      <h3>Comments: {getUsersResults.comments} </h3>

      <button onClick={submitResults} >Submit</button>

    </div>
  );

}


export default ReviewFeedBack