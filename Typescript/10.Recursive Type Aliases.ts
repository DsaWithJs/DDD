/**
 * recursive type
 */

type Stack<T> = {
  top: T;
  rest: Stack<T> | null;
};

const myStack: Stack<number> = {
  top: 1,
  rest: {
    top: 2,
    rest: {
      top: 3,
      rest: null,
    },
  },
};
/**
 * Another good example is the JSON data type.
 * In the recursive type TypeScript playground example,
 * the following code snippet is used to define a JSON type:
 */
namespace ss {
  type Json = string | number | boolean | null | Json[] | { [key: string]: Json };

  const exampleStatusJSON: Json = {
    available: true,
    username: "Jean-loup",
    room: {
      name: "Highcrest",
      // Cannot add functions into the Json type
      // update: () => {}
    },
  };
}
/**
 * Limitation of Recursive Type
 * The recursive type aliases in TypeScript have the limitation of
 * not allowing immediate “self-instantiation”.
 * Below is an example:
 */
namespace ss {
  type Stack<T> = {
    top: T;
    rest: Stack<T> | null;
  };

  type Stack1 = Stack<Stack1>;
}
/**
 * Advanced Usage
 * We can achieve some complex type operations by
 * combining recursive type aliases with other advanced type features (i.e., Conditional Type).
 */
namespace ss {
  type PropertyType<T, Path extends string> = Path extends keyof T ? T[Path] : Path extends `${infer K}.${infer R}` ? (K extends keyof T ? PropertyType<T[K], R> : never) : never;
  type Client = {
    id: number;
    name: string;
    address: {
      id: number;
      suburb: {
        postCode: number;
      };
    };
  };

  type postCode = PropertyType<Client, "address.suburb.postCode">;
  // the postCode type returns "number"
  type noExist = PropertyType<Client, "address.suburb.noExist">;
  // return "never" because the path does not exist
}
