function isString(value: any): value is string {
  return typeof value === "string";
}

/*
Here, value is string is the type predicate, 
telling TypeScript that if isString returns true, 
the value argument is of type string. 
This allows the compiler to narrow down the variable type 
when using this function as a type guard.
*/

/**
 * You can also create functions that return type predicates,
 * explicitly indicating the type of a value.
 */
namespace ss {
  function isDog(animal: Animal): animal is Dog {
    return typeof (animal as Dog).bark === "function";
  }
  if (isDog(someAnimal)) {
    someAnimal.bark(); // valid
  }
}
