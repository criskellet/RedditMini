// App.js
import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {RedditHome} from './components/RedditHome/RedditHome';



/*
import {
  BrowserRouter as Router,
  NavLink
  
} from 'react-router-dom';
<RedditPosts />
*/

export default function App() {
  
  return (
    
      <div>
        <Header />
        <nav>
          <ul>
            <li>Settings</li>
            <li>New</li>
            <li>Hot</li>
          </ul>
    
        </nav>
        
        <RedditHome />

      </div>
    
    
    
  );
}


