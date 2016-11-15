const router = require('express').Router();
const Post = mongoose.model('Post');

//example usage of express router
//express router can be used to modularize your express code
//it's generally a best practice to separate different routes into separate files
//however we are not actually using this in this app; this is just a demo.
router.route('/')
  .get((req, res) => {
    Post.find({}, (err, data) => {
      res.send(data);
    })
  })
  .post((req, res) => {
    Post.create(req.body, (err, data) => {
      res.send(data);
    })
  })


module.exports = router;
