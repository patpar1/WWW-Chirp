const express = require('express');
const { body } = require('express-validator');
const router = express.Router();

const auth = require('../auth');
const Post = require('../../models/Post');

/* GET posts listing. */
router.get('/', auth.optional, function(req, res, next) {
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
  auth.required,
  body('user').not().isEmpty(),
  body('content').not().isEmpty().trim().escape(),
  function(req, res, next) {
    new Post({
      userName: req.body.userName,
      content: req.body.content,
      likes: [],
      replies: [],
      replyingTo: null
    })
    .save((err, result) => {
      if (err) {
        return next(err);
      }
      res.send(result);
    })
  }
)

/* POST request for liking a post. */
router.post(
  '/like',
  auth.required,
  body('user').not().isEmpty(),
  body('content').not().isEmpty().trim().escape(),
  function(req, res, next) {
    Post.findByIdAndUpdate(req.body.parentId,
      { $push: { "likes": req.body.userName }},
      { new : true },
      (err, model) => {
        if (err) { next(err); };
        if (!model) { 
          res.status(422).json({errors: { parent_model: 'not found!' }});
        } else {
          res.send(model);
        };
    });
  }
)

/* POST request for replying to a current post. */
router.post(
  '/reply',
  auth.required,
  body('user').not().isEmpty(),
  body('content').not().isEmpty().trim().escape(),
  function(req, res, next) {
    const reply = new Post({
      userName: req.body.userName,
      content: req.body.content,
      likes: [],
      replies: [],
      replyingTo: req.body.parentId
    });

    Post.findByIdAndUpdate(req.body.parentId,
      { $push: { "replies": req.body.parentId }},
      { new : true },
      (err, model) => {
        if (err) { next(err); };
        if (!model) {
          return res.status(422).json({ errors: { parent_model: 'not found!' }})
        };
    }).then(() => {
      if (res.statusCode === 200) {
        reply.save((err, result) => {
          if (err) { return next(err); }
          res.send(result);
        })
      }
    });
  }
)

module.exports = router;
