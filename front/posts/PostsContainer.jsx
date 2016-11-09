import React from 'react';
import Posts from './Posts.jsx';
import {connect} from 'react-redux'

const PostsContainer = (props) => (
  props.posts ?
  <Posts posts={props.posts} /> : <h1>Loading...</h1>
)

const mapStateToProps = (state, ownProps) =>  {
  return {posts: state.posts};
}

export default connect(mapStateToProps)(PostsContainer)
