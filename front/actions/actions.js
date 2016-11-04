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

export const createPost = newPost => ({
  type: 'CREATE_POST',
  payload: newPost
})

export const createPostAsync = (newPost) => dispatch => {
  $.ajax({
    url: '/my-posts',
    type: 'POST',
    data: newPost
  })
  .done(data => {
    dispatch(createPost(data));
  })
}
