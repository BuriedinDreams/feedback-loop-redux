import { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function FormPageOne() {

  const history = useHistory(); // this is used get to the next page
  const dispatch = useDispatch();


  
  return(

      <>
        <h2>How are you feeling today?</h2>
        <p>Enter a number between 1 and 5.</p>
        <form onSubmit={}>
          <input type='number'
            onChange={(event) => handleChange(event)}
            placeholder='Please enter a number between 1 and 5' //
            value={}
          />
          <input type='submit' value='Update Student' />
        </form>
      </>
    );
  

}


export default FeelingToday;