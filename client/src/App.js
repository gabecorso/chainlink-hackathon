import './App.css';
import React, { useState } from 'react';
import {BrowserRouter as Router } from 'react-router-dom';

import AppRouter from './components/AppRouter';


function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="app"> 
      <AppRouter />
    </div>
  );
}

export default App;
