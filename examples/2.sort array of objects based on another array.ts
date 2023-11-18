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
  { name: "Charlie", age: 28 }, // Not in the order array
];

// Array of strings defining the order
const order: string[] = ["Eve", "Alice", "Bob"];

// Function to sort the objects array based on the order array
function sortByOrder(objects: Person[], order: string[]): Person[] {
  return objects.sort((a, b) => {
    const indexA = order.indexOf(a.name);
    const indexB = order.indexOf(b.name);

    if (indexA === -1) return 1; // Place 'a' at the end if not found
    if (indexB === -1) return -1; // Place 'b' at the end if not found

    return indexA - indexB;
  });
}

// Call the function and log the result
const sortedObjects = sortByOrder(objects, order);
console.log(sortedObjects);
