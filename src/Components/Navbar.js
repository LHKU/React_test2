import '../App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar, faLanguage, faArrowUpRightFromSquare, faBars } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setToggle, setIsNavColored } from '../store.js';
import { useLocation } from 'react-router-dom';



function Navbar() {
  
  const navRef = useRef(null);

  // Paths that do not correspond to "validRoutes" by storing the current location set Navbar's transparency to zero.
  const location = useLocation(); 
  const validRoutes = ['/']; // Paths that require navbar are added to validRoutes
  const isNotFoundPage = !validRoutes.includes(location.pathname);

  const navbarStyle = {
    opacity: isNotFoundPage ? 0 : 1,
  };


  // Hide and show the li tag of toggle (Initial value is set in store.js)
  const toggle = useSelector((state)=>state.toggleSlice.toggle);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(setToggle(!toggle));
  };

  useEffect(() => {
    const handleResize = () => {
      const navLi = document.querySelectorAll('.nav__li');
      if (window.innerWidth > 1024) {
        navLi.forEach((li) => {
          li.style.display = 'block';
        });
      } else {
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


  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About me', id: 'about' },
    { name: 'My goals', id: 'goals' },
    { name: 'Review', id: 'review' },
    { name: 'Contact', id: 'contact' }
  ];

  const handleScrollSmoothly = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href").slice(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth"
      });
    }
  };

  // Click the li tag in the reactive type to hide all li elements(=Hide toggle).
  // cf. Click is implemented as onClick in JSX
  const handleClickRemoveLi = () => {
    const navLi = document.querySelectorAll('.nav__li');
    if (window.innerWidth <= 1024) {
      navLi.forEach((li) => {
        li.style.display = 'none';
      });
      dispatch(setToggle(!toggle));
    } else {
      navLi.forEach((li) => {
        li.style.display = 'block';
      });
    }
  };

  return (
    <div id='nav' ref={navRef} style={navbarStyle}>
      <div className='nav__title'>
        <FontAwesomeIcon icon={faStar} size='1x' style={{ color : 'white' }} />
        <a href='#home'>Portfolio</a>
      </div>

      <ul className='nav__ul'>
        {navItems.map((item, index) => 
        <li key={index} style={{display:toggle ? 'block' : 'none'}} className='nav__li'>
          <a href={`#${item.id}`} onClick={(event) => { handleScrollSmoothly(event); handleClickRemoveLi(); }}>
            {item.name}
          </a>
        </li>
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
        <a href='https://github.com/LHKU/React_test2.git' target="blank">
          <span>GitHub</span>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} size='1x' className='nav__github' style={{ color : 'white' }} />
          <FontAwesomeIcon icon={faGithub} size='2x' className='nav__github' style={{ color : 'white' }} />
        </a>
      </div>
    </div>
  );
}

export default Navbar;

