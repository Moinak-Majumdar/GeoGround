import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import logo from './logo.svg';
import GeoGround from './App/2.Weather/DotGround';

function App() {
  return (
    <>
      <BrowserRouter>
        <GeoGround/>
      </BrowserRouter>
    </>
  );
}

export default App;
