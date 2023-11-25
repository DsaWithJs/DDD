//medium.com/interesting-coding/mastering-conditional-types-in-typescript-a-full-guide-b7facf6811f0

/**1. Extracting Number Types */

// Let’s create conditional types that extracts number types from a given union:
https: type ExtractNumbers<T> = T extends number ? T : never;

type NumbersOnly = ExtractNumbers<number | string | boolean>; // number
type NeverOnly = ExtractNumbers<string | boolean>; // never

/**2. Determining the Name of a Given Type */
type TypeName<T> = T extends string ? "string" : T extends number ? "number" : T extends boolean ? "boolean" : T extends undefined ? "undefined" : "object";

const exampleString: TypeName<"oscar"> = "string";
const exampleNumber: TypeName<5> = "number";
const exampleBoolean: TypeName<true> = "boolean";
const exampleUndefined: TypeName<undefined> = "undefined";

interface ExampleInterface {
  name: string;
  age: number;
}

const exampleObject: TypeName<ExampleInterface> = "object";

//3. Array Element Type..
type ArrayElementType<T> = T extends Array<infer U> ? U : T;

type ElementType1 = ArrayElementType<string[]>; // string
type ElementType2 = ArrayElementType<(string | number)[]>; // string | number

type ElementType3 = ArrayElementType<[]>; // never
type ElementType4 = ArrayElementType<[3, 4]>; // 3 | 4

// Another way
type OtherArrayElementType<T> = T extends (infer U)[] ? U : T;
type ElementType5 = OtherArrayElementType<number[]>; // number

/**Conditional Type with Union Types */
type PrimitiveOrNever<T> = T extends string | number | boolean ? T : never;

type Num = PrimitiveOrNever<number>; // number
type Str = PrimitiveOrNever<string>; // string
type Bool = PrimitiveOrNever<boolean>; // boolean
type ArrayNever = PrimitiveOrNever<number[]>; // never
type DateNever = PrimitiveOrNever<Date>; // never


/**Distributive Conditional Types
 *
 */