function getIndexForNumbers(num1: number, data: number[]): number {
  return data.findIndex((v) => v === num1);
}
getIndexForNumbers(1, [1, 2, 3]); //0
getIndexForNumbers("a", ["a", "b", "c"]); //TypeError

function getIndexForStrings(str1: string, data: string[]): number {
  return data.findIndex((v) => v === str1);
}

getIndexForStrings("a", ["a", "b", "c"]); //0
getIndexForStrings(1, [1, 2, 3]); //TypeError

function getIndex<T>(value: T, data: T[]): number {
  return data.findIndex((v) => v === value);
}
getIndex<number>(1, [1, 2, 3]); //0
getIndex("john", ["jim", "will", "john"]); //2;

// interface
interface User2<T> {
  name: string;
  regno: T;
  age: number;
}

const user1: User2<string> = {
  name: "John",
  regno: "abc", //String type data
  age: 23,
};

const user2: User2<number> = {
  name: "Will",
  regno: 98762, //Number type data
  age: 23,
};
