//reducers
import post from './post/post-reducer';
import posts from './posts/posts-reducer';
import {combineReducers} from 'redux';
const reducer = combineReducers({
  posts,
  post
});

export {
  reducer
}
