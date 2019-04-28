const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NewSchema = new Schema({
    title: { type: 'String', required: true },
    photo: { type: 'String', required: true },
    description: { type: 'String', required: true },
}, { timestamps: true });

module.exports = New = mongoose.model('new', NewSchema);