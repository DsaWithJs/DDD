namespace ss {
  type Person = {
    name: string;
    age: number;
  };

  type ReadonlyPerson = {
    readonly [K in keyof Person]: Person[K];
  };

  /*
    type ReadonlyPerson = {
        readonly name: string;
        readonly age: number;
    }
    */

  const person: ReadonlyPerson = {
    name: "John",
    age: 30,
  };

  person.name = "Jane"; // Cannot assign to 'name' because it is a read-only property.
}
