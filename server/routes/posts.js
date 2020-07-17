const express = require('express');
const router = express.Router();

const Post = require('../models/Post');

/* GET posts listing. */
router.get('/', function(req, res, next) {

});

/* POST request for creating a new post. */
router.post('/create', function(req, res, next) {

});

/* POST request for liking a post. */
router.post('/like', function(req, res, next) {

});

/* POST request for replying to a current post. */
router.post('/reply', function(req, res, next) {

});

module.exports = router;
