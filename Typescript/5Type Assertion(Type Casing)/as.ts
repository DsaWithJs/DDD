/**
 *
 * In TypeScript, the as keyword is used for type assertion,
 *  which allows us to manually set the data type of a variable and prevent the compiler from inferring it on its own.
 */
/**
 * In TypeScript, the as keyword is utilized for creating type assertions.
 * This allows an object to be considered as a different type than what the compiler originally inferred it to be.
 * To implement the as keyword in TypeScript,
 * a specific syntax is used.
 */
namespace ss {
  let test: unknown = "hello, world";
  console.log(test);

  let len: number = (test as string).length;
  console.log(len);

  //This will be the output:

  //hello, world
  11; // the length of the string above
}

/**
 * auto-completion and suggestions
 */
namespace ss {
  interface employee {
    n: string;
    id: number;
  }

  function getEmployee() {
    let name: string = "Joe";
    return {
      n: name,
      id: 1,
    };
  }

  let firstEmployee = getEmployee() as employee;
}

/**
 * In this example, we are using type assertion to link the user object with the “employee” type.
 * This improves the development experience by providing better auto-completion and suggestions.
 * Running the code in your editor will provide a clearer explanation of how this works.
 */

/**
 * Utilize the “as” keyword for type predicates in TypeScript.
 */
namespace ss {
  interface Employee1 {
    salary(): void;
  }

  interface Employee2 {
    benefits(): void;
  }

  function employee1OrEmployee2(): Employee1 | Employee2 {
    let employee1: Employee1 = {
      salary() {
        console.log("salary");
      },
    };
    return employee1;
  }

  function isEmployee1(person: Employee1 | Employee2): person is Employee1 {
    return (person as Employee1).salary !== undefined;
  }

  let person = employee1OrEmployee2();
  if (isEmployee1(person)) {
    (person as Employee1).salary();
  }
}
