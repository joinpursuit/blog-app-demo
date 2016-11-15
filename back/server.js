/////////////////////////
// Server & API:
// - initialize database and server connection
// - API for getting data from database to frontend and vice versa
/////////////////////////

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const postModel = require('./posts/posts-model');
const Post = mongoose.model('Post');
const path = require('path');
const rootPath = path.join(__dirname, '..');
const bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/blog-app');

const db = mongoose.connection;

//body parser middleware creates 'req.body' by attacheching body property to request object
app.use(bodyParser.urlencoded({ extended: true }));

//serving up bundle.js file so it is accessible by index.html on the frontend
app.use(express.static(`${rootPath}/front/bundle`));

//////////
// start of the API
//////////

//get all blog posts
app.get('/posts', (req, res) => {
  Post.find({}, (err, data) => {
    if(err) console.log(err);
    else res.send(data);
  })
});


//Make a new post
app.post('/posts', (req, res) => {
  Post.create(req.body, (err, data) => {
    if(err) console.log(err);
    else res.send(data);
  });
});

//get an individual post by passing id as a url parameter
//the 'id' string is accessible as 'req.params.id'
app.get('/posts/:id', (req, res) => {
  Post.findById(req.params.id, (err, data) => {
    if(err) console.log(err);
    else res.json(data);
  })
});

//example 'put' request for updating a post given an id
app.put('/posts/:id', (req, res) => {
  Post.findOneAndUpdate({_id: req.params.id}, (err, data) => {
    if (err) console.log(err);
    else console.log(data);
  })
});

//delete a post, given an id
app.delete('/posts/:id', (req, res) => {
  Post.remove({_id: req.params.id}, (err, data) => {
    if (err) console.error('Mongoose delete error', err);
    else console.log('Delete successful');
  });
});

//send back 'index.html' file for all other requests
//react-router then takes over once index.html is loaded by the browser
app.get('/*', (req, res) => {
  res.sendFile(`${rootPath}/front/index.html`);
});

//make sure database connection is open before starting server
db.on('open', () => {
  console.log('db connection opened!');
  app.listen(5555, () => {
    console.log('Listening on port 5555');
  });
})

db.on('error', () => {
  console.log('error in db connection!');
})
