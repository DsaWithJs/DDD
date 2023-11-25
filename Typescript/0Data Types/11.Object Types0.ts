/**
 * defining an object type
 */
namespace ss {
  // Defining an object type for a person
  type Person = {
    name: string;
    age: number;
    isStudent: boolean;
  };

  // Creating an object that matches the Person type
  const john: Person = {
    name: "John Doe",
    age: 30,
    isStudent: true,
  };
}

/**
 * Optional Properties
 */
namespace ss {
  type Book = {
    title: string;
    author: string;
    year: number;
    language?: string; // Optional property
  };

  const book1: Book = {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
  };

  const book2: Book = {
    title: "1984",
    author: "George Orwell",
    year: 1949,
    language: "English",
  };
}
/**
 * 2. Readonly Properties:
 */
namespace ss {
  type Point = {
    readonly x: number;
    readonly y: number;
  };

  const origin: Point = { x: 0, y: 0 };
  origin.x = 10; // Error: Cannot assign to 'x' because it is a read-only property.
}
/**
 * 3. Extending Object Types:
 */
namespace ss {
  type Animal = {
    species: string;
    sound: string;
  };

  type Dog = Animal & {
    breed: string;
  };

  const beagle: Dog = {
    species: "Canine",
    sound: "Woof",
    breed: "Beagle",
  };
}
/**
 * 4. Union Types for Object Types:
 * You can create union types to allow an object to have multiple possible shapes.
 * This is useful when dealing with objects that may have different sets of properties.
 */
namespace ss {
  type Circle = {
    kind: "circle";
    radius: number;
  };

  type Square = {
    kind: "square";
    sideLength: number;
  };

  type Shape = Circle | Square;

  const circle: Shape = {
    kind: "circle",
    radius: 5,
  };

  const square: Shape = {
    kind: "square",
    sideLength: 4,
  };
}
