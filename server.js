const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// models
const users = require('./routes/api/users');
const research_lines = require('./routes/api/research_lines');
const research_sublines = require('./routes/api/research_sublines');
const projects = require('./routes/api/projects');
const news = require('./routes/api/news');
const datasets = require('./routes/api/datasets');
const courses = require('./routes/api/courses');
const products = require('./routes/api/products');

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
app.use('/api/research_lines', research_lines);
app.use('/api/research_sublines', research_sublines);
app.use('/api/projects', projects);
app.use('/api/news', news);
app.use('/api/datasets', datasets);
app.use('/api/courses', courses);
app.use('/api/products', products);

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server started on port ${port}`));