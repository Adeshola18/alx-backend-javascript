#!/usr/bin/node
/* create a small HTTP server using the http module */

const http = require('http');

const app = http.createServer((req, res) => {
  res.end('Hello Holberton School!');
});

app.listen(1245, '127.0.0.1');

module.exports = app;
