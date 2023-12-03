## What is the satisfies operator?

The satisfies operator is a type guard that allows you to check if an object satisfies a certain set of criteria.

It is a shorthand way of writing an if statement that checks if an object has certain properties or methods.

```ts
interface Person {
  name: string;
  age: number;
}

function sayHello(person: unknown) {
  if ((person as Person).satisfies({ name: "string" })) {
    console.log(`Hello, ${person.name}!`);
  }
}

const alice = { name: "Alice", age: 30 };
const bob = { age: 25 };

sayHello(alice); // logs "Hello, Alice!"
sayHello(bob); // does not log anything
```

In this example, the sayHello function takes an unknown parameter and checks if it satisfies the Person interface by using the satisfies operator. The satisfies operator takes an object literal that describes the properties and their expected types. If the person object has a name property that is of type string, the function logs a greeting message to the console.


```ts
interface Address {
  street: string;
  city: string;
}

interface Person {
  name: string;
  age: number;
  address: Address;
}

function logAddress(person: unknown) {
  if ((person as Person).satisfies({
    address: {
      street: "string",
      city: "string",
    },
  })) {
    console.log(`Address: ${person.address.street}, ${person.address.city}`);
  }
}

const alice = { name: "Alice", age: 30, address: { street: "123 Main St", city: "Anytown" } };
const bob = { name: "Bob", age: 25, address: { street: 123, city: "Anytown" } };

logAddress(alice); // logs "Address: 123 Main St, Anytown"
logAddress(bob); // does not log anything
```