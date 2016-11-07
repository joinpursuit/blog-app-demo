import React from 'react';
import {Link} from 'react-router';
import YouTube from '../youtube/YouTube.jsx';
import {deletePostAsync, getSinglePostAsync} from './post-actions';
import store from '../store/store.js';
import {connect} from 'react-redux';

const Post = (props) => {
  // if(!props.post || props.params && props.post._id !== props.params.id) store.dispatch(getSinglePostAsync(props.params.id));
  return props.post ? (
   <div>
     <Link to={`/post/${props.post._id}`}><h2>{props.post.title}</h2></Link>
     <YouTube videoId={props.post.video}/>
     <p>{props.post.text}</p>
     <button onClick={store.dispatch.bind(this, deletePostAsync(props.post._id))}>Delete this post</button>
   </div>
 )
 : null
}

Post.propTypes = {
  post: React.PropTypes.object
}


const mapStateToProps = (state, ownProps) =>  {
  return ownProps.post ? {post: ownProps.post} : {post: state.post};
}

export default connect(mapStateToProps)(Post);
