namespace ss {
  interface MyObject {
    [key: string]: number;
  }
  const obj: MyObject = {
    foo: 1,
    bar: 2,
    baz: 3,
  };

  console.log(obj["foo"]); // Output: 1
  console.log(obj["qux"]); // Output: undefined
}

namespace ss {
  interface MyObject {
    [key: string]: number | string;
  }

  const obj: MyObject = {
    foo: 1,
    bar: "hello",
    baz: 3,
  };

  console.log(obj["foo"]); // Output: 1
  console.log(obj["bar"]); // Output: 'hello'
  console.log(obj["baz"]); // Output: 3
}
