export default function setFromArray(array) {
  const returnSet = new Set();
  for (const element of array) {
    returnSet.add(element);
  }
  return returnSet;
}
