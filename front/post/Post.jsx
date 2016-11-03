import React from 'react';
import {Link} from 'react-router';

const Post = React.createClass({
  render: function() {
    return (
      <div>
        <Link to={`/post/${this.props.post._id}`}><h2>{this.props.post.title}</h2></Link>
        <p>{this.props.post.text}</p>
      </div>
    );
  }
});

Post.propTypes = {
  post: React.PropTypes.object
}


export default Post;
