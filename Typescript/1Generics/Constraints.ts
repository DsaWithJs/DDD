namespace one {
  function merge<U extends { name: string }, V extends { age: number }>(obj1: U, obj2: V) {
    return { ...obj1, ...obj2 };
  }

  const person = { name: "John" };
  const age = { age: 25 };
  const result = merge(person, age); // Output: { name: 'John', age: 25 }
}

// Constraint using key of
//The K extends keyof T constraint ensures that K can only be one of the valid keys of the type T.
namespace two {
  function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }
  const person = { name: "John", age: 25, city: "New York" };
  const name = getProperty(person, "name"); // Output: 'John'
  const age = getProperty(person, "age"); // Output: 25
  const city = getProperty(person, "city"); // Output: 'New York'
  const invalidKey = getProperty(person, "email");
  // TypeScript error: Argument of type '"email"' is not assignable to parameter of type 'keyof typeof person'
}
