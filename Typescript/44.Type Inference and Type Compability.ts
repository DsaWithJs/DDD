namespace ss {
  let x = 30; // TypeScript infers that x has type number

  let person33 = {
    name: "Alice",
    age: 25,
  }; // TypeScript infers that person has type { name: string, age: number }
}
/**
 *
 * Type Compatibility
 */

namespace ss {
  interface Person {
    name: string;
  }

  interface Employee {
    name: string;
  }

  let person: Person = { name: "Alice" };
  let employee: Employee = person;
  // no error, even though Person and Employee were defined separately
}

/*
In this example, even though Person and Employee were defined separately, 
they have the same internal structure
*/

namespace ss {
  // Example 1:
  interface Animal {
    name: string;
    age: number;
  }

  interface Dog extends Animal {
    breed: string;
  }

  let animal: Animal = { name: "Max", age: 3 };
  let dog: Dog = { name: "Buddy", age: 2, breed: "Golden Retriever" };

  animal = dog; // This is allowed because Dog extends Animal

  // Example 2:
  let num: number;
  let str: string;

  num = str; // This is not allowed because number and string are not compatible types
}
