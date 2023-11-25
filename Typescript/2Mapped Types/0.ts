/**
 * Here, we are not passing Generic type T to type, T is static
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
 * Here, we are  passing Generic type T to type, T is dynamic
 */
namespace ss {
  type RequiredPerson = {
    name: string;
    age: number;
    email: string;
  };

  type OptionalPerson<T> = { [P in keyof T]?: T[P] };

  const person: OptionalPerson<RequiredPerson> = {
    name: "John",
    age: 30,
  };

  person.email = "john@example.com"; // Optional property assignment allowed.
}
