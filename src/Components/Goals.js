import '../App.css';
import Firebase from '../Image/firebase.png';
import JS from '../Image/JS.png';
import Nextjs from '../Image/Nextjs.png';
import Nodejs from '../Image/Nodejs.png';
import RT from '../Image/react.png';
import RN from '../Image/RN.png';
import TS from '../Image/TS.png';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveBtn } from '../store.js';


function Goals() {

  let activeBtn = useSelector((state)=>state.goalsSlice.activeBtn);
  const dispatch = useDispatch();

  const handleBtnClick = (btn) => {
    dispatch(setActiveBtn(btn));
  };

  const front = [
    { img: JS, alt: 'javascript', name: 'JavaScript' },
    { img: TS, alt: 'typescript', name: 'TypeScript' },
    { img: RT, alt: 'react', name: 'React' },
    { img: Nextjs, alt: 'nextjs', name: 'Next.js' },
  ];
  const back = [
    { img: Nodejs, alt: 'nodejs', name: 'Node.js' },
    { img: Firebase, alt: 'firebase', name: 'Firebase' },
  ];
  const mobile = [
    { img: RN, alt: 'reactnative', name: 'ReactNative' }
  ];


  return (
    <div id='goals'>
      <h1>My goals</h1>
      <div className='goals__title'>
        <button className={`goals__btn ${activeBtn === 'front' ? 'active' : ''}`} onClick={() => handleBtnClick('front')}>Front-end</button>
        <button className={`goals__btn ${activeBtn === 'back' ? 'active' : ''}`} onClick={() => handleBtnClick('back')}>Back-end</button>
        <button className={`goals__btn ${activeBtn === 'mobile' ? 'active' : ''}`} onClick={() => handleBtnClick('mobile')}>Mobile</button>
      </div>

      <div className={`goals__lang ${activeBtn === 'front' ? 'show' : ''}`}>
      {
        activeBtn === 'front' && (
          front.map((item, index) => (
            <div className='goals__container' key={index}>
              <img src={item.img} alt={item.alt} className='goals__img'></img>
              <div>{item.name}</div>
            </div>
          )))
      }
      </div>

      <div className={`goals__lang ${activeBtn === 'back' ? 'show' : ''}`}>
      {
        activeBtn === 'back' && (
          back.map((item, index) => (
            <div className='goals__container' key={index}>
              <img src={item.img} alt={item.alt} className='goals__img'></img>
              <div>{item.name}</div>
            </div>
          )))
      }
      </div>

      <div className={`goals__lang ${activeBtn === 'mobile' ? 'show' : ''}`}>
      {
        activeBtn === 'mobile' && (
          mobile.map((item, index) => (
            <div className='goals__container' key={index}>
              <img src={item.img} alt={item.alt} className='goals__img'></img>
              <div>{item.name}</div>
            </div>
          )))
      }
      </div>

    </div>
  );
}


export default Goals;













