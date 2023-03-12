import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar, faLanguage, faArrowUpRightFromSquare, faBars } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useState, useEffect } from 'react';




function App() {

  return (
    <div>
      <Navbar></Navbar>
      {/* TODO: 
       // CSS 글로벌 코드 작성하기
       // Navbar 컴포넌트 따로 파일로 뺴서 import/export하기
       // Redux로 스테이트 관리하기 */}

    </div>
  );
}



function Navbar() {

  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        const navLi = document.querySelectorAll('.nav__li');
        navLi.forEach((li) => {
          li.style.display = 'block';
        });
      } else {
        const navLi = document.querySelectorAll('.nav__li');
        navLi.forEach((li) => {
          li.style.display = toggle ? 'block' : 'none';
        });
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [toggle]);

  return (
    <div id='nav'>
      <div className='nav__title'>
        <FontAwesomeIcon icon={faStar} size='1x' />
        <a href='#top'>Portfolio</a>
      </div>
      <ul className='nav__ul'>
        <li style={{display:toggle ? 'block' : 'none'}} className='nav__li'>Home</li>
        <li style={{display:toggle ? 'block' : 'none'}} className='nav__li'>About me</li>
        <li style={{display:toggle ? 'block' : 'none'}} className='nav__li'>Skills</li>
        <li style={{display:toggle ? 'block' : 'none'}} className='nav__li'>My goals</li>
        <li style={{display:toggle ? 'block' : 'none'}} className='nav__li'>Review</li>
        <li style={{display:toggle ? 'block' : 'none'}} className='nav__li'>Contact</li>
      </ul>
      <div className='nav__right'>
        <button className='nav__toggle' onClick={handleToggle}>
          <FontAwesomeIcon icon={faBars} size='2x'/>
        </button>
        <div>
          <FontAwesomeIcon icon={faLanguage} size='2x'/>
          <span>Languages</span>
        </div>
        <a href='#top'>
          <span>GitHub</span>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} size='1x' className='nav__github'/>
          <FontAwesomeIcon icon={faGithub} size='2x' className='nav__github'/>
        </a>
      </div>
    </div>
  );
}

export default App;
