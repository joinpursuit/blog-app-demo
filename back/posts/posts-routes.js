const router = require('express').Router();
const Post = mongoose.model('Post');

//Configure router for get and post calls
router.route('/')
  .get((req, res) => {
    Post.find({}, (err, data) => {
      res.send(data);
    })
  })

module.exports = router;
