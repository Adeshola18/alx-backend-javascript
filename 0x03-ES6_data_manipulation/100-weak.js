const weakMap = new WeakMap();

function queryAPI(endpoint) {
  let noOfCalls = weakMap.get(endpoint) || 0;
  weakMap.set(endpoint, noOfCalls + 1);
  noOfCalls = weakMap.get(endpoint);

  if (noOfCalls >= 5) {
    throw new Error('Endpoint load is high');
  }
}

export { weakMap, queryAPI };
