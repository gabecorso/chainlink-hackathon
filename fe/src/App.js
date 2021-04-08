import './App.css';
import React, { useState } from 'react';
import {BrowserRouter as Router } from 'react-router-dom';

import AppRouter from './components/AppRouter';


function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="app">
   
      <AppRouter />
          {/* <NavBar isOpen={isOpen} setIsOpen={setIsOpen}/>
          <SideBar isOpen={isOpen} setIsOpen={setIsOpen} /> */}
    </div>
  );
}

export default App;
