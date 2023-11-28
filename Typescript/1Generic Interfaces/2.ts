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

namespace ss {
  interface KeyValuePair<TKey, TValue> {
    key: TKey;
    value: TValue;
  }

  const numberToStringPair: KeyValuePair<number, string> = {
    key: 1,
    value: "one",
  };
  const stringToBooleanPair: KeyValuePair<string, boolean> = {
    key: "isTrue",
    value: true,
  };
}
