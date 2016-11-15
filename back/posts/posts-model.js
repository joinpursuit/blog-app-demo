/////////////////////////
// database model for blog posts
/////////////////////////

const mongoose = require('mongoose');
const blogSchema = mongoose.Schema({
  title: {type: String, required: true},
  text: {type: String, required: true},
  video: String,
  author: String
});

//first argument is name of model, second argument is schema (aka blueprint)
const Post = mongoose.model('Post', blogSchema);
