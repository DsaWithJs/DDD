//https://medium.com/interesting-coding/everything-you-need-to-know-to-master-typing-functions-in-typescript-a18bd36f4f13

/**
 * Function Declarations
 */
namespace ss {
  function addNumbers(x: number, y: number): number {
    return x + y;
  }
}
/**
 * Function Expressions
 */
namespace ss {
  let addNumbers = function addNumbers(x: number, y: number): number {
    return x + y;
  };
}
/**
 * Anonymous Function Expression
 */
namespace ss {
  let addNumbers = function (x: number, y: number): number {
    return x + y;
  };
}
/**
 * Using explicit return for arrow functions
 */
namespace ss {
  let addNumbers = (x: number, y: number): number => {
    return x + y;
  };
}
/**
 * Using implicit return for arrow functions
 */
namespace ss {
  let addNumbers = (x: number, y: number): number => x + y;
}
/**
 * Using implicit return of an object with arrow functions
 */
namespace ss {
  let addNumbers = (x: number, y: number): { total: number } => ({ total: x + y });
}
/**
 * Using Type Annotation for arrow functions
 */
namespace ss {
  let addNumbers: (x: number, y: number) => number = (x, y) => x + y;
}
/**
 * Using Type Alias for arrow functions
 */
namespace ss {
  type TAddNumbers = (x: number, y: number) => number;

  let addNumbers: TAddNumbers = (x, y) => x + y;
}

/**
 * Using Interfaces for arrow functions
 */
namespace ss {
  interface IAddNumbers {
    addNumbers: (x: number, y: number) => number;
  }

  let addNumbers: IAddNumbers["addNumbers"] = (x, y) => x + y;

  console.log(addNumbers(3, 6));
}

/**
 * Another way
 */
namespace ss {
  interface IAddNumbers {
    (x: number, y: number): number;
  }

  let addNumbers: IAddNumbers = (x, y) => x + y;

  console.log(addNumbers(3, 6));
}

/**
 * Optional and Default Parameters
 */
namespace ss {
  let addNumbers = (x: number, y?: number) => x + (y ?? 0);

  console.log(addNumbers(3)); // 3
  console.log(addNumbers(3, 6)); // 9
}

/**
 * Default Parameters
 */
namespace ss {
  let addNumbers = (x: number, y: number = 5) => x + y;

  console.log(addNumbers(3)); // 8
  console.log(addNumbers(3, 6)); // 9
  console.log(addNumbers(3, undefined)); // 8
}

/**
 * Rest Parameters
 */
namespace ss {
  let addNumbers = (x: number = 0, ...rest: number[]): number => {
    return rest.reduce((acc, curr) => acc + curr, x);
  };

  console.log(addNumbers(3, 6, 7, 8, 10)); // 34 Here the value of x is 3
  console.log(addNumbers(undefined, 6, 7, 8, 10)); // 31 Here the value of x is 0
}

/**
 * And we can extract the type:
 */
namespace ss {
  type TAddNumbers = (x?: number, ...rest: number[]) => number;

  let addNumbers: TAddNumbers = (x = 5, ...rest) => {
    return rest.reduce((acc, curr) => acc + curr, x);
  };

  console.log(addNumbers(3, 6, 7, 8, 10)); // 34 Here the value of x is 3
  console.log(addNumbers(undefined, 6, 7, 8, 10)); // 36 Here the value of x is 5
}

/**
 * Methods for Object properties
 */
namespace ss {
  const person = {
    greeting(name: string): string {
      return `Hello, my name is ${name}`;
    },
  };

  console.log(person.greeting("Cihan")); // Hello, my name is Cihan
}

/**
 * Object property as arrow function expression
 */
namespace ss {
  const person = {
    greeting: (name: string): string => {
      return `Hello, my name is ${name}`;
    },
  };

  console.log(person.greeting("Cihan")); // Hello, my name is Cihan
}

/**
 * If you have a property whose key and value are strings, you must specify the type as shown below
 */
namespace ss {
  const person: { dogName: string; greeting(name: string): string } = {
    dogName: "oscar",
    greeting(name) {
      return `My name is ${name} and this is my dog ${this.dogName}`;
    },
  };

  console.log(person.dogName);
  console.log(person.greeting("Cihan"));
}

/**
 * using type alias we can extract the type.
 */
namespace ss {
  type TPerson = {
    dogName: string;
    greeting(name: string): string;
  };

  const person: TPerson = {
    dogName: "oscar",
    greeting(name) {
      return `My name is ${name} and this is my dog ${this.dogName}`;
    },
  };

  console.log(person.dogName);
  console.log(person.greeting("Cihan"));
}

/**
 * Methods for Classes
 */
namespace ss {
  class Person {
    greeting(name: string): string {
      return `Hello, my name is ${name}`;
    }
  }

  const person = new Person();
  console.log(person.greeting("Cihan")); // Hello, my name is Cihan
}

/**
 * arrow function
 */
namespace ss {
  class Person {
    greeting = (name: string): string => {
      return `Hello, my name is ${name}`;
    };
  }

  const person = new Person();
  console.log(person.greeting("Cihan")); // Hello, my name is Cihan
}

/**
 * Async Functions
 * Defining an async function using TypeScript is the same as in JavaScript.
 * One thing to note is that the return type of the function should always be Promise generic.
 */
namespace ss {
  async function addNumbers(x: number, y: number): Promise<number> {
    return x + y;
  }
}

/**
 * Async arrow function
 */
namespace ss {
  const addNumbers = async (x: number, y: number): Promise<number> => x + y;
}
