#!/usr/bin/node
/* create a simple server with expressjs */

const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(1245, '127.0.0.1');

module.exports = app;
