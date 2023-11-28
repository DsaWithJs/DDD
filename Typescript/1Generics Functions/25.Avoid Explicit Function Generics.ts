namespace ss {
  type SomeType = {
    name: string;
    quantity: number;
  };
  const someFunc = <Key extends keyof SomeType>(key: Key, value: SomeType[Key]) => {
    // ...
  };

  // not explicit generics
  someFunc("name", "John"); // OK
  someFunc("name", 10); // Error as desired
  someFunc("quantity", "John"); // Error as desired
  someFunc("quantity", 10); // OK

  // explicit generics
  someFunc<"name" | "quantity">("name", 10); // wrong, but no error
}

namespace ss {
  type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

  type IsUnion<T> = [T] extends [UnionToIntersection<T>] ? false : true;

  type SomeType = {
    name: string;
    quantity: number;
  };
  const someFunc = <Key extends keyof SomeType>(key: IsUnion<Key> extends true ? "No Union!" : Key, value: SomeType[Key]) => {
    // ...
  };

  someFunc<"name" | "quantity">("name", 10); //  error as expected

  // still works as normal
  someFunc("name", "John"); // OK
  someFunc("name", 10); // Error as desired
  someFunc("quantity", "John"); // Error as desired
  someFunc("quantity", 10); // OK
}
