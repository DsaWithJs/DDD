/**
 * Basic Interface
 */
namespace ss {
  interface Person {
    name: string;
    age: number;
  }

  // Function that takes a 'Person' object as a parameter
  function greetPerson(person: Person) {
    console.log(`Hello, ${person.name}! You are ${person.age} years old.`);
  }

  // Usage of the 'Person' interface
  const john: Person = { name: "John Doe", age: 30 };
  greetPerson(john); // Hello, John Doe! You are 30 years old.
}

/**
 * Optional Properties
 */

namespace ss {
  // Interface with optional properties
  interface Book {
    title: string;
    author: string;
    publishedYear?: number; // '?' denotes an optional property
  }

  function printBookInfo(book: Book) {
    console.log(`Title: ${book.title}, Author: ${book.author}`);
    // Title: Sample Book, Author: Jane Doe
    // Title: Another Book, Author: John Smith

    if (book.publishedYear) {
      console.log(`Published Year: ${book.publishedYear}`); // Published Year: 2020
    } else {
      console.log("Published Year: Not available"); // Published Year: Not available
    }
  }

  // Usage of the 'Book' interface
  const book1: Book = { title: "Sample Book", author: "Jane Doe" };
  const book2: Book = { title: "Another Book", author: "John Smith", publishedYear: 2020 };

  printBookInfo(book1);
  printBookInfo(book2);
}

/**
 * Function Interfaces
 */
namespace ss {
  // Interface for a function type
  interface MathOperation {
    (a: number, b: number): number;
  }

  // Function that implements the 'MathOperation' interface
  const add: MathOperation = (a, b) => a + b;
  const subtract: MathOperation = (a, b) => a - b;

  console.log(add(5, 3)); // 8
  console.log(subtract(10, 4)); // 6
}

/**
 * Readonly Properties
 */
namespace ss {
  interface Person {
    readonly name: string;
    age: number;
  }

  const person: Person = {
    name: "John Doe",
    age: 30,
  };

  person.name = "Jane Doe"; // Cannot assign to name because it is a read-only property
}

/**
 * Generic Interfaces
 */
namespace ss {
  interface UserData {
    id: number;
    name: string;
  }

  interface ApiData<T> {
    payload: T[];
    code: number;
    date: Date;
  }

  async function fetchAPI(): Promise<ApiData<UserData>> {
    const response = await fetch("/URL_endpoints");

    if (!response.ok) {
      throw new Error("Failed to fetch data from the API.");
    }

    // Assuming the response contains JSON data
    const data: ApiData<UserData> = await response.json();
    return data;
  }
}

/**
 * Extending Interfaces
 */
namespace ss {
  interface Shape {
    color: string;
  }

  interface Square extends Shape {
    sideLength: number;
  }

  let square: Square = {
    color: "blue",
    sideLength: 10,
  };
}

/**
 * Extend multiple interfaces,
 */
namespace ss {
  interface Shape {
    color: string;
  }

  interface PenStroke {
    penWidth: number;
  }

  interface Square extends Shape, PenStroke {
    sideLength: number;
  }

  let square: Square = {
    color: "blue",
    sideLength: 10,
    penWidth: 5.0,
  };
}

/**
 * Declaration Merging
 */
namespace ss {
  interface Person {
    name: string;
    age: number;
  }

  interface Person {
    gender: string;
  }

  const person: Person = {
    name: "John",
    age: 30,
    gender: "male",
  };
}

/**
 * Interface Merging with Shared Properties
 */
namespace ss {
  interface Car {
    make: string;
  }

  interface Car {
    model: string;
    make: string; // Shared property with the same type, no conflict.
  }

  const car: Car = {
    make: "Toyota",
    model: "Camry",
  };
}

/**
 * Interface Merging with Conflicting Properties
 */
namespace ss {
  interface Fruit {
    name: string;
    color: string;
  }

  interface Fruit {
    name: number;
    // Subsequent property declarations must have the same type.  Property 'name' must be of type 'string', but here has type 'number'.
  }

  const fruit: Fruit = {
    name: "Apple",
    color: "Red",
  };
}

/**
 * Hybrid Types
 * Hybrid types in TypeScript refer to objects that can behave like
 * both a function and an object, with additional properties.
 */
namespace ss {
  interface Counter {
    (start: number): string;
    interval: number;
    reset(): string;
  }

  function getCounter(): Counter {
    let counter = function (start: number) {
      // Function implementation goes here
      return "Counter started at " + start;
    } as Counter;

    counter.interval = 123;
    counter.reset = function () {
      return "Counter has been reset";
    };

    return counter;
  }

  let myCounter = getCounter();

  console.log(myCounter(10)); // Counter started at 10
  console.log(myCounter.reset()); // Counter has been reset

  console.log(myCounter.interval); // 123
  myCounter.interval = 5.0;
  console.log(myCounter.interval); // 5
}
