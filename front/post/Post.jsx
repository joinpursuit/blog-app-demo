import React from 'react';
import {Link} from 'react-router';
import YouTube from '../youtube/YouTube.jsx';
import $ from 'jquery';
import {deletePostAsync} from '../actions/actions.js';
import store from '../store/store.js';

const Post = React.createClass({
  deletePost() {
    store.dispatch(deletePostAsync(this.props.post._id))
  },
  render: function() {
    return (
      <div>
        <Link to={`/post/${this.props.post._id}`}><h2>{this.props.post.title}</h2></Link>
        <YouTube videoId={this.props.post.video}/>
        <p>{this.props.post.text}</p>
        <button onClick={this.deletePost}>Delete this post</button>
      </div>
    );
  }
});

Post.propTypes = {
  post: React.PropTypes.object
}


export default Post;
