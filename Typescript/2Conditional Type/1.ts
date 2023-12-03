/**
 * The Basic Syntax of Conditional Types
 * T extends U ? X : Y
 */

namespace ss {
  type Message<T> = T extends string ? "It's a string!" : "Not a string.";

  type message = Message<"hi">;
}

/**
 * API client
 */
namespace ss {
  type ApiResponse<T> = T extends { success: true } ? { data: T } : { error: string };
}

namespace ss {
  type IsString<T> = T extends string ? true : false;
  type I0 = IsString<number>; // false
  type I1 = IsString<"abc">; // true
  type I2 = IsString<any>; // boolean
  type I3 = IsString<never>; // never
}

/**
 *  Defining a custom ReturnType function
 */
namespace ss{
  type CustomReturnType<T> = T extends (…args: any[]) => infer R ? R : never;
}

/**
 * Example 2: Creating a type for Promise resolution
 */
namespace ss{
  type UnwrapPromise<T> = T extends Promise<infer R> ? R : T;
}

/**
 * Conditional Types with Union Types
 * Example: Excluding specific types from a union
 */
namespace ss{
  type ExcludeType<T, U> = T extends U ? never : T;
type NumbersOrStringsOrBooleans = number | string | boolean;

type JustNumbersOrStrings = ExcludeType<NumbersOrStringsOrBooleans, boolean>;
// Result: number | string
}
/**
 * Distributive Conditional Types
 * Example: Mapping types with conditional types
 */
namespace ss{
  type Nullable<T> = T extends any ? T | null : never;
type NumbersOrStrings = number | string;
type NullableNumbersOrStrings = Nullable<NumbersOrStrings>; // Result: number | string | null
}

/**
 * Combining Conditional Types with Mapped Types
 * Example: Making certain properties of an interface undefined
 */
namespace ss{
  type AllowUndefined<T, K extends keyof T> = {
    [P in keyof T]: P extends K ? T[P] | undefined : T[P];
   };
   
   interface User {
    id: number;
    name: string;
    email: string;
   }
   
   type PartialUser = AllowUndefined<User, "name" | "email">;
   // Result: { id: number; name: string | undefined; email: string | undefined; }
}
/**
 * Conditional Types with `keyof` and indexed access types
 * Example: Creating a type for a subset of keys based on value types
 */
namespace ss{
  type KeysOfType<T, U> = {
    [K in keyof T]: T[K] extends U ? K : never;
   }[keyof T];
   
   interface Person {
    name: string;
    age: number;
    hasPets: boolean;
   }
   type name = KeysOfType<Person, string>;
   // Result: "name"
}