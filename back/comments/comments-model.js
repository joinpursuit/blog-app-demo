const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
  username: {type: String, required: true},
  text: {type: String, required: true},
  likeOrDislike: String,
  date: Date
});

mongoose.model('Comment', commentSchema);
