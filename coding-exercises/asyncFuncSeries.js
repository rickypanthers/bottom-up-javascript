const asyncFunc = (delay) => {
  return () =>
    new Promise((res) => {
      setTimeout(() => {
        res(`Resolved after ${delay} ms`);
      }, delay);
    });
};

const tasksArr = [asyncFunc(1000), asyncFunc(3000), asyncFunc(1000)];

//without recursion
const asyncFuncSeries = async (inputTasks, callback) => {
  let output = [];
  for (let task of inputTasks) {
    try {
      let result = await task();
      output.push(result);
      if (output.length === inputTasks.length) callback(output);
    } catch (err) {
      console.error(err);
    }
  }
};

//with recursion
const asyncFuncSeriesRecur = async (inputTasks, callback, output = []) => {
  let task = inputTasks.shift();
  try {
    let result = await task();
    output.push(result);
    if (inputTasks.length > 0) {
      asyncFuncSeriesRecur(inputTasks, callback, output);
    } else {
      console.log(output);
      callback(output);
    }
  } catch (err) {
    console.log(err);
  }
};

// asyncFuncSeries(tasksArr, (result) => {
//   result.forEach((res) => console.log(res));
// });

asyncFuncSeriesRecur(tasksArr, (result) => {
  result.forEach((res) => console.log(res));
});
