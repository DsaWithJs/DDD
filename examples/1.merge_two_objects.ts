interface MyObject {
  name: string;
  [key: string]: any; // Allow any other properties
}

function mergeObjectsByName(arr: MyObject[]): MyObject[] {
  const result: Record<string, MyObject> = {};

  for (const obj of arr) {
    if (result[obj.name]) {
      // Merge if an object with the same name already exists in result
      result[obj.name] = { ...result[obj.name], ...obj };
    } else {
      // Add new object to result
      result[obj.name] = obj;
    }
  }

  return Object.values(result);
}

// Example usage
const dataArray: MyObject[] = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Alice", location: "Wonderland" },
];

const mergedArray = mergeObjectsByName(dataArray);
console.log(mergedArray);
