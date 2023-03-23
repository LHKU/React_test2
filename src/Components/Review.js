import '../App.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { incrementCurrentSlide } from '../store.js';
import img_sakura from '../Image/sakura_home.jpg';
import { getWords } from '../store';
import { useTranslation } from 'react-i18next';


// const words = ["💗HTML💗", "💞CSS💞", "💕React💕"]; --> store.js
const SLIDE_DURATION = 2000; 


function Review() {

  // react-i18next 
  const { t } = useTranslation();

  const navigate = useNavigate();

  function handleButtonClick() {
    navigate('/404', { replace: false });
  }


  const currentSlide = useSelector((state)=>state.reviewSlice.currentSlide);
  const dispatch = useDispatch();
  const words = getWords();

  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch(incrementCurrentSlide()); 
    }, SLIDE_DURATION);

    return () => clearInterval(intervalId);
  }, [dispatch]);



  return (
    <div id='review'>
      <h1>{t('Review')}</h1>
      <h2>{t('Skill used')}</h2>
      <span className='review__slice'>{words[currentSlide]}</span>
      <div className='review__container'>
        <div className='review__left'>
          <div>
            <h2>{t('Library')}</h2>
            <p>Redux Toolkit</p>
            <p>useEffect</p>
            <p>axios</p>
            <p>react-router-dom</p>
            <p>useRef</p>
            <p>useCallback</p>
            <p>i18next</p>
            <p>SCSS</p> 
          </div>
          <div>
            <h2>{t('Tools')}</h2>
            <p>Node.js</p>
            <p>Google Cloud Platform</p>
            <p>CloudFlare</p>
            <p>GitHub</p>
          </div>
        </div>
        <div className='review__right' key={'review__right'}>
          <img src={img_sakura} alt='sakura' className='review__img'></img>
          <h2>{t('This site uses Responsive Web Design')}</h2>
          <button className="review__btn" onClick={handleButtonClick}>404 ErrorPage</button>
        </div>
      </div>
    </div>
  );
}

export default Review;

