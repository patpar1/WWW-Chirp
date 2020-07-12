const express = require('express');
const router = express.Router();

const postsRouter = require('./posts');
const userRouter = require('./users');

router.use('/posts', postsRouter);
router.use('/users', userRouter);

module.exports = router;