/**
 * Type Inference with Generic Type Parameters
  TypeScript provides powerful type inference capabilities when using generic type parameters. 
 It automatically infers the type arguments based on the provided arguments or context, 
 eliminating the need for explicit type annotations in many cases. 
 */
namespace ss {
  function identity<T>(arg: T): T {
    return arg;
  }
  const result1 = identity<number>(10); // explicitly specifying the type argument
  const result2 = identity("hello"); // type inference, T is inferred as string
}

/**
 * Extending Generic Type Parameters
 */
namespace ss {
  interface Lengthwise {
    length: number;
  }
  function printLength<T extends Lengthwise>(arg: T): void {
    console.log(arg.length);
  }
  printLength("hello"); // Output: 5
  printLength([1, 2, 3]); // Output: 3
  printLength({ length: 10 }); // Output: 10
}

/**
 * Multiple Generic Type Parameters
 */
namespace ss {
  function mergeArrays<T, U>(arr1: T[], arr2: U[]): (T | U)[] {
    return [...arr1, ...arr2];
  }
  const numbers = [1, 2, 3];
  const strings = ["hello", "world"];
  const mergedArray = mergeArrays(numbers, strings);
  console.log(mergedArray); // Output: [1, 2, 3, "hello", "world"]
}
