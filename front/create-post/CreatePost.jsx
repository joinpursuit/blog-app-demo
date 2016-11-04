import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router';
import {createPostAsync} from '../actions/actions.js';
import store from '../store/store.js';

const CreatePost = React.createClass({
  getInitialState() {
    return {
      title: '',
      text: '',
      video: ''
    }
  },
  handleChange(inputField, e) {
    this.setState({[inputField]: e.target.value})
  },
  submitNewPost() {
    store.dispatch(createPostAsync(this.state));
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
        <input onChange={this.handleChange.bind(this, 'text')} type="body" name="body" />
        <br/>
        <br/>
        <label>YouTube Video ID: </label>
        <input onChange={this.handleChange.bind(this, 'video')} type="body" name="body" />
        <br/>
        <br/>
        <Link to="/"><input onClick={this.submitNewPost} type="button" value="Submit" /></Link>
      </form>
    )
  }
})

export default CreatePost;
