const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    name: { type: 'String' },
    description: { type: 'String' },
    url: { type: 'String' },
}, { timestamps: true });

module.exports = Course = mongoose.model('course', CourseSchema);