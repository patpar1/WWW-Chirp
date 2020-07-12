const express = require('express');
const { body } = require('express-validator');
const router = express.Router();

const Post = require('../../models/Post');

/* GET posts listing. */
router.get('/', function(req, res, next) {
  // Get all post listings from MongoDB

  Post
    .find({})
    .exec((err, post_array) => {
      if (err) {
        return next(err);
      }
      res.send(post_array);
  });
});

/* POST request for creating a new post. */
router.post(
  '/create',
  body('user')
    .not().isEmpty(),
  body('content')
    .not().isEmpty()
    .trim()
    .escape(),
  function(req, res, next) {
    new Post({
      user: req.body.user,
      content: req.body.content
    })
    .save((err) => {
      if (err) {
        return next(err);
      }
      res.redirect('/posts');
    })
  }
)

module.exports = router;
