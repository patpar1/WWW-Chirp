const passport = require('passport');
const router = require('express').Router();

const auth = require('../auth');
const User = require('../../models/User');

// POST request to register a new user
router.post('/', auth.optional, (req, res, next) => {

    const { body: { user } } = req;

    if (!user.username) {
        res.status(422);
        next(res);
    }

    if (!user.password) {
        res.status(422);
        next(res);
    }

    const newUser = new User(user);
    newUser.setPassword(user.password);

    return newUser.save()
        .then(() => res.json({
            user: newUser.toAuthJSON()
        }));
});

// POST request to login a user
router.post('/login', auth.optional, (req, res, next) => {

    const { body: { user } } = req;

    if (!user.username) {
        res.status(422);
        next(res);
    }

    if (!user.password) {
        res.status(422);
        next(res);
    }

    return passport.authenticate(
        'local',
        { session: false },
        (err, user, info) => {
            if (err) { return next(err); }

            if (user) {
                const currUser = user;
                currUser.token = user.generateJWT();
                return res.json({
                    user: currUser.toAuthJSON()
                });
            }

            return status(400).info;
        }
    )(req, res, next);
});

// GET request to authenticate a user action
router.get('/current', auth.required, (req, res, next) => {

    const { payload: { id } } = req;

    return User.findById(id)
        .then(user => {
            if (!user) {
                return res.sendStatus(400);
            }

            return res.json({
                user: currUser.toAuthJSON()
            });
        });
});

module.exports = router;
