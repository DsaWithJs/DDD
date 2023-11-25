```txt
The never type in TypeScript represents values that never occur. It is typically used to indicate that a function will never return or that a variable can never have a value.

```

### Throwing Errors

```txt
The most common use case for the never type is in functions that throw exceptions and do not return normally. By annotating the return type of such functions as never, you explicitly communicate that the function will not produce a result but will throw an error. Here's an example:
```

```ts
function throwError(message: string): never {
  throw new Error(message);
}
```

### Infinite Loops

```ts
function runForever(): never {
  while (true) {
    // Some code that prevents the loop from ending
  }
}
```

### Type Guards

```txt
The never type can also be used in TypeScript's control flow analysis, especially in type guards. It helps narrow down the types of variables within complex conditional blocks.
```

```ts
function checkType(value: string | number): void {
    if (typeof value === “string”) {
        // ‘value’ is narrowed to type ‘string’
    } else if (typeof value === “number”) {
        // ‘value’ is narrowed to type ‘number’
    } else {
        const exhaustCheck: never = value;
        // The ‘exhaustCheck’ variable can only be assigned the type ‘never’ because
        // all possible types for ‘value’ have been exhausted.
    }
}
```

```txt
The never type is restrictive in that it prevents the assignment of any values to it.
```

```ts
let myNever: never;
myNever = 3; //ERROR
let myNum: number = myNever; //ERROR
let myStr: string = myNever; //ERROR
myNever = "1234"; //ERROR
```
