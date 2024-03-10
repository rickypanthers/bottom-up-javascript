Array.prototype.myMapFunc = function (callback) {
  let newArr = [];
  if (!typeof this === 'object' || this.length === 0) {
    throw new Error('Invalid Array');
  }
  for (let i = 0; i < this.length; i++) {
    newArr.push(callback(this[i], i, this));
  }
  return newArr;
};

const arr1 = [1, 2, 3, 4, 5];
const arMultiplyTwo = arr1.myMapFunc((ar, i) => {
  return ar * 2 + i;
});

console.log('arMultiplyTwo', arMultiplyTwo);
