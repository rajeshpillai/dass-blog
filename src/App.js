import React from 'react';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import './App.css';
import Nav from './components/nav';
import AboutUs from './pages/aboutus';
import ContactUs from './pages/contactus';

function App() {
  return (
    <Router>
      <div className="container">
        <Nav/>
       <Route path = "/aboutus" 
          component = {AboutUs} />
       <Route path = "/contactus" 
          component = {ContactUs} />
          
      </div>
    </Router>
  );
}

export default App;
