import React from 'react';
import logo from './logo.svg';
import './App.css';
import User from './User';
import foto from './foto.jpg';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <User name="Nome passado como parâmetro" photo={foto}></User>       
      </header>
    </div>
  );
}

export default App;
