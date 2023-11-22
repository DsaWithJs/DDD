// Suppose you want to create a function that swaps the values of two variables of any type
function swap<T>(a: T, b: T): [T, T] {
  return [b, a];
}

const swapped = swap(5, 10); // swapped is of type [number, number]
console.log(swapped); // Output: [10, 5]

const names2 = swap("Alice", "Bob"); // names is of type [string, string]
console.log(names2); // Output: ["Bob", "Alice"]
