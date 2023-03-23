#!/usr/bin/node
/* reading a file synchronously */

const fs = require('fs');

function countStudents(path) {
  let data;
  try {
    data = fs.readFileSync(path, 'utf-8');
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

  const noOfStudents = validStudents.length;
  console.log(`Number of students: ${noOfStudents}`);
  for (const [key, value] of studentData) {
    console.log(`Number of students in ${key}: ${value.length}. List: ${value.join(', ')}`);
  }
}

module.exports = countStudents;
