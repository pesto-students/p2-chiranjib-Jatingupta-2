function add(a = 0, b = 0) {
  return a + b;
}

function memoize(fn) {
  var newMap = new Map();
  return function (...args) {
    const key = args.toString();

    if (newMap.has(key)) {
      return newMap.get(key);
    }
    newMap.set(key, fn(...args));
    return newMap.get(key);
  };
}

const memoAdd = memoize(add);

console.log(memoAdd(100, 100));
console.log(memoAdd(100));
console.log(memoAdd(100, 200));
console.log(memoAdd(100, 100));
