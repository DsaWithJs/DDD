namespace ss {
  interface Identities<V, M> {
    value: V;
    message: M;
  }

  function identity<T, U>(value: T, message: U): Identities<T, U> {
    console.log(value + ": " + typeof value);
    console.log(message + ": " + typeof message);
    let identities: Identities<T, U> = {
      value,
      message,
    };
    return identities;
  }

  console.log(identity(2023, "bytefer"));
  /*
    2023: number
    bytefer: string
    { "value": 2023, "message": "bytefer" }
    */
}

namespace ss {
  interface GenericInterface<U> {
    value: U;
    getIdentity: () => U;
  }

  class IdentityClass<T> implements GenericInterface<T> {
    value: T;

    constructor(value: T) {
      this.value = value;
    }

    getIdentity(): T {
      return this.value;
    }
  }

  const myNumberClass = new IdentityClass<number>(2023);
  console.log(myNumberClass.getIdentity()); // 2023

  const myStringClass = new IdentityClass<string>("bytefer");
  console.log(myStringClass.getIdentity()); // bytefer
}
