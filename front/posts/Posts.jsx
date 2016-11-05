import React from 'react';
import Post from '../post/Post.jsx';

const Posts = React.createClass({
  render: function() {
    return (
      <div style={postStyle}>
        <h1>Posts:</h1>
        {this.props.posts.map((post, indx) => <Post key={indx} post={post} />)}
      </div>
    );
  }
});

Posts.propTypes = {
  posts: React.PropTypes.array
}

const postStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}

export default Posts;
