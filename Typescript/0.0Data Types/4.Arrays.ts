namespace ss {
  const numbers: number[] = [1, 2, 3, 4, 5];

  const firstNumber: number = numbers[0]; // Accessing the first element
  numbers[2] = 42; // Modifying the third element

  const names: string[] = ["Alice", "Bob", "Charlie"];

  // Multidimensional Arrays
  const matrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  const element: number = matrix[1][2]; // Accessing the number 6

  // Time Complexity of Array Operations
  const strings: string[] = ["a", "b", "c", "d"];

  strings.push("e"); // O(1)
  strings.pop(); // O(1)
  strings.shift(); // O(n)
  strings.unshift("0"); // O(n)
  strings.splice(1, 0, "1"); // O(n)
}
/**
 * Array<Type>, Type[], and [Type]
 */
/**
 * Array<Type> is a generic type that represents an array of a specific type.
 */
namespace ss {
  let list: Array<string> = ["item1", "item2", "item3"];
}
/**
 * Type[] is a shorthand syntax for Array<Type>.
 */
namespace ss {
  let list: string[] = ["item1", "item2", "item3"];
}
/**
 * However, the [Type] syntax is used to declare a tuple, not an array.
 */
