import React from 'react';
import $ from 'jquery';
import Post from '../post/Post.jsx'
import {getSinglePostAsync} from '../actions/actions.js';
import store from '../store/store.js';

const PostPage = React.createClass({
  componentDidMount() {
    store.dispatch(getSinglePostAsync(this.props.params.id))
  },
  render: function() {
    return store.getState().post ? (
      <div style={postsStyle}>
        <h1>Post:</h1>
        <Post post={store.getState().post} />
      </div>
    ) : null;
  }
});

const postsStyle = {
    backgroundColor: 'azure',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100%'
}

export default PostPage;
