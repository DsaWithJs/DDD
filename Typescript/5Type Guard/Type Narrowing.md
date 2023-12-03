## Common ways to narrow a type

(1) Using the typeof operator, which returns a string that represents the type of the value.

```ts
function printValue(value: string | number) {
  if (typeof value === "string") {
    console.log(`The string is ${value}`);
  } else {
    console.log(`The number is ${value}`);
  }
}

printValue("hello"); // prints "The string is hello"
```

(2) Using instanceof operator, which checks if an object is an instance of a specific class or constructor function.

```ts
class Animal {
  speak() {
    console.log("The animal speaks");
  }
}

class Dog extends Animal {
  bark() {
    console.log("The dog barks");
  }
}

function callSpeakOrBark(animal: Animal) {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.speak();
  }
}

const animal = new Animal();
const dog = new Dog();
callSpeakOrBark(animal); // prints "The animal speaks"
callSpeakOrBark(dog); // prints "The dog barks"
```

(3) Using in operator, which return true if a property name or index is present in an object or array.

```ts
interface Cat {
  name: string;
  meow(): void;
}

interface Dog {
  name: string;
  bark(): void;
}
type Pet = Cat | Dog;
function greet(pet: Pet) {
  if ("meow" in pet) {
    // pet is narrowed to Cat
    pet.meow();
  } else {
    // pet is narrowed to Dog
    pet.bark();
  }
}
```

(4) Using user-defined type guard, which is a function that returns a boolean and has a type predicate as its return type. A type predicate is an expression that takes the form parameterName is Type, where parameterName must be the name of a parameter from the current function signature.

```ts
interface Fish {
  swim(): void;
}

interface Bird {
  fly(): void;
}

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function move(pet: Fish | Bird) {
  if (isFish(pet)) {
    // pet is narrowed to Fish
    pet.swim();
  } else {
    // pet is narrowed to Bird
    pet.fly();
  }
}
```
