import React from 'react';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import './App.css';
import Nav from './components/nav';
import AboutUs from './pages/aboutus';
import ContactUs from './pages/contactus';
import Posts from './features/posts';

const DEFAULT_STATE = {
  posts: [
    {id: 1, title: "Post 1", body: "Post 1 goes here", published: true},
    {id: 2, title: "Post 2", body: "Post 2 goes here", published: true},
    {id: 3, title: "Post 2", body: "Post 3 goes here", published: true},
  ]
}

function loadPost() {
  return (
    <Posts posts= {DEFAULT_STATE.posts} />
  )
}
function App() {
  return (
    <Router>
      <div className="container">
        <Nav/>
        <Route exact path="/" render={loadPost} />
        <Route  path = "/posts" 
          render = {loadPost} />
        <Route path = "/aboutus" 
          component = {AboutUs} />
        <Route path = "/contactus" 
          component = {ContactUs} />
          
      </div>
    </Router>
  );
}

export default App;
