const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
    name: { type: 'String', lowercase: true, required: [true, "can't be blank"], match: [/^[a-z ,.'-]+$/i, 'is invalid'] },
    last_name: { type: 'String', lowercase: true, required: [true, "can't be blank"], match: [/^[a-z ,.'-]+$/i, 'is invalid'] },
    birthdate: { type: Date, required: true },
    email: { type: String, lowercase: true, unique: [true, "email already exists"], required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true },
    password: { type: 'String', required: true },
    role: { type: Number, default: 1 },
    education: { type: 'String', required: true },
    photo: { type: 'String' },
    biography: { type: 'String' },
    projects: { type: [{ type: Schema.Types.ObjectId, ref: 'Project' }] },
}, { timestamps: true });

module.exports = User = mongoose.model('user', UserSchema);