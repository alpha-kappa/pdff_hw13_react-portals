import React from 'react';
import logo from './logo.svg';
import './App.css';
import AlertsForm from './components/AlertsForm';
import AlertsPanel from './components/Alert';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <AlertsForm />
        <AlertsPanel />
      </header>
    </div>
  );
}

export default App;
