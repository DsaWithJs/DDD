/**
 * The “Infer” Keyword
 * It was once a big mystery to me,
 * but I understood it better after studying a string example.
 */

namespace ss {
  type Example<T> = T extends `${infer R}` ? R : never;

  // typescript will make it never type,
  // as it doesn't extend "..." (string)
  type NotString = Example<1>;

  // it will "string" type. "Infer" does infer the value of generic
  type ExactString = Example<"string">;
}
/**
 *  Keep in mind that, the infer keyword can only be used in conditional
 * types after extends keyword.
 */
namespace ss {
  // First, let's declare type with a generic
  // type OurReturnType<T>

  // Now, we need to write the condition part. Pay attention to infer
  // type OurReturnType<T> = T extends (...args: any) => infer R

  // And the final step is to add branches to the condition
  type OurReturnType<T> = T extends (...args: any) => infer R ? R : T;

  type StringReturn = () => string;
  type NumberReturn = () => number;
  type BooleanReturn = () => boolean;

  // OurReturnType<StringReturn> // string
  // OurReturnType<NumberReturn> // number
  // OurReturnType<BooleanReturn> // boolean
}
