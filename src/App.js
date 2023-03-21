import './App.css';

import Navbar from './Components/Navbar.js';
import Errorpage from './Components/Errorpage.js';
import Home from './Components/Home.js';
import About from './Components/About.js';
import Goals from './Components/Goals.js';
import Review from './Components/Review.js';
import Contact from './Components/Contact.js';
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
        <Route path='/' element={
          <>
            <Navbar></Navbar>
            <Home></Home>
            <About></About>
            <Goals></Goals>
            <Review></Review>
            <Contact></Contact>
          </>
        }></Route>
        
        <Route path='*' element={
          <>
            <Navbar></Navbar>
            <Errorpage></Errorpage>
          </>
        }></Route>
      </Routes>
    </div>
  );
}


export default App;
