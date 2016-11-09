import React from 'react';
import Posts from './Posts.jsx';
import {connect} from 'react-redux'

const PostsContainer = React.createClass({
  renderPosts() {
    return <Posts posts={this.props.posts} />
  },
  renderLoading() {
    return <h1>Loading...</h1>
  },
  render() {
     return this.props.posts ? this.renderPosts() : this.renderLoading()
  }
})

const mapStateToProps = (state, ownProps) =>  {
  return {posts: state.posts};
}

// const mapDispatchToprops = (dispatch) => ({
//   getPostsAsync: dispatch(getPostsAsync())
// })

export default connect(mapStateToProps)(PostsContainer)
