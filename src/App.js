import './App.css';

import Navbar from './Components/Navbar.js';
import Errorpage from './Components/Errorpage.js';
import Home from './Components/Home.js';
import About from './Components/About.js';
import Goals from './Components/Goals.js';
import Review from './Components/Review.js';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'



function App() {

  // Reload to top of scroll
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, []);


  return (
    <div id='app'>
      <Routes>
        <Route exact path='/' element={
          <>
            <Navbar></Navbar>
            <Home></Home>
            <About></About>
            <Goals></Goals>
            <Review></Review>
          </>
        }></Route>
        
        <Route exact path='*' element={
          <>
            <Navbar></Navbar>
            <Errorpage></Errorpage>
          </>
        }></Route>
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
        // About Section 마크업, 디자인 (완)
        // About 섹션 모두 map으로 바꾸기 (완)
        // About 섹션은 데이터 node.js 서버 만들어서 get으로 받아오기 axios 라이브러리 쓰기 (완)
        -> node.js 깃에 따로 레파지토리 만들어서 커밋했음
        -> https://nodejs-test-380807.an.r.appspot.com/ (node.js로 구축한 서버 url / CORS 모두허용 / 구글클라우드플랫폼 호스팅)
        // Goals Section 마크업, 디자인 (완)
        // Review Section 마크업, 디자인
        // 최하단 Thank you Section 마크업, 디자인
        // Navbar 각 페이지내 이동 a태그로 구현하기, 깃허브링크도 걸어두기 -> 반응형도 살피기
        // react-intl 라이브러리로 다국어 설정하고 반응형도 살피기 -> 노션에도 정리하기 
        // 최종 리팩토링 (반응형 확인, 변수명 확인, 크롬 개발자도구에서 컴포넌트 성능 확인, 삭선그어진 불필요한 CSS는 없는지,
        참고되는 주석은 제외하고 쓸데없는 주석 모두 삭제)
        // README.md 파일 기존내용 날리고 코드내용 설명 작성하기 
        // npm으로 빌드하고 깃에 최종커밋하기, 깃허브 페이지에 개인도메인으로 호스팅하고 ssl설정하기 
        */}
    </div>
  );
}


export default App;
