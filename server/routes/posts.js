const express = require('express');
const router = express.Router();

const Post = require('../models/Post');

/* GET posts listing. */
router.get('/', function(req, res, next) {
    Post.find().exec((err, posts) => {
        if (err) { return next(err); }
        res.send(posts);
    });
});

/* POST request for creating a new post. */
router.post('/create', function(req, res, next) {
    if (!req.body.userName || !req.body.content) {
        res.status(400).json({ error: 'invalid request: no data in POST body'});
        return;
    }
    new Post({
        userName: req.body.userName,
        content: req.body.content,
        likes: [],
        replies: [],
        replyingTo: null
      }).save((err, result) => {
          if (err) { next(err); }
          res.send(result);
    });
});

/* POST request for liking a post. */
router.post('/like', function(req, res, next) {

});

/* POST request for replying to a current post. */
router.post('/reply', function(req, res, next) {

});

module.exports = router;
