/**
 * Example 1: Making Properties Read-Only
 */
namespace ss {
  type MutablePerson = {
    name: string;
    age: number;
  };

  type ImmutablePerson = { readonly [P in keyof MutablePerson]: MutablePerson[P] };

  const person: ImmutablePerson = {
    name: "John",
    age: 30,
  };

  person.name = "Jane"; // Error: Cannot assign to 'name' because it is a read-only property.
}

/**
 * Example 2: Optionalizing Properties
 * we want to transform a type by making some of its properties optional
 */
namespace ss {
  type RequiredPerson = {
    name: string;
    age: number;
    email: string;
  };

  type OptionalPerson = { [P in keyof RequiredPerson]?: RequiredPerson[P] };

  const person: OptionalPerson = {
    name: "John",
    age: 30,
  };

  person.email = "john@example.com"; // Optional property assignment allowed.
}

/**
 * Example 3: Creating Partial Types
 */
namespace ss {
  type Person = {
    name: string;
    age: number;
    email: string;
    address: string;
  };

  type PartialPerson<T> = { [P in keyof T]?: T[P] };

  const partialPerson: PartialPerson<Person> = {
    name: "John",
    age: 30,
  };

  partialPerson.email = "john@example.com"; // Optional property assignment allowed.
  partialPerson.address = "123 Street"; // Optional property assignment allowed.
}
