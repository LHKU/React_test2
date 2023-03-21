import '../App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons';


function Contact() {


  return (
    <div id='contact'>
      <div className='contact__left'>Thank you</div>
      <div className='contact__right'>
        <a href='https://github.com/LHKU/React_test2.git' target='blank' rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className='contact__github' size='2x' style={{ color : 'white' }} />
          <div>Client</div>
        </a>
        <a href='https://github.com/LHKU/NodeJS_TEST.git' target='blank' rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className='contact__github' size='2x' style={{ color : 'white' }} />
          <div>Server</div>
        </a>
      </div>
    </div>
  );
}


export default Contact;

