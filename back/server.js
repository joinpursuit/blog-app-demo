
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const postModel = require('./posts/posts-model');
const commentModel = require('./comments/comments-model');
const Post = mongoose.model('Post');
const Comment = mongoose.model('Comment');
const path = require('path');
const rootPath = path.join(__dirname, '..');
const bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/blog-app');

const db = mongoose.connection;

app.use(bodyParser.urlencoded({ extended: true }));

//Serving up bundle.js file
app.use(express.static(`${rootPath}/front/bundle`));


//API
//Get all blog posts
app.get('/posts', (req, res) => {
  Post.find({}, (err, data) => {
    res.send(data);
  })
});

app.delete('/posts/:id', (req, res) => {
  Post.remove({_id: req.params.id});
});

//Make a new post
app.post('/my-posts', (req, res) => {
  Post.create(req.body, () => {
    console.log('Created new post!');
  });
});

app.get('/my-posts', (req, res) => {
  console.log('GET request: ready to make a new post');
});


app.get('/comments', (req, res) => {
  console.log('Getting comments!');
  Comment.find({}, () => {
    res.send('data coming soon')
  });
});

app.post('/comments', (req, res) => {
  const newComment = req.body;
  console.log('New comment', newComment);
  Comment.create(newComment);

});

//Get an individual post
app.get('/posts/:id', (req, res) => {
  Post.findById(req.params.id, (err, data) => {
    res.send(data);
  })
});

//Server call
app.get('/*', (req, res) => {
  res.sendFile(`${rootPath}/front/index.html`);
});



db.on('open', () => {
  console.log('db connection opened!');
  app.listen(5555, () => {
    console.log('Listening on port 5555');
  });
})

db.on('error', () => {
  console.log('error in db connection!');
})
