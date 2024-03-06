//sum(1,2,3…..n)(1)(2)

function sum(...args) {
  let argument = [...args];
  return function sum1() {
    if (arguments.length > 0) {
      argument = argument.concat([...arguments]);
      return sum1;
    } else {
      return argument.reduce((a, b) => a + b, 0);
    }
  };
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 1)(2, 2, 3, 4, 5, 6, 7)());
