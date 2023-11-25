/**
 * typeof Operator
 */
namespace ss {
  type alphanumeric = string | number;

  function addArguments(a: alphanumeric, b: alphanumeric) {
    if (typeof a === "number" && typeof b === "number") {
      // a and b are narrowed down to type number
      return a + b;
    } else {
      // a and b are narrowed down to type string
      return `${a}${b}`;
    }
  }

  console.log(addArguments(5, 9)); // 14
  console.log(addArguments("os", "car")); // oscar
}

/**
 * instanceof Operator
 */
namespace ss {
  class Animal {
    sound(): string {
      return "generic sound";
    }
  }

  class Dog extends Animal {
    sound(): string {
      return "woof";
    }
  }

  class Cat extends Animal {
    sound(): string {
      return "meow";
    }
  }

  function makeSound(animal: Animal) {
    if (animal instanceof Dog) {
      return `Dog says, ${animal.sound()}`;
    } else if (animal instanceof Cat) {
      return `Cat says, ${animal.sound()}`;
    } else {
      return `Animal says, ${animal.sound()}`;
    }
  }

  const myDog = new Dog();
  const myCat = new Cat();
  const myAnimal = new Animal();

  console.log(makeSound(myDog)); // Dog says woof
  console.log(makeSound(myCat)); // Cat says meow
  console.log(makeSound(myAnimal)); // Animal says generic sound
}

/**
 * in Operator
 */

namespace ss {
  interface Square {
    size: number;
  }

  interface Circle {
    radius: number;
  }

  type Shape = Square | Circle;

  function getArea(shape: Shape) {
    if ("size" in shape) {
      // shape is narrowed down to type Square
      return shape.size * shape.size;
    } else {
      // shape is narrowed down to type Circle
      return Math.PI * shape.radius * shape.radius;
    }
  }

  const responseSquare: Shape = { size: 4 };
  console.log(getArea(responseSquare)); // 16

  const responseCircle: Shape = { radius: 5 };
  console.log(getArea(responseCircle)); // 78.53981633974483
}

/**
 * Equality Narrowing
 */
namespace ss {
  interface Square {
    kind: "square";
    size: number;
  }

  interface Circle {
    kind: "circle";
    radius: number;
  }

  type Shape = Square | Circle;

  function area(shape: Shape) {
    if (shape.kind === "square") {
      return shape.size * shape.size;
    } else {
      return Math.PI * shape.radius * shape.radius;
    }
  }
}

/**
 * Truthiness Narrowing
 */
namespace ss {
  function printLength(str?: string) {
    if (str) {
      console.log(str.length);
    } else {
      console.log("String is null or undefined");
    }
  }

  printLength("Hello"); // 5
  printLength(); // String is null or undefined

  function printValue(value: string | number | boolean) {
    if (value) {
      console.log(`The value is ${value}.`);
    } else {
      console.log(`The value is falsy.`);
    }
  }
}

namespace ss {
  function printLength(strOrArray: string[] | string | null) {
    if (strOrArray) {
      if (typeof strOrArray === "string") {
        console.log(`Length of string: ${strOrArray.length}`);
      } else if (Array.isArray(strOrArray)) {
        console.log(`Length of array: ${strOrArray.length}`);
      } else {
        console.log("Invalid argument");
      }
    } else {
      console.log("Argument is null");
    }
  }
}
