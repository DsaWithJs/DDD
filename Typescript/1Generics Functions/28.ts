namespace ss {
  interface IFooBar {
    foo: string;
    bar: string;
    hello: string;
  }

  function sortByKey<T>(data: Array<T>, key: keyof T) {
    data.sort((a, b) => {
      if (a[key] > b[key]) {
        return 1;
      }
      if (a[key] < b[key]) {
        return -1;
      }
      return 0;
    });
  }

  const fooBars: Array<IFooBar> = [
    {
      foo: "foo1",
      bar: "bar1",
      hello: "hello",
    },
  ];
  // Both fine: foo and bar are properties of IFooBar!
  sortByKey<IFooBar>(fooBars, "foo");
  sortByKey<IFooBar>(fooBars, "bar");
}

namespace ss {
  function print<T, U>(input1: T, input2: U) {
    console.log(input1 + " - " + input2);
  }
  print<string, number>("john", 3456);
  print<string, string>("john", "milton");

  print("john", 3456);
  print("john", "milton");
}
