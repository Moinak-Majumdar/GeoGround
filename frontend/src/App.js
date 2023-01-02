import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import About from './pages/About';
import Home from './pages/Home';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route exact='true' path='/home' element={<Home />} />
        <Route exact='true' path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
