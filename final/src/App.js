import React from 'react'

import Goals from './components/goals'
import Footer from './components/footer'
import Family from './components/family'
import Adventures from './components/adventures'
import Header from './components/header'


import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <nav>
          <Link to="/family">Family</Link>
          <Link to="/adventures">Adventures</Link>
          <Link to="/goals">Goals</Link>
      </nav>
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
