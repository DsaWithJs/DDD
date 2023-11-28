namespace ss {
  type Cat = { catName: string };
  type Dog = { dogName: string };
  type BarkOrMeow<T> = T extends Dog ? { barkSound: "Bark!" } : { meowSound: "Meow!" };
  type CatSound = BarkOrMeow<Cat>;
}

/**
 * Distributed conditional types
 */
namespace ss {
  type dateOrNumberOrString<T> = T extends Date ? Date : T extends number ? Date | number : never;
  function compareValues<T extends Date | number>(value1: T, value2: dateOrNumberOrString<T>) {
    // do the comparison
  }
}
/**
 * Conditional type inference
 */
namespace ss {
  type inferFromFieldType<T> = T extends { id: infer U } ? U : never;
}
/**
 * Type inference from function signatures
 */
namespace ss {
  type inferFromFunctionParam<T> = T extends (a: infer F) => void ? F : never;
  type inferFromFunctionReturnType<T> = T extends () => infer F ? F : never;

  function executeFunction<T extends (param: any) => void>(fn: T, arg: inferFromFunctionParam<T>) {
    fn(arg);
  }
  function sampleFunction(param: string) {
    // Do something here!
  }
  executeFunction(sampleFunction, "Hello world");

  executeFunction(sampleFunction, 1);
  //ERROR: Argument of type 'number' is not assignable to parameter of type 'string'
}
