const router = require('express').Router();
const Joi = require('joi');
const bcrypt = require('bcryptjs');

const User = require('../models/User');

const schema = Joi.object().keys({
    username: Joi.string().min(6).max(30).required(),
	password: Joi.string().trim().min(8).max(30).regex(/[a-zA-Z0-9]{3,30}/).required(),
});

// Default GET
router.get('/', (req, res) => {
    res.json({
        message: "🔐"
    });
});

// POST request to register a new user
router.post('/register', (req, res, next) => {
    // Validate the POST request form
    const result = schema.validate(req.body);
    if (result.error == null) {
        // Find if user exists
        User.findOne({
            username: req.body.username
        }).exec(user => {
            // If there is a user on the database, you can't create new user
            if (user) {
                next(new Error("User already exist!"));
            } else {
                // Hash the password
                bcrypt.hash(req.body.password.trim(), 8).then(hash => {
                    // Create new user database instance
                    const newUser = new User({
                        username: req.body.username,
                        password: hash
                    });
                    newUser.save().then(savedUser => {
                        res.json({ savedUser });
                    });
                });
            }
        });
    } else {
        next(error);
    }
});

// POST request to login a user
router.post('/login', (req, res) => {

});

// GET request to authenticate a user action
router.get('/current', (req, res) => {

});

module.exports = router;
