import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router';

const CreatePost = React.createClass({
  getInitialState() {
    return {
      title: '',
      body: ''
    }
  },
  handleChange(inputField, e) {
    console.log(e);
    this.setState({[inputField]: e.target.value})
    console.log(this.state);
  },
  submitNewPost() {
    $.ajax({
      url: '/posts',
      type: 'POST',
      data: {
        title: 'This is a test post that is being sent from AJAX',
        text: 'Test post from AJAX'
      }
    })
    .done((data) => {
      console.log('AJAX data');
      console.log('AJAX state', this.state);
    })
  },
  render(){
    return (
      <form>
        <h1>Submit a post:</h1>
        <label>Title: </label>
        <input onChange={this.handleChange.bind(this, 'title')} type="text" name="title" />
        <br/>
        <br/>
        <label>Body: </label>
        <input onChange={this.handleChange.bind(this, 'body')} type="body" name="body" />
        <br/>
        <br/>
        <Link to="/"><input onClick={this.submitNewPost} type="button" value="Submit" /></Link>
      </form>
    )
  }
})

export default CreatePost;
