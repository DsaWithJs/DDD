/**
 * How to Dynamically Resolve a Key for a Generic Object in TypeScript
 */
/**
 * when working with objects, it can be challenging to access properties that have a dynamic key.
 */
namespace ss {
  function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
  }

  const obj = { a: 1, b: 2 };
  const value = getProperty(obj, "a"); // value is 1
}
