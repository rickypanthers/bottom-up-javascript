const asyncFunc = (delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(delay);
    }, delay);
  });
};

const rejectProm = (delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(delay);
    }, delay);
  });
};

const arrPromises = [
  asyncFunc(1000),
  asyncFunc(2000),
  asyncFunc(1500),
  rejectProm(3000),
];

// Promise.all(arrPromises).then((promises) => console.log(promises));

const myPromiseAllFunc = (array) => {
  return new Promise((resolve, reject) => {
    let arr1 = [];
    let count = 0;
    array.forEach((promise, index) => {
      promise
        .then((data) => {
          arr1[index] = data;
          count++;
          if (count === array.length) {
            resolve(arr1);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};

myPromiseAllFunc(arrPromises)
  .then((promises) => console.log(promises))
  .catch((err) => console.log(err));
