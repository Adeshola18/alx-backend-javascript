export default function updateStudentGradeByCity(students, city, newGrades) {
  const studentsInCity = students.filter((student) => student.location === city);
  /* eslint-disable array-callback-return */
  const newRecord = studentsInCity.map((student) => {
    newGrades.map((record) => {
      if (record.studentId === student.id) {
        /* eslint-disable no-param-reassign */
        student.grade = record.grade;
      }
    });
    if (!student.grade) {
      student.grade = 'N/A';
    }
    return student;
  });
  return newRecord;
}
