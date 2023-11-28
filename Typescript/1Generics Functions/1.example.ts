function fn1<T = any>(arg: T): T {
  return arg;
}
const fn2 = function <T = any>(arg: T): T {
  return arg;
};
const fn3 = <T = any>(arg: T): T => {
  return arg;
};

const fn4 = <T extends any>(arg: T): T => {
  return arg;
};
const fn5 = <T,>(arg: T): T => arg;
