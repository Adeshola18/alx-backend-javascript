export default function hasValuesFromArray(set, arr) {
  const initial = arr[0];
  const bool = arr.reduce((accumulator, element) => set.has(element), initial);
  return bool;
}
