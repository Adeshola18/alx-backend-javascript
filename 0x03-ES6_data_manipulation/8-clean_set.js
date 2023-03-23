// Create a function named cleanSet that returns a string of
// all the set values that start with a specific string (startString).
//
// It accepts two arguments: a set (Set) and a startString (String).
//
// When a value starts with startString you only append the rest of the string.
// The string contains all the values of the set separated by -.
export default function cleanSet(set, startString) {
  if (typeof startString !== 'string' || startString === '' || !(set instanceof Set)) return '';
  const result = [];
  const strLen = startString.length;
  set.forEach((element) => {
    if (element && element.slice(0, strLen) === startString && strLen !== 0) {
      result.push(element.slice(strLen));
    }
  });
  return result.join('-');
}
