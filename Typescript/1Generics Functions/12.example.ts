namespace ss {
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
}

namespace ss {
  function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }

  const person = {
    name: "John",
    age: 30,
  };

  // Works fine
  const personName = getProperty(person, "name");
  // Works fine
  const personAge = getProperty(person, "age");
  // Error: Argument of type '"height"' is not assignable to parameter of type '"name" | "age"'.
  const personHeight = getProperty(person, "height");
}
