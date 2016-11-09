import React from 'react';
import store from '../store/store.js';
import YouTube from '../youtube/YouTube.jsx';
import {Link} from 'react-router';
import {deletePostAsync} from './post-actions';

const Post = (props) => (
   <div>
     <Link to={`/post/${props.post._id}`}><h2>{props.post.title}</h2></Link>
     <YouTube videoId={props.post.video}/>
     <p>{props.post.text}</p>
     <button onClick={store.dispatch.bind(this, deletePostAsync(props.post._id))}>Delete this post</button>
   </div>
)

Post.propTypes = {
  post: React.PropTypes.object
}


export default Post;
