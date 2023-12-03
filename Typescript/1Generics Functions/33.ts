/**
 * How to Check if a Generic Has a Certain Property or Method in TypeScript
 * https://javascript.plainenglish.io/how-to-check-if-a-generic-has-a-certain-property-or-method-in-typescript-efcc866c3e7f
 */

namespace ss {
  function hasOwnProperty<T, K extends keyof T>(obj: T, key: K): obj is { [P in K]: T[P] } {
    return obj.hasOwnProperty(key);
  }

  const obj = { a: 1, b: 2 };
  const result = hasOwnProperty(obj, "a"); // result is true
}

namespace ss {
  function hasMethod<T, K extends keyof T>(obj: T, key: K): obj is { [P in K]: T[P] & (() => any) } {
    return typeof obj[key] === "function";
  }

  const myObject = {
    age: 25,
    printAge: () => console.log(this.age),
  };
  console.log(hasMethod(myObject, "printAge")); // true
  console.log(hasMethod(myObject, "age")); // false
}
