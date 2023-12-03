namespace ss {
  function add(a: number, b: number): number {
    return a + b;
  }

  const result = add(3, 5); // Result will be 8
}
/**
 * ## Signatures
 */
namespace ss {
  //In TypeScript, function signatures describe the types of parameters and
  //the return type of a function.
  //This includes the parameter names, their types, and the return type.

  type MathOperation = (a: number, b: number) => number;

  const add: MathOperation = (a, b) => a + b;
  const subtract: MathOperation = (a, b) => a - b;

  //Here, MathOperation is a type representing a function that takes two numbers
  //and returns a number.Both add and subtract are functions adhering to this signature.
}
/**
 * Optional and Default Parameters:
 */
namespace ss {
  function greet(name: string, greeting?: string): string {
    if (greeting) {
      return `${greeting}, ${name}!`;
    } else {
      return `Hello, ${name}!`;
    }
  }

  console.log(greet("John")); // Output: Hello, John!
  console.log(greet("Alice", "Hi")); // Output: Hi, Alice!
}

/**
 * Rest Parameters:
 */
namespace ss {
  function sumNumbers(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
  }

  console.log(sumNumbers(1, 2, 3, 4, 5)); // Output: 15
}
/**
 * Function Types:
 */
namespace ss {
  type MathOperation = (a: number, b: number) => number;

  const add: MathOperation = (a, b) => a + b;
  const subtract: MathOperation = (a, b) => a - b;

  console.log(add(3, 5)); // Output: 8
  console.log(subtract(10, 7)); // Output: 3
}
/**
 * Function Overloads:
 */
namespace ss {
  function greet(name: string): string;
  function greet(age: number): string;
  function greet(param: string | number): string {
    if (typeof param === "string") {
      return `Hello, ${param}!`;
    } else {
      return `Hello, age ${param}!`;
    }
  }

  console.log(greet("John")); // Output: Hello, John!
  console.log(greet(25)); // Output: Hello, age 25!
}
/**
 * Arrow Functions:
 */
namespace ss {
  const multiply = (a: number, b: number): number => a * b;
  console.log(multiply(2, 3)); // Output: 6
}
/**
 * Function Context (this):
 */
namespace ss {
  const person = {
    name: "Alice",
    greet: function () {
      console.log(`Hello, ${this.name}!`);
    },
  };

  person.greet(); // Output: Hello, Alice!
}
