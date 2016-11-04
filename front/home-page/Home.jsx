import React from 'react';
import store from '../store/store.js';
import Posts from '../posts/Posts.jsx';

const HomePage = (props) => (
  <div>
    <Posts posts={store.getState().posts}/>
  </div>
)

export default HomePage;
