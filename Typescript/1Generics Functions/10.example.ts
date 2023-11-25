namespace ss {
  function identity<T extends string | number>(arg: T): T {
    console.log(arg.length); // okay to access 'length' property
    return arg;
  }
  let output = identity("hello"); // type of output is 'string'
}

namespace ss {
  interface Lengthwise {
    length: number;
  }
  function identity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length); // okay to access 'length' property
    return arg;
  }
  let output = identity({ length: 10, value: 3 }); // type of output is { length: number, value: number }
}

namespace ss {
  function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
  }
  let x = { a: 1, b: 2, c: 3, d: 4 };
  getProperty(x, "a"); // okay
  getProperty(x, "m"); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.
}
