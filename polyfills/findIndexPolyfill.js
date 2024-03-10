const arr1 = [22, 44, 33, 66, 5];

const findIndexLargerThan33 = arr1.findIndex((ar, i, arr) => ar > 33 && i > 2);

console.log(findIndexLargerThan33);

Array.prototype.myFindIndexFunc = function (callback) {
  let foundIndex = -1;
  if (!typeof this === 'object' || this.length === 0) {
    throw new Error('Invalid Array');
  }
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      foundIndex = i;
      break;
    }
  }
  return foundIndex;
};

const findMyIndexLargerThan33 = arr1.myFindIndexFunc(
  (ar, i, arr) => ar > 33 && i > 2
);
console.log(findMyIndexLargerThan33);
