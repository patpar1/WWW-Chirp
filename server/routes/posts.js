const express = require('express');
const router = express.Router();

const Post = require('../models/Post');

/* GET posts listing. */
router.get('/', function(req, res, next) {
    // Find all post listings from the database
    Post.find().exec((err, posts) => {
        // If error, send it to the error handler
        if (err) { return next(err); }

        // Otherwise respond with posts array
        res.send(posts);
    });
});

/* POST request for creating a new post. */
router.post('/create', function(req, res, next) {
    // If the request does not have name or content, do not store it
    // into the database
    if (!req.body.name || !req.body.content) {
        res.status(400).json({ error: 'invalid request: no data in POST body'});
        return;
    }

    // Create new post instance and store it into the database
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
