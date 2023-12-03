# What is the satisfies operator?

The satisfies operator is a feature in TypeScript that allows developers to check whether an object satisfies a particular type.

This operator is represented by the satisfies keyword and can be used in type assertions to check if an object matches a specific type.

```ts
obj satisfies type;
```

```ts
interface Person {
  name: string;
  age: number;
}

const person: Person = {
  name: "John Doe",
  age: 30,
};

// (person satisfies Person) => true

if (person satisfies Person) {
  console.log("The object satisfies the Person interface");
} else {
  console.log("The object does not satisfy the Person interface");
}
```

## Validating external data

When working with external data sources such as APIs, it is common to receive data in various formats. By using the satisfies operator, we can easily validate whether the received data satisfies the required type.

```ts
interface User {
  id: number;
  name: string;
  email: string;
}

function createUser(data: unknown): User | null {
  if (typeof data === "object" && data !== null && (data satisfies User)) {
    return data as User;
  }
  return null;
}

const userData = {
  id: 1,
  name: "John Doe",
  email: "john.doe@example.com",
};

const user = createUser(userData);

console.log(user); // { id: 1, name: 'John Doe', email: 'john.doe@example.com' }
```

## Type narrowing

```ts
interface Square {
  kind: "square";
  size: number;
}

interface Circle {
  kind: "circle";
  radius: number;
}

type Shape = Square | Circle;

function getArea(shape: Shape): number {
  if (shape.kind === "square") {
    return shape.size ** 2;
  } else if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  } else {
    throw new Error("Invalid shape");
  }
}
```

## This is where the satisfies operator can help us simplify the code

```ts
interface Square {
  kind: "square";
  size: number;
}

interface Circle {
  kind: "circle";
  radius: number;
}

type Shape = Square | Circle;

function getArea(shape: Shape): number {
  if (shape satisfies Square) {
    return shape.size ** 2;
  } else if (shape satisfies Circle) {
    return Math.PI * shape.radius ** 2;
  } else {
    throw new Error("Invalid shape");
  }
}
```
