/**
 * Typeof
 */
namespace ss {
  function printLength(value: string | number): void {
    if (typeof value === "string") {
      console.log(value.length);
    } else {
      console.log("Value is not a string");
    }
  }
}

/**
 * Instanceof
 */
namespace ss {
  class Dog {
    bark() {
      console.log("Woof!");
    }
  }

  class Cat {
    meow() {
      console.log("Meow!");
    }
  }

  function makeSound(animal: Dog | Cat): void {
    if (animal instanceof Dog) {
      animal.bark();
    } else if (animal instanceof Cat) {
      animal.meow();
    }
  }
}

/**
 * Custom User-Defined Type Guard:
 */
namespace ss {
  interface Circle {
    kind: "circle";
    radius: number;
  }

  interface Square {
    kind: "square";
    sideLength: number;
  }

  type Shape = Circle | Square;

  function isCircle(shape: Shape): shape is Circle {
    return shape.kind === "circle";
  }

  function area(shape: Shape): number {
    if (isCircle(shape)) {
      return Math.PI * shape.radius ** 2;
    } else {
      return shape.sideLength ** 2;
    }
  }
}
/**
 * in
 */
namespace ss {
  interface Person {
    name: string;
    age?: number;
  }

  function greet(person: Person): void {
    console.log(`Hello, ${person.name}!`);
    if ("age" in person) {
      console.log(`You are ${person.age} years old.`);
    }
  }
}
/**
 * Null and Undefined Type Guard:
 */
namespace ss {
  function printLength(value: string | null): void {
    if (value !== null) {
      console.log(value.length);
    } else {
      console.log("Value is null");
    }
  }
}
