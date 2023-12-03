/**
 * Practical Applications of the never Type
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
  function assertNever(value: never): never {
    throw new Error(`Unexpected value: ${value}`);
  }

  function getArea(shape: Shape): number {
    switch (shape.kind) {
      case "circle":
        return Math.PI * shape.radius ** 2;
      case "square":
        return shape.sideLength ** 2;
      default:
        return assertNever(shape);
    }
  }
}

/**
 * Unreachable Code Detection
 */
namespace ss {
  function unreachableCodeExample(value: string | number): number {
    if (typeof value === "string") {
      return value.length;
    } else if (typeof value === "number") {
      return value;
    } else {
      const _: never = value;
      throw new Error("This code should never be executed");
    }
  }
}
/**
 * Type Narrowing
 * The never type can be used in conjunction with type guards to perform type narrowing
 * and ensure that a value has been properly discriminated:
 */
namespace ss {
  type FooOrBar = "foo" | "bar";
  function doSomething(value: FooOrBar): void {
    if (value === "foo") {
      // value is narrowed to "foo"
    } else {
      const _: never = value; // If this line does not produce an error, value must be "bar"
      // value is narrowed to "bar"
    }
  }
}

/**
 * never in Conditional Types
 */
namespace ss {
  type ExcludeNever<T> = T extends never ? never : T;
  type WithoutNever = ExcludeNever<string | number | never>; // Result: string | number
}
/**
 * never in Union and Intersection Types
 */
namespace ss {
  type Impossible = string & never; // Result: never
  type EmptyUnion = string | never; // Result: string
}
/**
 * never as a Return Type
 */
namespace ss {
  function throwError(message: string): never {
    throw new Error(message);
  }
  function infiniteLoop(): never {
    while (true) {}
  }
}
