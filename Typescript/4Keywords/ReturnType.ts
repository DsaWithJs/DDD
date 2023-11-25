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
