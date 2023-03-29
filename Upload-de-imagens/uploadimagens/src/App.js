import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';

import Home from './components/page/Home'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {
  return (
    <Router>
      <Navbar/>
       <Routes>
          <Route exact path="/" element={<Home/>}/>
       </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
