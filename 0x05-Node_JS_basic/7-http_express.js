#!/usr/bin/node
/*
 * create a small HTTP server using express
 *
 * It should be assigned to the variable app and this one must be exported
 * HTTP server should listen on port 1245
 * It should return plain text
 * When the URL path is /, it should display Hello Holberton School! in the page body
 *
 * When the URL path is /students, it should display
 * This is the list of our students followed by the same content as the file 3-read_file_async.js
 *
 * (with and without the database) - the name of the database must be
 * passed as argument of the file
 */
const fs = require('fs');
const express = require('express');

const app = express();

/* reading a file synchronously */
async function countStudents(path) {
  let data;
  try {
    data = await fs.promises.readFile(path, 'utf-8');
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  const allData = data.split('\n');

  /* get valid data from csv file */
  const validStudents = [];
  for (const validStudent of allData) {
    if (validStudent && validStudent.slice(0, 5) !== 'first') validStudents.push(validStudent);
  }

  /* map each student to their field */
  const studentData = new Map();

  for (const student of validStudents) {
    const field = student.split(',')[3];
    const firstName = student.split(',')[0];
    // console.log(firstName)
    if (!studentData.get(field)) {
      studentData.set(field, []);
      studentData.get(field).push(firstName);
    } else studentData.get(field).push(firstName);
  }
  const msg = [];
  const noOfStudents = validStudents.length;
  msg.push(`Number of students: ${noOfStudents}`);

  for (const [key, value] of studentData) {
    msg.push(`Number of students in ${key}: ${value.length}. List: ${value.join(', ')}`);
  }
  return msg;
}

/* HTTP SERVER */

const database = process.argv[2];
const port = 1245;
const host = '127.0.0.1';

app.get('/', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.statusCode = 200;
  res.write('This is the list of our students\n');
  try {
    // res.write('This is the list of our students\n');
    const msg = await countStudents(database);

    res.end(msg.join('\n'));
  } catch (err) {
    res.end(err.message);
  }
});

app.listen(port, host);
module.exports = app;
