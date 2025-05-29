import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Album from './pages/Album';
import Navbar from './components/Navbar';
import { GlobalStyle } from './styles/GlobalStyle';
// import './App.css'

const App = () => {
  return (
    <div>
        <GlobalStyle/>
        <Navbar></Navbar>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/album" element={<Album />} />
        </Routes>
    </div>
  );
};

export default App;