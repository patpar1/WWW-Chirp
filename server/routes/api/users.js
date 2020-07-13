const passport = require('passport');
const router = require('express').Router();

const auth = require('../auth');
const User = require('../../models/User');

// POST request to register a new user
router.post('/', auth.optional, (req, res) => {

    if(!req.body.user.userName) {
        return res.status(422).json({
            errors: { email: 'is required' }
        });
    }

    if(!req.body.user.password) {
        return res.status(422).json({
            errors: { password: 'is required' }
        });
    }

    const newUser = new User(req.body.user);
    newUser.setPassword(req.body.user.password);

    return newUser.save()
        .then(() => res.json({
            user: newUser.toAuthJSON()
        }));
});

// POST request to login a user
router.post('/login', auth.optional, (req, res, next) => {

    if(!req.body.user.userName) {
        return res.status(422).json({
            errors: { email: 'is required' }
        });
    }

    if(!req.body.user.password) {
        return res.status(422).json({
            errors: { password: 'is required' }
        });
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
router.get('/current', auth.required, (req, res) => {
    return User.findById(req.payload.id)
        .then((user) => {
            if(!user) {
                return res.sendStatus(400);
            }

            return res.json({ user: user.toAuthJSON() });
        });
});

module.exports = router;
