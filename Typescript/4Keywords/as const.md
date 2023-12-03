Before TypeScript 5.0, its inference would usually choose a more general type, e.g. infer ["Alice", "Bob", "Eve"] to string[], if you want a more specific type, then must add as const for it:

```ts
// string[]
const a = ["Alice", "Bob", "Eve"];

// readonly ["Alice", "Bob", "Eve"]
const b = ["Alice", "Bob", "Eve"] as const;
```

## There are two ways to perform type assertions in TypeScript:

```ts
Using the angle bracket syntax:

let myVariable: any = "hello world"
let myString: string = <string> myVariable

In this example, we use the angle bracket syntax to assert that the value of myVariable is a string.

```

```ts

Using the as keyword:

let myVariable: any = "hello world"
let myString: string = myVariable as string

In this example, we use the “as” keyword to assert that the value of myVariable is a string.
```

```txt
Type assertions can be helpful in situations where TypeScript cannot infer the type of a value, or when working with values that have a general type, such as the any type. However, it is crucial to use type assertions carefully because they can potentially cause type errors if used improperly.
```

## as const

```ts
const myTuple = ["hello", "world"] as const;
// Type of myTuple is: readonly ["hello", "world"]
```

```txt
The as const syntax is particularly useful when working with objects or arrays that are intended to be constant and should not be modified. It allows us to create a more specific, immutable type for these values, which can help catch potential bugs at compile-time.
```
