import _ from 'lodash';

const reducer = (state = {posts: [], post: null}, action) => {
  switch (action.type) {
    case 'GET_POSTS':
      return Object.assign({}, state, {posts: action.payload});
    case 'DELETE_POST':
      return Object.assign({}, state, {posts: _.remove(state.posts, (post) => post._id !== action.payload)});
    case 'GET_SINGLE_POST':
      return Object.assign({}, state, {post: action.payload});
    default:
      return state
  }
}

export default reducer;
