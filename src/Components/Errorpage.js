import '../App.css';
import { useNavigate } from 'react-router-dom'

const errorMessage = '404';
const pageNotFoundMessage = 'Page not found';

function Errorpage() {

  const navigate = useNavigate();

  function handleButtonClick() {
    navigate('/', { replace: false });
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
