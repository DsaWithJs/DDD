/**
 * Using Generic Types in Interface
 */
namespace ss {
  interface User<N, A> {
    name: N;
    age: A;
  }

  const kudret: User<string, number> = { name: "Kudret", age: 23 };
}

namespace ss {
  interface KeyValue<T, U> {
    key: T;
    value: U;
  }

  let obj: KeyValue<string, number> = { key: "TWO", value: 2 };
  //= {key: "TWO", value: 2}
}
