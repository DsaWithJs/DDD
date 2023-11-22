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
