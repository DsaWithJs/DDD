// Define an interface for the objects
interface Person {
  name: string;
  age: number;
}

// Array of objects
const objects: Person[] = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Eve", age: 35 },
];

// Array of strings defining the order
const order: string[] = ["Eve", "Alice", "Bob"];

// Function to sort the objects array based on the order array
function sortByOrder(objects: Person[], order: string[]): Person[] {
  return objects.sort((a, b) => order.indexOf(a.name) - order.indexOf(b.name));
}

// Call the function and log the result
const sortedObjects = sortByOrder(objects, order);
console.log(sortedObjects);
