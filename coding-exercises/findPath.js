var obj = {
  a: {
    b: {
      c: 12,
      j: false,
    },
    k: null,
  },
};

function findPath(obj, path) {
  let arr_path = path.split('.');
  let obj_copied = JSON.parse(JSON.stringify(obj));
  for (let i of arr_path) {
    if (obj_copied.hasOwnProperty(i)) {
      obj_copied = obj_copied[i];
    } else {
      return undefined;
    }
  }
  return obj_copied;
}

console.log(findPath(obj, 'a.b')); // {c: 12, j: false}
console.log(findPath(obj, 'a.b.d')); // undefined
console.log(findPath(obj, 'a.c')); // undefined
console.log(findPath(obj, 'a.b.c.d')); // undefined
console.log(findPath(obj, 'a.b.c.d.e')); // undefined
console.log(findPath(obj, 'a.b.j')); //false
console.log(findPath(obj, 'a.b.j.k')); //undefined
console.log(findPath(obj, 'a.k'));
