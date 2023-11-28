/**
 * Sometimes it is useful to be able to provide more information on which type a variable belongs to.
 */
namespace ss {
  // Here we have a function that only accepts
  // our S, M, L arguments
  function printSize(size: "S" | "M" | "L") {
    console.log(size);
  }

  // Here we create a string with a valid value
  const sizeString: string = "M";

  // Now we try and print the string. Unless we
  // assert it is of the correct type the compiler
  // will recognise it as a string and throw an error!
  printSize(sizeString);
  printSize(sizeString as "M");
}

namespace ss {
  // Here we declare a type which maps to a function taking
  // in a string and returning nothing
  type ExampleFnType = (a: string) => void;

  // Here we use the type and declare a function which takes
  // in a string and prints it
  const exampleFn: ExampleFnType = (a) => console.log(a);

  // Now we pass to something expecting an argument which is a
  // function taking in a string and returning void. It then executes
  // the function with the string 'Hello everyone!'
  function executeFunction(fn: (a: string) => void) {
    fn("Hello everyone!");
  }

  // This prints 'Hello everyone!'. Notice how the structure of the
  // ExampleFnType is the same as the method signature, and so this
  // is a valid call
  executeFunction(exampleFn);
}
