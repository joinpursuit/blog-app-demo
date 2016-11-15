import $ from 'jquery';

export const createPost = newPost => ({
  type: 'CREATE_POST',
  payload: newPost
})

export const createPostAsync = (newPost) => dispatch => {
  $.ajax({
    url: '/posts',
    type: 'POST',
    data: newPost
  })
  .done(data => {
    dispatch(createPost(data));
  })
}
