import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Banner, MainSpace, Events, Footer} from './components/components.js';


function App() {
  return (
    <div className="body">
      <Banner />
      <MainSpace />
      <Events />
      <Footer />
    </div>
  );
}

export default App;
