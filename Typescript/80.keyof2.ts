namespace ss {
  interface Person {
    name: string;
    age: number;
    address: string;
  }

  type PersonKeys = keyof Person; // "name" | "age" | "address"

  const firstKey: PersonKeys = "name";
}
/**
 * Using keyof Operator With TypeScript Generics
 */
namespace ss {
  interface Person {
    name: string;
    age: number;
    address: string;
  }

  function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }

  const person: Person = { name: "Alice", age: 30, address: "123 Main St" };

  const name = getProperty(person, "name"); // type of name is string
  const age = getProperty(person, "age"); // type of age is number
  const address = getProperty(person, "address"); // type of address is string

  // const invalid = getProperty(person, "foo")
  // Error: Argument of type '"foo"' is not assignable to parameter of type '"name" | "age" | "address"'
}

/**
 * Using keyof Operator With JavaScript Objects
 */
namespace ss {
  const personJS = { name: "Alice", age: 30, address: "123 Main St" };

  type PersonTypes = typeof personJS;
  /*
    type PersonTypes = {
    name: string;
    age: number;
    address: string;
}*/

  type PersonKeysJS = keyof typeof personJS; // "name" | "age" | "address"
}
