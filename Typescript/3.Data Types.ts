/***
1. All TypeScript Types
  1.  boolean
  2.  number
  3.  string
  4.  void
  5.  undefined
  6.  null
  7.  any
  8.  object
  9.  unknown
  10. never
 */

/** number: Represents numeric values, including integers and floating-point 
numbers.
*/
let age: number = 30;

/** string: Represents textual data, such as words, sentences or characters*/
let name: string = "Celine";

/** boolean: Represents true or false values. */
let isLoading: boolean = false;

/** array: Represents a collection of values of the same type. */
let numbers: number[] = [1, 2, 3];

/** tuple: Represents an array with a fixed number of elements, each with a 
known type.
*/
let pair: [string, number] = ["Celine", 30];

/** any: Represents a dynamic type that allows values of any type. */
let data: any = 42;

/** void: Represents absence of a value, typically used as the return types for 
functions that don't return a value.
*/
function logMessage(message: string): void {
  console.log(message);
}

/** null: Represents the abscense of a value intentionally assigned to a 
variable.
*/
let missingValue: null = null;

/** undefined: Represents a variable that has not yet been assigned a value. */
let emptyValue: undefined = undefined;

/** never: Represents a value that never occurs. 
Often used as a return type for functions that throw exceptions or enter 
infinite loops.
*/
function throwError(message: string): never {
  throw new Error(message);
}

/** symbol: Represents unique and immutable values often used as object 
properties keys. 
They were introduced in ECMAScript 2015 (ES6).
*/
const uniqueSymbol: symbol = Symbol("unique");
const obj = {
  [uniqueSymbol]: "This is a unique property",
};
console.log(obj[uniqueSymbol]); // Output: This is an unique property

/** object: Represents non-primitive values, typically used to objects, 
functions and instaces of classes.
*/
let person: object = { name: "Bob", age: 25 };
