//BLOG POSTS:
//Title of blog posts
//Date posted
//Blog post text
//Categories/tags
//Images for post
//Comments on posts
//Author of blog posts
//archive: Boolean
const mongoose = require('mongoose');
const blogSchema = mongoose.Schema({
  title: {type: String, required: true},
  text: {type: String, required: true},
  author: String
});

//First argument is name of model, second argument is schema
const Post = mongoose.model('Post', blogSchema);
