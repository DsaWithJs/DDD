## What is readonly?

The readonly keyword in TypeScript is used to indicate that a property or variable cannot be modified after it has been initialized.

```ts
interface Person {
  readonly name: string;
}

let person: Person = { name: "John" };
// This line will cause a compile-time error
person.name = "Jack";
```

## What is a const assertion?

A const assertion in TypeScript is used to indicate that a variable should be treated as a constant at compile-time. This means that the value of the variable cannot be changed after it has been initialized.

```ts
const a = 10 as const;

// This line will cause a compile-time error
a = 20;
```

In this example, we use the as const syntax to indicate that the variable a should be treated as a constant. We then attempt to change the value of a, but we receive a compile-time error because the variable is const.

## What is the difference between readonly and const assertions?

While both readonly and const assertions can be used to indicate that a value should not be modified,

The key difference between readonly and const assertions is that readonly is used for properties and variables that are part of an object or interface, while const assertions are used for standalone variables.

Additionally, readonly properties and variables can still be modified at runtime using JavaScript's mutation methods, while const variables cannot be modified at all.
