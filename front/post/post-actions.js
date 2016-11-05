import $ from 'jquery';

export const getSinglePost = (post) => ({
  type: 'GET_SINGLE_POST',
  payload: post
})

export const getSinglePostAsync = (post_id) => dispatch => {
  $.ajax({
    url: `/posts/${post_id}`,
    type: 'GET'
  })
  .done((data) => {
    console.log('AJAX single post data', data);
    dispatch(getSinglePost(data));
  })
}

export const deletePost = post_id => ({
  type: 'DELETE_POST',
  payload: post_id
})

export const deletePostAsync = (post_id) => dispatch => {
  $.ajax({
    url: `/posts/${post_id}`,
    type: 'DElETE'
  })
  dispatch(deletePost(post_id));
}
