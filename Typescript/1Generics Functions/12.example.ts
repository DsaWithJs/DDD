function map<T, U>(array: T[], mapper: (item: T) => U): U[] {
  const result: U[] = [];
  for (const item of array) {
    result.push(mapper(item));
  }
  return result;
}

const numbers = [1, 2, 3, 4, 5];
const doubled = map(numbers, (x) => x * 2);
console.log(doubled); // [2, 4, 6, 8, 10]
