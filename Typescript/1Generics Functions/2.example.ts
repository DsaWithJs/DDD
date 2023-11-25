// Suppose you want to create a function that swaps the values of two variables of any type
function swap<T>(a: T, b: T): [T, T] {
  return [b, a];
}

const swapped = swap(5, 10); // swapped is of type [number, number]
console.log(swapped); // Output: [10, 5]

const names2 = swap("Alice", "Bob"); // names is of type [string, string]
console.log(names2); // Output: ["Bob", "Alice"]

namespace ss {
  function identity<T>(arg: T): T {
    return arg;
  }

  let num = identity<number>(42); // num is a number
  let str = identity<string>("Hello"); // str is a string
  let arr = identity<number[]>([1, 2, 3]); // arr is a number array
}
/**
 * We can also omit the type argument and let Typescript infer it from the value we pass:
 */
namespace ss {
  function identity<T>(arg: T): T {
    return arg;
  }

  let num = identity(42); // num is a number
  let str = identity("Hello"); // str is a string
  let arr = identity([1, 2, 3]); // arr is a number array
}
