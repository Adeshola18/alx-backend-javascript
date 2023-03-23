#!/usr/bin/node
const fs = require('fs');

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(Error(err));
      }
      /* Get valid data from the csv file */
      const allData = data.split('\n');
      const validStudents = [];
      for (const validStudent of allData) {
        if (validStudent && validStudent.slice(0, 5) !== 'first') validStudents.push(validStudent);
      }
      /* map each student to their field */
      const studentData = new Map();
      for (const student of validStudents) {
        const field = student.split(',')[3];
        const firstName = student.split(',')[0];

        if (!studentData.get(field)) {
          studentData.set(field, []);
          studentData.get(field).push(firstName);
        } else studentData.get(field).push(firstName);
      }
      resolve(studentData);
    });
  });
}

/*
readDatabase('database.csv')
  .then(studentData => {
        console.log(studentData);
  })
.catch(error => {
      console.error(error);
      //andle the error
 });
*/

export default readDatabase;
