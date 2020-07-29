const router = require('express').Router();

const postsRouter = require('./posts');

// Route for getting and posting post objects.
router.use('/posts', postsRouter);

// Default GET
router.get('/', (req, res) => {
    res.json({
        message: "✉"
    });
});

module.exports = router;