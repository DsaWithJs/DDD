/**
 * Conditional types allow you to define types that depend on other types,
 * using conditional logic.
 */
namespace ss {
  type ArrayElementType<T> = T extends (infer U)[] ? U : T;

  //Example Implementation
  const arr1 = [1, 2, 3];
  type ElementType1 = ArrayElementType<typeof arr1>; // number

  const arr2 = ["a", "b", "c"];
  type ElementType2 = ArrayElementType<typeof arr2>; // string

  const obj = { prop1: 123, prop2: "abc" };
  type ElementType3 = ArrayElementType<typeof obj>; // { prop1: number, prop2: string }
}
/**
 * Mapped Types
 * Mapped types allow you to create new types based on existing types,
 * by mapping over their properties.
 */
namespace ss {
  type Readonly<T> = {
    readonly [P in keyof T]: T[P];
  };

  //Example Implementation
  interface Person {
    name: string;
    age: number;
  }

  type ReadonlyPerson = Readonly<Person>;

  const person: ReadonlyPerson = { name: "John", age: 30 };
  person.name = "Neha"; // Error: Cannot assign to 'name' because it is a read-only property.
}
