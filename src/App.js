import './App.css';
// import { IconStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar, faLanguage, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons';



function App() {
  return (
    <div>
      <Navbar></Navbar>
      {/* TODO: 리액트 공식문서처럼 Navbar에 언어변경이랑 깃허브 추가하기, 반응형 햄버거 아이콘 추가하기
       // CSS 글로벌 코드 작성하기 // 마크업 끝내기 */}
    </div>
  );
}

function Navbar() {
  return (
    <div id='nav'>
      <div className='nav__title'>
        <FontAwesomeIcon icon={faStar} size='1x' />
        <a href='#top'>Portfolio</a>
      </div>
      <ul className='nav__ul'>
        <li>Home</li>
        <li>About me</li>
        <li>Skills</li>
        <li>My goals</li>
        <li>Review</li>
        <li>Contact</li>
      </ul>
      <div className='nav__right'>
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
