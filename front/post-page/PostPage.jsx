import React from 'react';
import $ from 'jquery';
import Post from '../post/Post.jsx'
import {getSinglePostAsync} from '../actions/actions.js';
import store from '../store/store.js';
import {connect} from 'react-redux';

const PostPage = React.createClass({
  componentDidMount() {
    store.dispatch(getSinglePostAsync(this.props.params.id))
  },
  render: function() {
    return this.props.post ? (
      <div style={postsStyle}>
        <h1>Post:</h1>
        <Post post={this.props.post} />
      </div>
    ) : null;
  }
});

const postsStyle = {
    backgroundColor: 'azure'
}

const mapStateToProps = (state, ownProps) =>  {
  return {post: state.post};
}

export default connect(mapStateToProps)(PostPage);
