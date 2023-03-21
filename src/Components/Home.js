
import '../App.css';
import img_sakura from '../Image/sakura_home.jpg';
import { useTranslation } from 'react-i18next';


function Home() {

  // react-i18next 
  const { t } = useTranslation();

  // snow animation
  const snowflakes = Array.from({ length: 25 }).map((_, i) => (
    <div className="snow" key={i}></div>
  ));

  
  return (
    <div id='home'>
      {snowflakes} 
      <div className='home__container'>
      <img src={img_sakura} alt='sakura' className='home__avatar'></img>
        <h1 className='home__title'>
          {t('Hello,')}<br />
          {t('Dreams Come to Life')}
        </h1>
        <h2 className='home__description'>
        {t('IT Engineer currently residing in Tokyo, Japan.')}
        </h2>
      </div>
    </div>
  );
}


export default Home;
