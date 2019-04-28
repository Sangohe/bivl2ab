const express = require('express');
const router = express.Router();

// Course model
const Course = require('../../models/Course');

// @route GET api/courses
// @desc Get all courses
// @access Private
router.get('/', (req, res) => {
    Course.find()
        .sort({ name: -1 })
        .then(courses => res.json(courses))
});

// @route GET api/courses
// @desc Create course
// @access Private
router.post('/', (req, res) => {
    const newCourse = new Course({
        name: req.body.name,
        description: req.body.description,
    });
    newCourse.save().then(course => res.json(course)).catch(err => console.log(err));
});

// @route DELETE api/courses/:id
// @desc Delete course
// @access Private
router.post('/:id', (req, res) => {
    Course.findById(req.params.id)
        .then(course => course.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: true }))
});

module.exports = router;