import $ from 'jquery';

export const getPosts = posts => ({
  type: 'GET_POSTS',
  payload: posts
})

export const getPostsAsync = () => (dispatch) => {
  $.ajax({
      url: '/posts',
      type: 'GET'
    })
    .done((data) => {
      dispatch(getPosts(data))
    })
}
