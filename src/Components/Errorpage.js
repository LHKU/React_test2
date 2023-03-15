import '../App.css';
import { Link } from 'react-router-dom'


function Errorpage() {

  return (
    <div id='errorpage'>
      <p>404</p>
      <p>Page not found</p>
      <Link to='/'><button>Go to Home</button></Link>
    </div>
  );
}


export default Errorpage;
