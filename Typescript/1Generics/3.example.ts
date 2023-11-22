class Box<T> {
  private value: T;

  constructor(initialValue: T) {
    this.value = initialValue;
  }

  getValue(): T {
    return this.value;
  }
}

const numberBox = new Box(42); // numberBox is of type Box<number>
console.log(numberBox.getValue()); // Output: 42

const stringBox = new Box("Hello, Generics!"); // stringBox is of type Box<string>
console.log(stringBox.getValue()); // Output: "Hello, Generics!"
