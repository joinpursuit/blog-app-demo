import {getPostsAsync} from './posts/posts-actions.js';
import {getSinglePostAsync} from './post/post-actions.js';
import store from './store/store.js';


export const getPost = (nextState) => {store.dispatch(getSinglePostAsync(nextState.params.id))};
export const getAllPosts = () => {store.dispatch(getPostsAsync())};
