//Sum(1,2,3…..n)(1)(2)……(n)

function sum(...args) {
  let argument = [...args];
  return function sum1(b) {
    if (b) {
      argument = argument.concat(b);
      return sum1;
    } else {
      return argument.reduce((a, b) => a + b, 0);
    }
  };
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 1)(1)(2)(3)(4)(5)(6)());
