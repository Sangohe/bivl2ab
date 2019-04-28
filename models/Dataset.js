const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DatasetSchema = new Schema({
    name: { type: 'String' },
    description: { type: 'String' },
    photo: { type: 'String' },
    url: { type: 'String' },
}, { timestamps: true });

module.exports = Dataset = mongoose.model('dataset', DatasetSchema);