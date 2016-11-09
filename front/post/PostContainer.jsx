import React from 'react';
import Post from './Post.jsx';
import {connect} from 'react-redux'

const PostContainer = (props) => (
  props.post && props.post._id === props.params.id ?
  <Post post={props.post} /> : <h1>Loading...</h1>
)

const mapStateToProps = (state, ownProps) =>  {
  return ownProps.post ? {post: ownProps.post} : {post: state.post};
}

export default connect(mapStateToProps)(PostContainer);
