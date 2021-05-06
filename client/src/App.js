import './App.css';
import React, { useState } from 'react';
import {BrowserRouter as Router } from 'react-router-dom';

import UserContext from './contexts/UserContext'
import AppRouter from './components/AppRouter';


function App() {
  const [ user, setUser ] = useState(false);

  return (
    <UserContext.Provider value={user}>
      <div className="app"> 
        <AppRouter />
      </div>
    </UserContext.Provider>
  );
}

export default App;
