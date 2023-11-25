## typeof

```txt
The typeof operator allows you to check the type of a value or a variable. It's often used in type guards to narrow down types.
```

```ts
Example;

function logMessage(message: string | number) {
  if (typeof message === "string") {
    // Inside this block, TypeScript knows that 'message' is of type 'string'
    console.log(message.toUpperCase());
  } else {
    // Inside this block, TypeScript knows that 'message' is of type 'number'
    console.log(message.toFixed(2));
  }
}
```

## instanceof

```txt
The instanceof operator checks if an object is an instance of a particular class or constructor function.
```

Example

```ts
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

function petSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    // Inside this block, TypeScript knows that 'animal' is of type 'Dog'
    animal.bark();
  } else {
    // Inside this block, TypeScript knows that 'animal' is of type 'Cat'
    animal.meow();
  }
}
```

## Literal Types

```txt
Literal types in TypeScript allow you to specify exact values for a variable.
```

```ts
Example;

function handleStatus(status: "success" | "error" | "pending") {
  // 'status' is narrowed down to the literal types 'success', 'error', or 'pending'
  switch (status) {
    case "success":
      console.log("Operation succeeded!");
      break;
    case "error":
      console.log("An error occurred.");
      break;
    case "pending":
      console.log("Operation is pending.");
      break;
  }
}
```
