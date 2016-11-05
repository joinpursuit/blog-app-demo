import React from 'react';
import store from '../store/store.js';
import Posts from '../posts/Posts.jsx';
import {connect} from 'react-redux';

const HomePage = (props) => (
  <div>
    <Posts posts={props.posts}/>
  </div>
)

const mapStateToProps = (state, ownProps) => ({
  posts: state.posts
})

export default connect(mapStateToProps)(HomePage);
