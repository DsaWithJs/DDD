/**
 * First, let’s look at an example where constraints to the generics is not required:
 */
namespace ss {
  function returnInput<T>(input: T): T {
    console.log(input);
    return input;
  }

  returnInput("hello world");
  // log: "hello world"
  // return: "hello world"
  returnInput(123);
  // log: 123
  // return: 123
  returnInput({ name: "peter" });
  // log: {"name": "peter"}
  // return: {name: "peter"}
}
/**
 * The function returnInput logs and returns the argument whatever type it is.
 * It works fine because the function does not use any specific properties of the input.
 * In real world, this is not always the case.
 */
namespace ss {
  interface Person {
    name: string;
  }

  function introduce(target: Person) {
    console.log(target.name);
    return target;
  }

  const newColleague = {
    name: "Jason",
    age: 29,
  };

  const target = introduce(newColleague);

  console.log(target.age);
  // Property 'age' does not exist on type 'Person'.
}
/**
 * The function introduce logs the name property of the argument and returns the argument.
 * The interface Person ensures that the argument has a name property but it also
 * sets its type to Person .
 * Even though newColleague has also property age ,
 * the type system believes that the return type of introduce is Person
 * which does not have the property age and therefore throws an error.
 */
/**
 * To fix this problem, we will use generics to type the argument and the return value.
 * As the function will log the property name of the argument,
 * we need to constrain the generics to accept only types with a property name .
 */
// Let’s see how we can achieve this with the extends keyword:

namespace ss {
  function introduce<T extends { name: string }>(target: T) {
    console.log(target.name);
    return target;
  }

  const newColleague = {
    name: "Jason",
    age: 29,
  };

  const target = introduce(newColleague);
  // target is of type { name: string; age: number; }
  // log: "Jason"

  console.log(target.age);
  // log: 29

  introduce("hello");
  // Argument of type 'string' is not assignable to parameter of type '{ name: string; }'
}
/**
 * By using the extends keyword,
 * the generics now accepts only objects which satisfy {name: string} and
 * therefore ensures that the argument has a property name .
 */
namespace ss {
  interface HasName {
    name: string;
  }

  interface HasAge {
    age: number;
  }

  function introduce<T extends HasName & HasAge>(target: T) {
    console.log(target.name);
    return target;
  }

  const oldColleague = {
    name: "Peter",
  };

  introduce(oldColleague);
  // Argument of type '{ name: string; }' is not assignable to parameter of type 'HasName & HasAge'.
  // Property 'age' is missing in type '{ name: string; }' but required in type 'HasAge'.
}
/**
 * You can also add multiple constraints to the generics by extending intersection types.
 * The example above illustrates that the argument has to satisfy both the requirements of interface HasName and HasAge .
 */

/**
 * Conclusion
Using extends keyword to add constraints to your generics can ensure the generics has what properties you need. 
This can help you write type safer code.
 */
