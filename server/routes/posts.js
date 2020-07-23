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
    if (!req.body.name || !req.body.content) {
        res.status(400).json({ error: 'invalid request: no data in POST body'});
        return;
    }
    new Post({
        name: req.body.name,
        content: req.body.content,
        likes: [],
        replies: [],
        parent: req.body.parent
      }).save((err, result) => {
          if (err) { next(err); }
          res.send(result);
    });
});

module.exports = router;
