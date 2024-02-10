import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import Homepage from './components/Homepage';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Resources from './components/Resources';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/resources' element={<Resources />} />
      </Routes>
    </Router>
  );
}

export default App;