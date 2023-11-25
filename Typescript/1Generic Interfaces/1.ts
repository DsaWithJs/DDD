/**
 * Generics for Reusable Components:
 */
namespace ss {
  interface Box<T> {
    contents: T;
  }

  const stringBox: Box<string> = { contents: "Hello, TypeScript!" };
  const numberBox: Box<number> = { contents: 42 };
}

namespace ss {
  interface Pair<T, U> {
    first: T;
    second: U;
  }
  let pair: Pair<number, string> = { first: 1, second: "second" };
}

namespace ss {
  interface Dictionary<T> {
    [key: string]: T;
  }
  let dictionary: Dictionary<number> = { a: 1, b: 2, c: 3 };
}
