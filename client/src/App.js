import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import Homepage from './components/Homepage';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Resources from './components/Resources';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/resources' element={<Resources />} />
        <Route path='/testimonials' element={<Testimonials />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
