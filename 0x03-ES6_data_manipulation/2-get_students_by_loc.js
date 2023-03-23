export default function getStudentsByLocation(students, studentLocation) {
  const studentsMatched = students.filter((student) => student.location === studentLocation);
  return studentsMatched;
}
