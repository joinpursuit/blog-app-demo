import React from 'react';
import Post from './Post.jsx';
import {connect} from 'react-redux'

const PostContainer = React.createClass({
  renderPost() {
    return <Post post={this.props.post} />
  },
  renderLoading() {
    return <h1>Loading...</h1>
  },
  render() {
    //Check to see if a post has been passed down through props && if the post currently saved in state is the same post we're tryign to load
     return this.props.post && this.props.post._id === this.props.params.id ?
     this.renderPost() : this.renderLoading()
  }
})

const mapStateToProps = (state, ownProps) =>  {
  return ownProps.post ? {post: ownProps.post} : {post: state.post};
}

export default connect(mapStateToProps)(PostContainer);
