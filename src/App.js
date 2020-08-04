import React from 'react';
import './App.css';

import Menu from '../src/templates/Menu';
import Footer from '../src/templates/Footer';
import Home from '../src/pages/Home'

function App() {
  return (
    <div className="App">
      <Menu />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
