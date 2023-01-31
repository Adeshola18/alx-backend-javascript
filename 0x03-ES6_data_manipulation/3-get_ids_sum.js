export default function getStudentIdsSum(students) {
  const initial = 0; /* eslint-disable-line */
  const sum = students.reduce((accumulator, currentStud) => accumulator + currentStud.id, initial);
  return sum;
}
