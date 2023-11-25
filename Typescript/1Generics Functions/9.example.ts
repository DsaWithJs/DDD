// https://medium.com/interesting-coding/mastering-generics-in-typescript-6bc67e0a1709

namespace ss {
  // Generic type to store and return an array of elements of the same type
  type ArrayHolder<T> = T[];

  const stringArray: ArrayHolder<string> = ["hello", "world"];
  const numberArray: ArrayHolder<number> = [1, 2, 3];
}

/**
 * Generic Types
 */
namespace ss {
  type Pair<T, U> = {
    first: T;
    second: U;
  };

  let pair1: Pair<number, string> = { first: 1, second: "two" };
  let pair2: Pair<string, boolean> = { first: "hello", second: true };
}

/**
 * Generic Functions
 */
namespace ss {
  function swap<T>(arr: T[], index1: number, index2: number): void {
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
  }

  const numbers = [1, 2, 3, 4];
  swap<number>(numbers, 1, 3);
  console.log(numbers); // [1, 4, 3, 2]

  const names = ["John", "Doe", "Jane"];
  swap<string>(names, 0, 2);
  console.log(names); // ["Jane", "Doe", "John"]
}

/**
 * multiple type
 */
namespace ss {
  function pair<T, U>(first: T, second: U): [T, U] {
    return [first, second];
  }

  const pair1 = pair<number, string>(123, "abc");
  console.log(pair1); // [ 123, 'abc' ]
}

/**
 * Generic Interfaces
 */
namespace ss {
  interface Stack<T> {
    items: T[];
    push(item: T): void;
    pop(): T | undefined;
    isEmpty(): boolean;
  }

  let myStack: Stack<number> = {
    items: [],
    push(item) {
      this.items.push(item);
    },
    pop() {
      return this.items.pop();
    },
    isEmpty() {
      return this.items.length === 0;
    },
  };

  // Example usage
  myStack.push(10);
  myStack.push(20);
  myStack.push(30);
  myStack.push(30);

  console.log(myStack.pop()); // 30
  console.log(myStack.pop()); // 30
  console.log(myStack.isEmpty()); // false
  console.log(myStack.pop()); // 20
  console.log(myStack.isEmpty()); // true
  console.log(myStack.items); // [ 10 ]
}

/**
 * Generic Constraints
 */
namespace ss {
  interface Book {
    title: string;
    author: string;
    pageCount: number;
  }

  function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }

  const book: Book = {
    title: "Sample Book",
    author: "John Doe",
    pageCount: 200,
  };

  const title = getProperty(book, "title");
  console.log(title); // 'Sample Book'

  const author = getProperty(book, "author");
  console.log(author); // 'John Doe'

  const pageCount = getProperty(book, "pageCount");
  console.log(pageCount); // 200

  const invalidKey = getProperty(book, "invalidKey");
  // Argument of type '"invalidKey"' is not assignable to parameter of type 'keyof Book'
}

/**
 * Generic Constraint with Multiple Types
 */
namespace ss {
  function concatenate<T extends string | number>(a: T, b: T): string {
    return `${a}${b}`;
  }

  const result1 = concatenate("Hello, ", "world!"); // 'Hello, world!'
  const result2 = concatenate(10, 20); // '1020'

  const invalidResult = concatenate(true, 42);
  // Argument of type 'boolean' is not assignable to parameter of type 'string | number'
}
