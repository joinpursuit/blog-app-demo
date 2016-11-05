import _ from 'lodash';

const posts = (state = [], action) => {
  switch (action.type) {
    case 'GET_POSTS':
      return action.payload;
    case 'DELETE_POST':
      return _.remove(state, (post) => post._id !== action.payload);
    case 'CREATE_POST':
      return [...state, action.payload];
    default:
      return state
  }
}

export default posts;
