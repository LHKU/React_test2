import '../App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar, faLanguage, faArrowUpRightFromSquare, faBars } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setToggle, setIsNavColored } from '../store.js';



function Navbar() {

  const navRef = useRef(null);

  // Hide and show the li tag of toggle (Initial value is set in store.js)
  const toggle = useSelector((state)=>state.toggleSlice.toggle);
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
    const isNavColored = useSelector((state)=>state.colorSlice.isNavColored);

    function handleScroll() {
      // const nav = document.querySelector('#nav'); --> Use by changing to useRef
      const nav = navRef.current;
      const scroll = document.documentElement.scrollTop;
      if (nav && scroll > 0 && !isNavColored) {
        nav.style.backgroundColor = '#fe918d';
        nav.style.transition = 'background-color 0.3s';
        dispatch(setIsNavColored(true));
      } else if (nav && scroll === 0 && isNavColored) {
        nav.style.removeProperty('background-color');
        nav.style.removeProperty('transition');
        dispatch(setIsNavColored(false));
      }
    }
    
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    });


  const navItems = ['Home', 'About me', 'My goals', 'Review', 'Contact'];

  return (
    <div id='nav' ref={navRef}>
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

