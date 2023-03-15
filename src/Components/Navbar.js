import '../App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar, faLanguage, faArrowUpRightFromSquare, faBars } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setToggle } from '../store.js';



function Navbar() {

  // Hide and show the li tag of toggle (Initial value is set in store.js)
  let toggle = useSelector((state)=>state.toggleSlice.toggle);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(setToggle(!toggle));
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


  // Using Scrolls to Change Navbar Background Color
    const [isNavColored, setIsNavColored] = useState(false);

    function handleScroll() {
      const nav = document.querySelector('#nav');
      const scroll = document.documentElement.scrollTop;
      if (nav && scroll > 0 && !isNavColored) {
        nav.style.backgroundColor = '#fe918d';
        nav.style.transition = 'background-color 0.3s';
        setIsNavColored(true);
      } else if (nav && scroll === 0 && isNavColored) {
        nav.style.removeProperty('background-color');
        nav.style.removeProperty('transition');
        setIsNavColored(false);
      }
    }
    
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    });


  const navItems = ['Home', 'About me', 'My goals', 'Review', 'Contact'];

  return (
    <div id='nav'>
      <div className='nav__title'>
        <FontAwesomeIcon icon={faStar} size='1x' style={{ color : 'white' }} />
        <a href='#home'>Portfolio</a>
      </div>

      <ul className='nav__ul'>
        {navItems.map((item, index) => 
          <li key={index} style={{display:toggle ? 'block' : 'none'}} className='nav__li'>{item}</li>
        )}
      </ul>

      <div className='nav__right'>
        <button className='nav__toggle' onClick={handleToggle}>
          <FontAwesomeIcon icon={faBars} size='2x' style={{ color : 'white' }} />
        </button>
        <div>
          <FontAwesomeIcon icon={faLanguage} size='2x' style={{ color : 'white' }} />
          <span>Languages</span>
        </div>
        <a href='#top'>
          <span>GitHub</span>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} size='1x' className='nav__github' style={{ color : 'white' }} />
          <FontAwesomeIcon icon={faGithub} size='2x' className='nav__github' style={{ color : 'white' }} />
        </a>
      </div>
    </div>
  );
}

export default Navbar;

