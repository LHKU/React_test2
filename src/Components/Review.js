import '../App.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import img_sakura from '../Image/sakura_home.jpg';

const words = ["💗HTML💗", "💞CSS💞", "💕React💕"];
const SLIDE_DURATION = 2500; 


function Review() {

  const navigate = useNavigate();

  function handleButtonClick() {
    navigate('/404', { replace: false });
  }


  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % words.length); // Repeating slices indefinitely with %
    }, SLIDE_DURATION);

    return () => clearInterval(intervalId);
  }, [currentSlide]);



  return (
    <div id='review'>
      <h1>Review</h1>
      <h2>Skill used</h2>
      <span className='review__slice'>{words[currentSlide]}</span>
      <div className='review__container'>
        <div className='review__left'>
          <div>
            <h2>Library</h2>
            <p>Redux Toolkit</p>
            <p>useEffect</p>
            <p>axios</p>
            <p>react-router-dom</p>
            <p>useRef</p>
            <p>react-intl</p>
            <p>SCSS</p> 
          </div>
          <div>
            <h2>Tools</h2>
            <p>node.js</p>
            <p>Google Cloud Platform</p>
            <p>GitHub</p>
          </div>
        </div>
        <div className='review__right' key={'review__right'}>
          <img src={img_sakura} alt='sakura' className='review__img'></img>
          <h2>This site uses Responsive Web Design</h2>
          <button className="review__btn" onClick={handleButtonClick}>404 ErrorPage</button>
        </div>
      </div>
    </div>
  );
}

export default Review;

