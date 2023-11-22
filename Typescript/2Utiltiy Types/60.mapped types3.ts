type Optional<T> = { [P in keyof T]?: T[P] | null };

interface Person {
  name: string;
  age: number;
}

const optionalPerson: Optional<Person> = {
  name: "Alice",
  age: null,
};

type IsArray<T> = T extends Array<any> ? true : false;

const isArrayResult: IsArray<number[]> = true; // It's an array, so true
const isNotArrayResult: IsArray<number> = false; // It's not an array, so false
