/*
 Below is a TypeScript Generic function, 
 where the sole requirement is that the data object must have a property named id 
 and its value must be of type string.
 Other properties are acceptable as long as the id property is present.

 By incorporating the NoInfer type into your TypeScript code, 
 you can enforce and require specific types for generic inferred type parameters.
This approach empowers developers to write more predictable 
and type-safe code while maintaining the flexibility offered by generics.
*/

namespace one {
  interface ICommon {
    id: string;
  }

  const func = <T extends ICommon>(data: T): void => {
    // Your code here
  };

  // All three of these arguments satisfy the ICommon interface.
  func({ id: "someValue", one: "oneValue" });
  func({ id: "someValue", two: 2 });
  func({ id: "someValue" });
}

//..........................
namespace two {
  interface ICommon {
    id: string;
  }
  interface IDataOne {
    id: string;
    one: string;
  }
  interface IDataTwo {
    id: string;
    two: number;
  }

  export const func = <T extends ICommon = never>(data: NoInfer<T>): void => {
    // Your code here
  };

  // Provide the type explicitly satisfy the TypeScript requirement.
  func<IDataOne>({ id: "someValue", one: "oneValue" });
  func<IDataTwo>({ id: "someValue", two: 2 });

  // Results in a TypeScript error because the type is not provided.
  func({ id: "someValue" });
}
