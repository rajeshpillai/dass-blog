import React from 'react';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import './App.css';
import Nav from './components/nav';

function App() {
  return (
    <Router>
      <div className="container">
        <Nav/>
      </div>
    </Router>
  );
}

export default App;
