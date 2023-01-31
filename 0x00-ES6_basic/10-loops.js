export default function appendToEachArrayValue(array, appendString) {
  const arr = [];
  for (let idx of array) {
    const value = idx;
    idx = appendString + value;
    arr.push(idx);
  }
  return arr;
}
