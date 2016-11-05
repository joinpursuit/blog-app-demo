import React from 'react';
import Post from '../post/Post.jsx';

const Posts = (props) => (
  <div style={postStyle}>
    <h1>Posts:</h1>
    {props.posts.map((post, indx) => <Post key={indx} post={post} />)}
  </div>
)

Posts.propTypes = {
  posts: React.PropTypes.array
}

const postStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}

export default Posts;
