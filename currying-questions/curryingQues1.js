//sum(a)(b)(c)…. (n)()

function sum(a) {
  return function sum1(b) {
    if (b) {
      a = a + b;
      return sum1;
    } else {
      return a;
    }
  };
}

console.log(sum(2)(4)(1)(3)(7)());
