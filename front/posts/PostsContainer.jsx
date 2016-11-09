import React from 'react';
import Posts from './Posts.jsx';
import {connect} from 'react-redux';
import {getPostsAsync} from './posts-actions';
import store from '../store/store';

const PostsContainer = (props) => (
  props.posts ?
  <Posts posts={props.posts} /> : <h1>Loading...</h1>
)

//////////
//Another example of how you can do the same thing, using React.createClass:
//////////
// const PostsContainer = React.createClass({
//   componentDidMount() {
//     store.dispatch(getPostsAsync())
//   },
//   renderPosts() {
//     return <Posts posts={this.props.posts} />
//   },
//   renderLoading(){
//     return  <h1>Loading...</h1>
//   },
//   render: function() {
//     return (
//       this.props.posts ?
//       this.renderPosts() : this.renderLoading()
//     );
//   }
// });


const mapStateToProps = (state, ownProps) =>  {
  return {posts: state.posts};
}


export default connect(mapStateToProps)(PostsContainer)
