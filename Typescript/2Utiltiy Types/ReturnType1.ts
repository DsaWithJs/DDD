namespace ss {
  function f1(): { a: number; b: string } {
    return { a: 2, b: "" };
  }
  type T0 = ReturnType<() => string>;
  // ReturnType takes a function type as its parameter and returns the type of the value it returns, T0 is inferred as string

  type T1 = ReturnType<(s: string) => void>;
  // The parameter type that the function recieves is irrelevant, T1 is inferred as void

  type T2 = ReturnType<<T>() => T>;
  // Since T is not constrained or specified, the return type of the generic function is inferred as unknown

  type T3 = ReturnType<<T extends U, U extends number[]>() => T>;
  // The function type represents a generic function that takes a type T that extends U, where U is an array of numbers.
  // The function returns a value of type T that is inferred as number[], so T3 is number[]

  type T4 = ReturnType<typeof f1>;
  // The typeof f1 retrieves the type of the function f1, which is { a: number; b: string }.
  // T4 represents the return type of f1, which is { a: number; b: string }
}

namespace ss {
  type T5 = ReturnType<any>;
  // The any type indicates that the return type can be any type.

  type T6 = ReturnType<never>;
  // The never type represents a type that never has a value.

  type T7 = ReturnType<string>;
  // Type 'string' does not satisfy the constraint '(...args: any) => any'.

  type T8 = ReturnType<Function>;
  // Type 'Function' does not satisfy the constraint '(...args: any) => any'
}
