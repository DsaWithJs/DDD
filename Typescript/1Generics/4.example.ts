namespace ss {
  export interface Person {
    name: String;
  }

  export const convertToValueArray = <T>(value: T): Array<T> => {
    return [value];
  };

  const person: Person = {
    name: "Mahesh",
  };

  const firstPerson = convertToValueArray(person)[0];
}
