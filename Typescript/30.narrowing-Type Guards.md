https://www.typescriptlang.org/docs/handbook/2/narrowing.html

```txt
“narrowing” refers to the process of refining or restricting the type of a variable within a certain code block. It involves using conditional statements or type guards to provide more specific type information to TypeScript’s static type checker."

```

```txt
1. Union Types: Often, variables can have more than one possible type, represented as a union type. For instance, a variable might be of type `string | number`, meaning it can be either a string or a number.

2. Type Guards: To narrow down the type within a block of code, you can use type guards. Common type guards include `typeof`, `instanceof`, or custom functions that check certain conditions. For example:

```

```ts
let value: string | number = "hello";
if (typeof value === "string") {
  // 'value' is now narrowed down to type 'string' within this block
  console.log(value.toUpperCase());
} else {
  // 'value' is treated as type 'number' here
  console.log(value.toFixed(2));
}
```

```txt
3. Custom Type Guards: You can create your own functions to act as type guards. For instance:
```

```ts
function isString(val: any): val is string {
  return typeof val === "string";
}
let value: string | number = "hello";
if (isString(value)) {
  // 'value' is now known to be a string
  console.log(value.toUpperCase());
} else {
  // 'value' is considered a number in this block
  console.log(value.toFixed(2));
}
```

```txt
One can use instanceof too.
```

```ts
class Car {
  model: string;

  constructor(model: string) {
    this.model = model;
  }

  startEngine() {
    console.log(`Engine started for ${this.model}!`);
  }
}

class Bicycle {
  type: string;

  constructor(type: string) {
    this.type = type;
  }

  pedal() {
    console.log(`Pedaling on my ${this.type} bike!`);
  }
}

function startVehicle(vehicle: Car | Bicycle) {
  if (vehicle instanceof Car) {
    // 'vehicle' is now treated as type 'Car' in this block
    vehicle.startEngine();
  } else {
    // 'vehicle' is considered a 'Bicycle' here
    vehicle.pedal();
  }
}

const myCar = new Car("SUV");
const myBike = new Bicycle("Mountain");

startVehicle(myCar); // Output: Engine started for SUV!
startVehicle(myBike); // Output: Pedaling on my Mountain bike!
```

```txt
This narrowing process allows TypeScript to provide more accurate and specific type information within different branches of your code, leading to enhanced type safety and improved development experience. It’s particularly useful when dealing with variables that could have multiple types, and you want to perform operations based on their actual type within specific code blocks.

```

```txt
Type guarding in TypeScript is a way to narrow the scope of a variable or parameter type within a specific block of code. They allow you to distinguish between different types and access properties or methods specific to those types, promoting type safety and reducing the possibility of runtime errors.
```

```ts
function isString(value: any): value is string {
  return typeof value === "string";
}

function processValue(value: string | number) {
  if (isString(value)) {
    console.log(`The length of the string is: ${value.length}`);
  } else {
    console.log(`The square of the number is: ${value * value}`);
  }
}

processValue("hello"); // Output: The length of the string is: 5
processValue(42); // Output: The square of the number is: 1764
```
