/**
 * After TypeScript 2.3, we can specify default types for type parameters in generics.
 * This default type comes into play when using generics
 * without specifying the type parameter directly in the code,
 * and when the type cannot be inferred from the actual value parameter.
 */

/**
 * The default type of a generic parameter is similar to the default value of an ordinary function.
 * The corresponding syntax is very simple, that is, <T=Default Type>.
 */

namespace ss {
  interface Id<T = string> {
    id: T;
  }

  const i0: Id = { id: "bytefer" };
  const i1: Id<number> = { id: 1001 };
}
