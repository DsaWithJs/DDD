/**
 * Infer
 */
/**
 * The infer keyword is a unique feature in TypeScript that plays a significant role in conditional types
 * and type inference.
 * It is used within conditional types to infer a type that is used elsewhere in the condition.
 */

/**
 * Let’s illustrate this with an example. Suppose we want to create a type that extracts the return type of a function.
 * Here’s how we can achieve this with the infer keyword:
 */
namespace ss {
  type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;
}

/**
 * ReturnType<T> is a conditional type that checks if T is a function type.
 * If it is, it infers the return type of that function and captures it as R.
 * Then it uses R as the type for the conditional type.
 * So, if we use ReturnType with a function, it will give us the return type of that function
 */
namespace ss {
  type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

  type Func = () => number;
  type Num = ReturnType<Func>; // Num is inferred as number
}

/**
 * The infer keyword significantly contributes to making TypeScript's type system more flexible and powerful. 
 * It allows us to infer types within our conditional types, leading to more expressive and dynamic type manipulations.
 */