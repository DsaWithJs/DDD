namespace ss {
  function printValue<T extends number | string>(arg: T): void {
    console.log(arg);
  }

  printValue("Rabi Siddique"); // Rabi Siddique
  printValue(24); // 24
  printValue(true); // Compiler error: Argument of type 'boolean' is not assignable to parameter of type 'string | number'.
}
namespace ss {
  interface Person {
    name: string;
    age: number;
  }

  function logPerson<T extends Person>(person: T): void {
    console.log(`Name: ${person.name}, Age: ${person.age}`);
  }

  const person: Person = {
    name: "Rabi Siddique",
    age: 25,
  };

  logPerson(person); // "Name: Rabi Siddique, Age: 25"
}

namespace ss {
  interface argTypes {
    name: string;
  }

  function getName<T extends argTypes>(arg: T): string {
    return arg.name;
  }

  getName({ name: "author2000" });
}
