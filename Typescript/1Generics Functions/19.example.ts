namespace ss {
  function printArray<T>(array: T[]): void {
    array.forEach((element) => console.log(element));
  }
  printArray<string>(["Hello", "TypeScript"]);
  printArray<number>([1, 2, 3]);
}

namespace ss {
  type DeepReadonly<T> = {
    readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];
  };

  type X = {
    x: {
      a: 1;
      b: "hi";
    };
    y: "hey";
  };

  type Todo = DeepReadonly<X>;
}

namespace ss {
  interface Animal {
    name: string;
    makeSound(): void;
  }

  class Dog implements Animal {
    constructor(public name: string) {}

    makeSound() {
      console.log("Woof!");
    }
  }

  function sayHello<T extends Animal>(animal: T) {
    console.log(`Hello, ${animal.name}!`);
    animal.makeSound();
  }

  const dog = new Dog("Fido");
  sayHello(dog); // Output: Hello, Fido! Woof!
}
