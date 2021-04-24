// App.js
import React from 'react';
import './App.css';
import {RedditPosts} from './features/RedditPreviews/RedditPreviews.js';
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


