/**
 * Parameters<FType>
 *
 * Parameters<FType> is a utility type that extracts the parameter types of a function type.
 * This is useful when you need to obtain the parameters of a function as a tuple type.
 */
namespace ss {
  function greet(name: string, age: number): string {
    return `Hello, ${name}! You are ${age} years old.`;
  }
}
/**
 * We can use the Parameters type to obtain the parameter
 * types of the greet function as a tuple.
 */
namespace ss {
  function greet(name: string, age: number): string {
    return `Hello, ${name}! You are ${age} years old.`;
  }

  type GreetParameters = Parameters<typeof greet>;

  function callGreetWithArray(args: GreetParameters): string {
    return greet(...args);
  }

  const greeting = callGreetWithArray(["Alice", 30]);
  console.log(greeting); // Hello, Alice! You are 30 years old.
}
/**
 * we use Parameters<typeof greet> to extract the parameter
 * types of the greet function and pass them as an array to another function callGreetWithArray,
 * which then calls the original greet function with the array values.
 */
