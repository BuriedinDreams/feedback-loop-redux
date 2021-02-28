
import { useHistory } from 'react-router-dom';


function ThanksForFeedBack() {

  const history = useHistory(); // this is used get to the next page

  function backToStart() {

    history.push('/') // this will take the user back to start.

  }


  return(
    <div>

        <h1>Thanks for your Feedback.</h1>

        <p>Click the button below to submit a new feedback</p>

        <button onClick={backToStart} >Leave New Feedback</button>

    </div>

  );

}





export default ThanksForFeedBack