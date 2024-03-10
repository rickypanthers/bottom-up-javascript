const promise1 = (delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //   resolve('Resolved promise1');
      reject(new Error('promise1 errored out'));
    }, delay);
  });
};

const promise2 = (delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Resolved promise2');
    }, delay);
  });
};

const promise3 = (delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('promise3 errored out'));
    }, delay);
  });
};

const arrofPromises = [promise1(400), promise2(600), promise3(300)];

const myRacePromise = (taskArr) => {
  return new Promise((resolve, reject) => {
    taskArr.forEach((arr) => {
      arr
        .then((resolved) => {
          final_arr.push(resolved);
          resolve(resolved);
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};

myRacePromise(arrofPromises)
  .then((values) => console.log(values))
  .catch((err) => console.log(err));
