import '../App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs, faNode, faReact } from '@fortawesome/free-brands-svg-icons';
import { faGlobe, faGraduationCap, faLightbulb } from '@fortawesome/free-solid-svg-icons'


function About() {

  return (
    <div id='about'>
      <div className='about__margin'>
        <h1>About me</h1>
        <div className='about__boxsort-lang'>
          <div>
            <FontAwesomeIcon icon={faJs} className='about__icon-lang'/>
            <h2>JavaScript</h2>
          </div>
          <div>
            <FontAwesomeIcon icon={faNode} className='about__icon-lang'/>
            <h2>Node.js</h2>
          </div>
          <div>
            <FontAwesomeIcon icon={faReact} className='about__icon-lang'/>
            <h2>React</h2>
          </div>
        </div>
        <div className='about__boxsort-str'>
          <div className='about__whitebox'>
            <FontAwesomeIcon icon={faGlobe} className='about__icon-str' />
            <h2>Network Engineer Experience</h2>
          </div>
          <div className='about__whitebox'>
            <FontAwesomeIcon icon={faGraduationCap} className='about__icon-str' />
            <h2>Constant self-development</h2>
          </div>
          <div className='about__whitebox'>
            <FontAwesomeIcon icon={faLightbulb} className='about__icon-str' />
            <h2>Clear sense of purpose</h2>
          </div>
        </div>
        {/* responsive */}
        <div className='about__responsive'>
          <div>
            <FontAwesomeIcon icon={faGlobe} className='about__icon-str' />
            <h2>Network Engineer Experience</h2>
          </div>
          <div>
            <FontAwesomeIcon icon={faGraduationCap} className='about__icon-str' />
            <h2>Constant self-development</h2>
          </div>
          <div>
            <FontAwesomeIcon icon={faLightbulb} className='about__icon-str' />
            <h2>Clear sense of purpose</h2>
          </div>
        </div>
      </div>
    </div>
  );
}


export default About;
