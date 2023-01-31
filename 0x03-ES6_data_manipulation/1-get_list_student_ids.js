export default function getListStudentIds(array) {
  if (!(Array.isArray(array))) {
    return [];
  }
  const returnArray = [];
  array.map((element) => returnArray.push(element.id));
  return returnArray;
}
