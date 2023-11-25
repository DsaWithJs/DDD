/**
 * Type narrowing and type guards are closely related concepts in TypeScript,
 * but they serve slightly different purposes in the type system.
 */
/**
 * Type Narrowing(if,switch,for,while,typeof,instanceof)

 * How it Works: Type narrowing occurs automatically as a result of control flow analysis.
 * For example, when you use conditionals (if, switch),
 * loops (for, while),
 * and type checks (typeof, instanceof),
 */
namespace ss {
  function process(value: number | string) {
    if (typeof value === "string") {
      // 'value' is narrowed to 'string' within this block
      console.log(value.toUpperCase());
    } else {
      // 'value' is narrowed to 'number' here
      console.log(value.toFixed(2));
    }
  }
}
/**
 * Type Guards(is,in,typeof,instanceof)
 * These functions use type predicates, which are expressions like parameterName is Type.
 * Built-in Type Guards: JavaScript operators like typeof and instanceof,
 * TypeScript constructs like in, are commonly used as type guards.
 */
namespace ss {
  function isString(value: any): value is string {
    return typeof value === "string";
  }

  function process(value: number | string) {
    if (isString(value)) {
      // 'value' is narrowed to 'string' by the type guard
      console.log(value.toUpperCase());
    } else {
      // 'value' is narrowed to 'number' here
      console.log(value.toFixed(2));
    }
  }
}
