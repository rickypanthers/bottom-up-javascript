const asyncFunc = (delay) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Resolved after ${delay} milliseconds`);
    }, delay);
  });
};

const tasksArr = [asyncFunc(1000), asyncFunc(3000), asyncFunc(1000)];

const asyncFuncParallel = (tasks, callback) => {
  let output_tasks = [];
  tasks.forEach((task) => {
    task
      .then((resolved) => {
        output_tasks.push(resolved);
        if (output_tasks.length === tasks.length) {
          callback(output_tasks);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
};

function callback(taskRes) {
  taskRes.forEach((task) => console.log(task));
}

asyncFuncParallel(tasksArr, callback);
