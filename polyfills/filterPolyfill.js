const arr1 = [2, 4, 6, 8, 11];

const greaterthanSix = arr1.filter((ar, i, arr) => {
  return ar > 6 || i > 1;
});

console.log(greaterthanSix);

Array.prototype.myFilterFunc = function (callback) {
  if (!typeof this === 'object' || this.length === 0) {
    throw new Error('Invalid Array');
  }
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      newArr.push(this[i]);
    }
  }
  return newArr;
};

const greaterthanMySix = arr1.myFilterFunc((ar, i, arr) => {
  return ar > 6 || i > 1;
});

console.log(greaterthanMySix);
