import '../App.css';
import { Link } from 'react-router-dom'


const errorMessage = '404';
const pageNotFoundMessage = 'Page not found';

function Errorpage() {
  return (
    <div id='errorpage'>
      <p>{errorMessage}</p>
      <p>{pageNotFoundMessage}</p>
      <Link to='/'><button>Go to Home</button></Link>
    </div>
  );
}


export default Errorpage;
