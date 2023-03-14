import './App.css';

import Navbar from './Pages/Navbar.js';
import Errorpage from './Pages/Errorpage.js';
import Home from './Pages/Home.js';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'



function App() {

  // Reload to top of scroll
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, []);


  return (
    <div>
      <Routes>
        <Route path='/' element={
          <>
            <Navbar></Navbar>
            <Home></Home>
          </>
        }></Route>
        <Route path='*' element={<Errorpage></Errorpage>}></Route>
      </Routes>


      {/* TODO: 
        // CSS SCSS로 변경하기 (완)
        // CSS 글로벌 코드 작성하기 (완, 반응형은 아직)
        // Navbar 컴포넌트 따로 파일로 뺴서 import/export하기 (완)
        // Redux로 스테이트 관리하기 (완)
        // react-router-dom으로 404페이지 만들기 (완)
        // Home section 마크업,CSS스타일링 및 Home에 눈내리는 배경 적용 (완)
        */}

    </div>
  );
}


export default App;
