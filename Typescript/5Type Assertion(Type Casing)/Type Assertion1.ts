/*
Type Assertion is used when you, as the developer, 
have more information about the type of a value than what TypeScript can infer. 
*/

let someValue: any = "Hello, TypeScript!";
//let strLength: number = (<string>someValue).length;

let someValue1: any = "Hello, TypeScript!";
let strLength: number = (someValue1 as string).length;

/*
Type assertions allow you to tell TypeScript 
that you know the type of a value better than the compiler does. 
This can be useful when working with values that have more specific types than TypeScript can infer.

*/

let value: any = "hello";
let Vlength: number = (value as string).length;

/**
 * To override type errors that TypeScript may throw when casting,
 * first cast to unknown, then to the target type.
 */
let x = "hello";
console.log((x as unknown as number).length); // x is not actually a number so this will return undefined
