namespace ss {
  // You can also use a generic interface to create a type alias for a function:

  type Callback<T> = (arg: T) => void;
  let callback: Callback<string> = (arg) => console.log(arg);
}

namespace ss {
  type ListType<T> = { elements: T[] };
  let numList: ListType<number> = { elements: [1, 2, 3, 4] };
}

namespace ss {
  type ExtractPropertyNames<T> = T extends object ? keyof T : never;

  interface Person {
    name: string;
    age: number;
  }

  type PersonPropertyNames = ExtractPropertyNames<Person>; // "name" | "age"
}
