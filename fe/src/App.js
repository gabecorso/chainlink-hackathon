import './App.css';
import React, { useState } from 'react';
import {BrowserRouter as Router } from 'react-router-dom';

import AppRouter from './components/AppRouter';
import SideBar from './components/SideBar';
import NavBar from './components/NavBar'

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="app">
      <Router>
          <NavBar isOpen={isOpen} setIsOpen={setIsOpen}/>
          <AppRouter />
          <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
      </Router>
    </div>
  );
}

export default App;
