import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Banner, MainSpace} from './comps.js';


function App() {
  return (
    <div className="body">
      <Banner />
      <MainSpace />
    </div>
  );
}

export default App;
