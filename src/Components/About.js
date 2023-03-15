import '../App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs, faNode, faReact } from '@fortawesome/free-brands-svg-icons';
import { faGlobe, faGraduationCap, faLightbulb } from '@fortawesome/free-solid-svg-icons'


function About() {

  const languages = [
    { icon: faJs, name: 'JavaScript' },
    { icon: faNode, name: 'Node.js' },
    { icon: faReact, name: 'React' }
  ];

  const skills = [
    { icon: faGlobe, title: 'Network Engineer Experience' },
    { icon: faGraduationCap, title: 'Constant self-development' },
    { icon: faLightbulb, title: 'Clear sense of purpose' }
  ];

  return (
    <div id='about'>
      <div className='about__margin'>
        <h1>About me</h1>

        <div className='about__boxsort-lang'>
          {languages.map((language, index) => (
            <div key={index}>
              <FontAwesomeIcon icon={language.icon} className='about__icon-lang' />
              <h2>{language.name}</h2>
            </div>
          ))}
        </div>

        <div className='about__boxsort-str'>
          {skills.map((skill, index) => (
            <div key={index} className='about__whitebox'>
              <FontAwesomeIcon icon={skill.icon} className='about__icon-str' />
              <h2>{skill.title}</h2>
            </div>
          ))}
        </div>

        {/* responsive - about__boxsort-str */}
        <div className='about__responsive'>
          {skills.map((skill, index) => (
            <div key={index}>
              <FontAwesomeIcon icon={skill.icon} className='about__icon-str' />
              <h2>{skill.title}</h2>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}


export default About;
