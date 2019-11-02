const express = require('express');
const app = express();

app.use('/users', require('./users'));
app.use('/posts', require('./posts'));
app.use('/comments', require('./comments'));
app.use('/albums', require('./albums'));
app.use('/photos', require('./photos'));

module.exports = app;