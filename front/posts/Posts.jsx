import React from 'react';
import Post from '../post/Post.jsx';

const Posts = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Posts:</h1>
        {this.props.posts.map((post, indx) => <Post key={indx} post={post} />)}
      </div>
    );
  }

});

Posts.propTypes = {
  posts: React.PropTypes.array
}


export default Posts;
