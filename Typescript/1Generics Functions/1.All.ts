/**
 * In simple terms, generics are a way of writing code that is flexible enough
 * to work with different types of data.
 *
 *
 * Generics in TypeScript allows us to create functions, classes,
 * and interfaces that work with a variety of data types.
 * Instead of specifying a specific data type,
 * we use a placeholder called a type parameter.
 * The type parameter represents any type that can be used in place of the placeholder.
 */

namespace ss {
  // Example 1: Basic generics
  function func1<T>(param1: T): T {
    // Function implementation
  }

  // Example 2: Multiple generic types
  function func2<T1, T2>(param1: T1): T2 {
    // Function implementation
  }

  // Example 3: Generics with type constraints
  function func3<T1, T2 extends T1>(param1: T1): T2 {
    // Function implementation
  }

  // Example 4: Applying generics to interfaces and classes
  interface MyInterface<T> {
    // Interface definition
  }

  class MyClass<T> {
    // Class definition
  }
}

namespace ss {
  function logArrayLength<T>(arr: T[]): T[] {
    console.log(`Array length: ${arr.length}`);
    return arr;
  }
  const stringArray = logArrayLength(["a", "b", "c"]); // Returns string[]
  const numberArray = logArrayLength([1, 2, 3]); // Returns number[]
}

namespace ss {
  interface Box<T> {
    value: T;
  }

  let box: Box<number> = { value: 42 };
  console.log(box.value); // Output: 42
}
