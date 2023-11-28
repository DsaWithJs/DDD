namespace ss {
  function exampleFunction() {
    return {
      name: "Alice",
      age: 30,
    };
  }

  type FunctionReturnType = ReturnType<typeof exampleFunction>;

  // FunctionReturnType is now equivalent to:
  // { name: string; age: number; }
}

namespace ss {
  function greet(name: string): string {
    return `Hello, ${name}!`;
  }

  type Greeting = ReturnType<typeof greet>;
  const greeting: Greeting = "Hello, TypeScript!";
}
