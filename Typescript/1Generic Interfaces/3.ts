/**
 * If you are using TypeScript, you can use Generics with Interfaces to create
 * reusable interfaces that can work with different types.
 * The type parameter acts as a placeholder for the actual type
 * that will be used with the interface.
 */
namespace ss {
  interface Box<T> {
    value: T;
  }
}
/**
 * In this example, the Box interface has a generic type parameter T.
 * The value property of the Boxinterface is of type T,
 * which means that it can hold any value of any type
 */
//To use this interface, you can specify the actual type of data as an argument.
namespace ss {
  interface Box<T> {
    value: T;
  }
  const stringBox: Box<string> = { value: "Rabi Siddique" };
  const numberBox: Box<number> = { value: 27 };
}
/**
 * You can also use the generic type parameter to create interfaces
 * with multiple properties of the same type. Here’s an example:
 */
namespace ss {
  interface Pair<T> {
    first: T;
    second: T;
  }

  const stringPair: Pair<string> = { first: "Rabi", second: "Siddique" };
  const numberPair: Pair<number> = { first: 27, second: 24 };
}
