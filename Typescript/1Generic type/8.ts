namespace ss {
  type Data<T extends string | number = number> = { value: T };

  const data1: Data = { value: 3 };
  const data2: Data = { value: "3" }; // error, value has to be a number
  const data3: Data<number> = { value: 3 };
  const data4: Data<string> = { value: "3" };
}

namespace ss {
  interface Person {
    name: string;
    age: number;
    location: string;
  }

  type Getters<T> = {
    [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
  };

  type LazyPerson = Getters<Person>;
}

namespace ss {
  function first<T extends [any, any]>(pair: T): T extends [infer U, infer U] ? U : any {
    return pair[0];
  }

  first([3, "foo"]); // Type will be string | number
  first([0, 0]); // Type will be number
}
