/**
 * Type Annotation: (Recommended way)
 *
 * The type annotations are typically part of the program’s source code
 * and can be used by development tools for static analysis,
 * code completion, and error checking.
 */
namespace ss {
  let myVariable: string = "Hello, World!";
  function greet(name: string): void {
    console.log("Hello, " + name);
  }
  function add(a: number, b: number): number {
    return a + b;
  }
  interface Person {
    name: string;
    age: number;
  }

  const person: Person = {
    name: "John",
    age: 30,
  };
  let numbers: number[] = [1, 2, 3, 4, 5];
}

/**
 * Type Assertion: (Not recommended)
 *
 * Type assertion (also known as type casting or type conversion) is a way
 * to tell the compiler or type system that you know more
 * about the type of a value than it does.
 * It is used to explicitly change the type of an expression
 * from one type to another.
 */
namespace ss {
  let myVariable: any = "Hello, World!";
  let length: number = (myVariable as string).length;
  //......................................
  interface Square {
    sideLength: number;
  }

  interface Rectangle {
    width: number;
    height: number;
  }

  let square = {} as Square;
  square.sideLength = 5;

  let rectangle = square as Rectangle;
  rectangle.width = 10;
  rectangle.height = 20;
}
namespace ss {
  function displayData(data: string | number): void {
    if (typeof data === "string") {
      console.log(data.toUpperCase());
    } else {
      console.log(data.toFixed(2));
    }
  }

  displayData("Hello"); // Output: HELLO
  displayData(3.14159); // Output: 3.14
  //......................................
  interface Animal {
    name: string;
  }

  interface Dog extends Animal {
    breed: string;
    bark(): void;
  }

  function makeSound(animal: Animal): void {
    if ((animal as Dog).bark) {
      (animal as Dog).bark();
    } else {
      console.log("Unknown animal sound");
    }
  }
  //......................................
  let data: any = "Hello, World!";
  let length: number = (data as string).length;
}
