import React from 'react';
import $ from 'jquery';

const Comment = React.createClass({
  sendPostRequest() {
    $.ajax({
      url: '/comments',
      type: 'POST',
      data: {
        username: 'Test username',
        text: 'Test comment test'
      }
    })
    .done((data) => {
      console.log('Comment created!', data);
    })
  },
  render: function() {
    return (
      <button onClick={this.sendPostRequest}>Send a comment</button>
    )
  }
})

export default Comment;
