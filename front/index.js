//reducers
import post from './post/post-reducer';
import posts from './posts/posts-reducer';
import {combineReducers} from 'redux';
const reducer = combineReducers({
  posts,
  post
});


//export an object that contains reducers, actions, and models
export {
  reducer
}
