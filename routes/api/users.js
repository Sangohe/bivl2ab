const express = require('express');
const router = express.Router();

// User model
const User = require('../../models/User');

// @route GET api/users
// @desc Get all users
// @access Private
router.get('/', (req, res) => {
    User.find()
        .sort({ name: -1 })
        .then(users => res.json(users))
});

// @route GET api/users
// @desc Create user
// @access Private
router.post('/', (req, res) => {
    const newUser = new User({
        name: req.body.name,
        last_name: req.body.last_name,
        birthdate: req.body.birthdate,
        email: req.body.email,
        password: req.body.password,
        education: req.body.education,
    });

    newUser.save().then(user => res.json(user)).catch(err => console.log(err));
});

module.exports = router;