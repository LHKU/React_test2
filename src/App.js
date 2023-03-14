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
        // 새로고침 시, 스크롤 최상단으로 이동하기 (완)
        // 반응형 화면 작을 때는 첫화면으로 li태그 안나오게 하기 (완)
        // 404페이지로 이동 후 다시 원래 페이지로 돌아오면 navbar의 애니메이션이 동작안함 (useEffcet로 변경 완)
        // About Section 마크업, 디자인
        // About 섹션은 데이터 JSONPlaceholder 사용해서 API로 받아오기
        // Skills Section 마크업, 디자인, 표에 애니메이션 주기
        */}

    </div>
  );
}


export default App;
