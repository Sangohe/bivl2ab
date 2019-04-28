const express = require('express');
const router = express.Router();

// User model
const Project = require('../../models/Project');

// @route GET api/users
// @desc Get all users
// @access Private
router.get('/', (req, res) => {
    Project.find()
        .sort({ title: -1 })
        .then(projects => res.json(projects))
});

// @route GET api/users
// @desc Create user
// @access Private
router.post('/', (req, res) => {
    const newProject = new Project({
        title: req.body.title,
        type: req.body.type,
        research_subline: req.body.research_subline,
        photo: req.body.photo,
        summary: req.body.summary,
        productions: req.body.productions
    });
    newProject.save().then(project => res.json(project)).catch(err => console.log(err));
});

module.exports = router;