const factorial = function fact(n) {
  return n <= 1 ? 1 : n * fact(n - 1);
};

const factorial2 = function (n) {
    return n <= 1 ? 1 : n * factorial2(n - 1);
  };
  

console.log(factorial2(4))