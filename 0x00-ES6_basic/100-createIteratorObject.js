export default function createIteratorObject(report) {
  const arr = Object.values(report.allEmployees);
  const arrReturn = [];
  Object.values(arr).forEach((employees) => arrReturn.push(...employees));
  return arrReturn;
  // still coming back to this to create a custom iterator
}
