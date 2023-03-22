import '../App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faJs, faNode, faReact } from '@fortawesome/free-brands-svg-icons';
import { faGlobe, faGraduationCap, faLightbulb } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguages, setSkills } from '../store.js';
import { useTranslation } from 'react-i18next';


function About() {

  // react-i18next 
  const { t } = useTranslation();

  const languages = useSelector((state)=>state.dataSlice.languages);
  const skills = useSelector((state)=>state.dataSlice.skills);
  const dispatch = useDispatch();

  // It contains the data call method of fontawesome (Because of the difference in the way data is called)
  library.add(faJs, faNode, faReact, faGlobe, faGraduationCap, faLightbulb);

  // Fontawesome has a different calling structure of data, so it must be declared separately.
  const languageIcons = {
    faJs: faJs,
    faNode: faNode,
    faReact: faReact
  };
  const skillIcons = {
    faGlobe: faGlobe,
    faGraduationCap: faGraduationCap,
    faLightbulb: faLightbulb
  };


  useEffect(() => {
    axios.get('https://nodejs-test-380807.an.r.appspot.com/')
      .then(response => {
        dispatch(setLanguages(response.data.languages));
        dispatch(setSkills(response.data.skills));
      })
      .catch(error => {
        console.log(error);
      });
  }, [dispatch]);

  /* Annotation is data contained in node.js server.
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
  */

  return (
    <div id='about'>
      <div className='about__container'>
        <h1>{t('About me')}</h1>

        <div className='about__boxsort-lang'>
          {languages.map((language, index) => (
            <div key={index}>
              <FontAwesomeIcon icon={languageIcons[language.icon]} className='about__icon-lang' />
              <h2>{language.name}</h2>
            </div>
          ))}
        </div>

        <div className='about__boxsort-str'>
          {skills.map((skill, index) => (
            <div key={index} className='about__whitebox'>
              <FontAwesomeIcon icon={skillIcons[skill.icon]} className='about__icon-str' />
              <h2>{t(skill.title)}</h2>
            </div>
          ))}
        </div>

        {/* responsive - about__boxsort-str */}
        <div className='about__responsive'>
          {skills.map((skill, index) => (
            <div key={index}>
              <FontAwesomeIcon icon={skillIcons[skill.icon]} className='about__icon-str' />
              <h2>{t(skill.title)}</h2>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}


export default About;
