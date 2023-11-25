/**
 * Use generics to create generic interfaces
 */
namespace ss {
  interface GenericArray<T> {
    length: number;
    push(item: T): void;
    pop(): T;
  }

  class NumberArray implements GenericArray<number> {
    // implement properties and methods for number array
  }
  class StringArray implements GenericArray<string> {
    // implement properties and methods for string array
  }
}
