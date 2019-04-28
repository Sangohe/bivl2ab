const express = require('express');
const router = express.Router();

// Project model
const Project = require('../../models/Project');

// @route GET api/projects
// @desc Get all projects
// @access Private
router.get('/', (req, res) => {
    Project.find()
        .sort({ title: -1 })
        .then(projects => res.json(projects))
});

// @route GET api/projects
// @desc Create project
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

// @route DELETE api/projects/:id
// @desc Delete project
// @access Private
router.post('/:id', (req, res) => {
    Project.findById(req.params.id)
        .then(project => project.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: true }))
});

module.exports = router;