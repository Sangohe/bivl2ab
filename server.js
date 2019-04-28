const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// models
const users = require('./routes/api/users');

const app = express();

// body-parser middleware
app.use(bodyParser.json());

// DB config
const db = require('./config/keys').mongoURI;

// connect
mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

mongoose.set('useCreateIndex', true);

// Use routes
app.use('/api/users', users);

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server started on port ${port}`));