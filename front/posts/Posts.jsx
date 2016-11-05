import React from 'react';
import Post from '../post/Post.jsx';
import {connect} from 'react-redux'

const Posts = (props) => (
  props.posts ?
  <div style={postStyle}>
    <h1>Posts:</h1>
    {props.posts.map((post, indx) => <Post key={indx} post={post} />)}
  </div>
  : null
)

Posts.propTypes = {
  posts: React.PropTypes.array
}

const postStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}

const mapStateToProps = (state, ownProps) =>  {
  return {posts: state.posts};
}

export default connect(mapStateToProps)(Posts);
