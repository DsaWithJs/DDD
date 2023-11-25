namespace ss {
  type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
  type Fruit = "apple" | "orange" | "banana";
  type IntersectedFruit = UnionToIntersection<Fruit>; // "apple" & "orange" & "banana"
}

namespace ss {
  const withFilter =
    <T extends unknown>(filterFunction: (data: T) => boolean) =>
    (data: T[]) => {
      return data.filter(filterFunction);
    };

  const numbers = [1, 2, 3, 4, 5];
  const evenNumbersFilter = (num: number) => num % 2 === 0;
  const getEvenNumbers = withFilter<number>(evenNumbersFilter);

  const evenNumbers = getEvenNumbers(numbers);
  // Output: [2, 4]
}

namespace ss {
  function getFirstElement<T>(arr: T[]): T | undefined {
    return arr.length ? arr[0] : undefined;
  }
  const numbers = [1, 2, 3, 4, 5];
  const firstNumber = getFirstElement(numbers); // Output: 1

  const strings = ["apple", "banana", "orange"];
  const firstString = getFirstElement(strings); // Output: "apple"
}
