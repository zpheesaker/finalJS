import React from 'react'

import Goals from './components/goals'
import Footer from './components/footer'
import Family from './components/family'
import Adventures from './components/adventures'
import Header from './components/header'
import './components/main.css'


import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div><Header /></div>
        
        <Routes>
          <Route path="/family" element={<Family />} />
          <Route path="/adventures" element={<Adventures />} />
          <Route path="/goals" element={<Goals />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
