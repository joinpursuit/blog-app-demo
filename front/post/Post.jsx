import React from 'react';
import {Link} from 'react-router';
import YouTube from '../youtube/YouTube.jsx';
import $ from 'jquery';
import {deletePostAsync, getSinglePostAsync} from '../actions/actions.js';
import store from '../store/store.js';
import {connect} from 'react-redux';

const Post = React.createClass({
  deletePost() {
    store.dispatch(deletePostAsync(this.props.post._id))
  },
  componentDidMount() {
   if(!this.props.post) store.dispatch(getSinglePostAsync(this.props.params.id))
  },
  render: function() {
    return this.props.post ? (
      <div>
        <Link to={`/post/${this.props.post._id}`}><h2>{this.props.post.title}</h2></Link>
        <YouTube videoId={this.props.post.video}/>
        <p>{this.props.post.text}</p>
        <button onClick={this.deletePost}>Delete this post</button>
      </div>
    )
    : null
  }
});

Post.propTypes = {
  post: React.PropTypes.object
}


const mapStateToProps = (state, ownProps) =>  {
  return ownProps.post ? {post: ownProps.post} : {post: state.post};
}

export default connect(mapStateToProps)(Post);
