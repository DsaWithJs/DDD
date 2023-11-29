In TypeScript, both never and void are used to represent the absence of a value, but they have different meanings and uses.

## void

void is a type that represents the absence of a value, typically used for functions that do not return a value. For example:

```ts
function printMessage(message: string): void {
  console.log(message);
}
```

In this example, the printMessage() function takes a string argument and logs it to the console, but it does not return a value. The void type is used to indicate that the function does not return a value.

never, on the other hand, is a type that represents a value that never occurs. It is typically used in functions that throw errors or have infinite loops. For example:

```ts
function throwError(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {
    // do something
  }
}
```

In these examples, the functions do not return a value because they either throw an error or have an infinite loop. The never type is used to indicate that these functions do not return a value that can be used.

For example, the following code is valid because void can be used as the return type for a function that returns undefined:

```ts
function getUndefined(): undefined {
  return undefined;
}

let u: void = getUndefined();
```

On the other hand, the following code is valid because never can be used as a subtype of all types:

```ts
function throwError(message: string): never {
  throw new Error(message);
}

let n: number = throwError("Error occurred");
```

In summary, void represents the absence of a value for functions that do not return a value, while never represents a value that never occurs for functions that throw errors or have infinite loops. void can be used as the return type for functions that return undefined, while never can be used as a subtype of all types.
