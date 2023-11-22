(() => {
  function logArrayLength<T>(arr: T[]): T[] {
    console.log(`Array length: ${arr.length}`);
    return arr;
  }
  const stringArray = logArrayLength(["a", "b", "c"]); // Returns string[]
  const numberArray = logArrayLength([1, 2, 3]); // Returns number[]
})();

(() => {
  interface Box<T> {
    value: T;
  }

  let box: Box<number> = { value: 42 };
  console.log(box.value); // Output: 42
})();
