//sum(1,2,3…..n)(1)(2)

function sum(...args) {
  let argument = [...args];
  let counter = 0;
  return function sum1(b) {
    if (b) {
      counter++;
      argument = argument.concat(b);
      if (counter === 2) {
        return argument.reduce((a, b) => a + b, 0);
      }
      return sum1;
    }
  };
}

console.log(sum(1, 2, 3, 4, 5, 6, 7)(1)(2));
