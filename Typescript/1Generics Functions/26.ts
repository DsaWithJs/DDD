namespace ss {
  function getPropertyValue<T, B extends keyof T>(target: T, key: B) {
    return target[key];
  }
  const myObj = {
    id: "0",
    name: "John Doe",
    age: 19,
  };
  getPropertyValue(myObj, "id");
  getPropertyValue(myObj, SSN);
  // ERROR: Cannot find name 'SSN'.
}

namespace ss {
  const identityStringFn = (arg: string): string => arg;
  const identityNumberFn = (arg: number): number => arg;
  const identityBooleanFn = (arg: boolean): boolean => arg;

  const identity = <T,>(arg: T): T => arg;
  identity<string>("someString"); //would return 'someString'
  identity<number>(12); //would return 12
  identity<boolean>(false); //would return false
}
/**
 * By doing this, we are telling the TypeScript compiler “hey, 
 * the argument type is of a parameter type, T, 
 * and you’ll find out what T is at compile time”.
 */
