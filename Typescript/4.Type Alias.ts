// Step 1: Defining a Type Alias for a Person
type Person = {
  name: string;
  age: number;
  superhero: boolean;
};

// Step 2: Extending the Type Alias
type Superhero = Person & {
  superpower: string;
};

// Using the Type Alias
const spiderman: Superhero = {
  name: "Peter Parker",
  age: 25,
  superhero: true,
  superpower: "Web-slinging",
};

namespace Person {
  // Step 1: Defining an Interface for a Person
  interface Person {
    name: string;
    age: number;
    superhero: boolean;
  }
  // Extending the Interface
  interface Superhero extends Person {
    superpower: string;
  }
  // Using the Interface
  const ironman: Superhero = {
    name: "Tony Stark",
    age: 40,
    superhero: true,
    superpower: "High-tech suits",
  };
}

// Step 3: Creating a Union Type with Type Alias
type Result = "success" | "failure";
const response: Result = "success";

// You can't directly create a Union Type with Interface
// This will throw an error
interface Response44 {
  result: "success" | "failure";
}
const myResponse: Response44 = {
  result: "success",
};

namespace one {
  // The type is inferred to be string
  const name = "John";

  // The type is inferred to be number[]
  const numbers = [1, 2, 3];

  // The type is inferred to be (string | number)[]
  const mixed = [1, "text"];
}

namespace two {
  interface User {
    id: string;
    name: string;
    email: string;
  }

  // Make all properties optional
  const partialUser: Partial<User> = {};

  // Make all properties required
  const requiredUser: Required<User> = {
    id: "123",
    name: "John",
    email: "a@b.cc",
  };
}
