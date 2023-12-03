## What is type narrowing?

TypeScript uses control flow analysis to narrow types based on conditional statements, loops, truthiness checks. Type narrowing is typically done using conditional statements, such as if statements or switch statements.

```ts
function printLength(strOrArray: string | string[]) {
  if (typeof strOrArray === "string") {
    console.log(strOrArray.length);
  } else {
    console.log(strOrArray.length);
  }
}

printLength("hello"); // prints 5
printLength(["hello", "world"]); // prints 2
```

## Here’s an example using switch statements:

```ts
interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  sideLength: number;
}

type Shape = Circle | Square;

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
    default:
      throw new Error(`Invalid shape: ${shape}`);
  }
}

const circle: Circle = { kind: "circle", radius: 5 };
const square: Square = { kind: "square", sideLength: 4 };

console.log(getArea(circle)); // prints 78.53981633974483
console.log(getArea(square)); // prints 16
```

## Type narrowing vs type casting

Type narrowing is the process of refining a value of multiple types into a single, specific type based on some condition or check.

Type casting is the syntax or operation of converting a value of one type to another type. Type casting can be either widening or narrowing, depending on whether the destination type has a larger or smaller range or precision than the source type.

```ts
let x: any = "hello";
let y = x as string; // cast x to string
```

This is an example of type casting, but not type narrowing, because x is still of type any after the cast. To narrow x to a string, you need to use a type guard:

```ts
let x: any = "hello";
if (typeof x === "string") {
  // x is narrowed to string
  let y = x; // y is string
}
```

One key difference between type narrowing and type casting is that type narrowing is always type-safe, meaning that the type system guarantees that the narrowed type is a valid subtype of the original type. Type casting, on the other hand, is not always type-safe, and can result in runtime errors if the value being cast is not actually of the expected type. For example:

```ts
function padLeft(padding: number | string, input: string) {
  if (typeof padding === "number") {
    // padding is narrowed to number
    return " ".repeat(padding) + input;
  }
  // padding is narrowed to string
  return padding + input;
}

function padRight(padding: number | string, input: string) {
  return input + (padding as string); // cast padding to string
}

let x: number | string = Math.random() < 0.5 ? 10 : "hello";

console.log(padLeft(x, "world")); // works fine
console.log(padRight(x, "world")); // may throw an error
```

The padRight function uses type casting to convert padding to a string regardless of its actual type. This may cause a runtime error if padding is actually a number, as numbers do not have a toString method.

Another difference is that type narrowing can be done without changing the type of the variable or expression, whereas type casting always requires changing the type of the value. This means that type narrowing is generally a more lightweight and less intrusive operation than type casting
