import '../App.css';
import { useNavigate } from 'react-router-dom'

const errorMessage = '404';
const pageNotFoundMessage = 'Page not found';

function Errorpage() {

  const navigate = useNavigate();

  function handleButtonClick() {
    navigate('/', { replace: false }); //If {replace: true} is changed, browser's Back button will no longer function.
  }
  

  return (
    <div key="errorPage" id='errorPage'>
      <p>{errorMessage}</p>
      <p>{pageNotFoundMessage}</p>
      <button onClick={handleButtonClick}>Go to Home</button>
    </div>
  );
}


export default Errorpage;
