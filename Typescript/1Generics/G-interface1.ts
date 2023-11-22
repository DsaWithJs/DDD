interface Box<T> {
  value: T;
}

let box: Box<string> = { value: "Hello" };
console.log(box.value); // Output: Hello
