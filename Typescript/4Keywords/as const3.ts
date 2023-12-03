namespace ss {
  // Array
  const colors = ["red", "green", "blue"];

  //If we want to make the colors array read-only,
  //we can use const assertion like this:

  const colors = ["red", "green", "blue"] as const;
}
/**
 * Practical examples of const assertion
 */
/**
 * Example 1: Enumerations
 */
namespace ss {
  const Direction = {
    Up: "UP",
    Down: "DOWN",
    Left: "LEFT",
    Right: "RIGHT",
  } as const;
}
/**
 * Example 2: Arrays and tuples
 * const assertion can also be used with arrays and tuples to make them read-only.
 * This can be useful when you want to ensure that an array or tuple is not modified after it is initialized.
 */
namespace ss {
  const fruits = ["apple", "banana", "orange"] as const;
}
/**
 * Suppose we have a function as follows:
 */
namespace ss {
  function foo(x: number, y: number, z: number) {
    console.log(x + y + z);
  }
  const args = [1, 2, 3];
  foo(...args);
}
/**
 * To fix this error, just do the following:
 */
namespace ss {
  function foo(x: number, y: number, z: number) {
    console.log(x + y + z);
  }
  const args = [1, 2, 3] as const;
  foo(...args);
}
