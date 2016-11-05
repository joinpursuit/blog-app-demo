import $ from 'jquery';

export const getPosts = posts => ({
  type: 'GET_POSTS',
  payload: posts
})

export const getPostsAsync = () => dispatch => {
  return $.ajax({
      url: '/posts',
      type: 'GET'
    })
    .done((data) => {
      console.log('data?', data)
      dispatch(getPosts(data))
    })
}
