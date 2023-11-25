```txt
  * infer keyword is used in TypeScript
 to find a type from another type using conditional types.

  * The infer keyword in TypeScript is used in conditional types
 to find a type from another type.

  * This way, you can take a type from a group of types
 and use it in some other part of the type definition.

  * This can be handy for making general types
 that work with many different input types.
```

```ts
type UnArray<T> = T extends any[] ? T[number] : T;
```

```txt
The above snippet defines a generic type called UnArray that takes a type T as input. If T is an array type, then the type of its elements is returned. Otherwise, the input type T is returned. A key piece of the snippet is that T[number] is an indexed access type. This allows the user to extract a specific element type from an array or a tuple type by indexing it with the number type. Indexed access types are a powerful feature of TypeScript that can be used to extract specific types from other types.
```

```txt
However, there is a cleaner approach to extracting the type of an array with the infer keyword:
```

```ts
type UnArray<T> = T extends Array<infer U> ? U : T;
```

```ts
type Users = {
  name: string;
  age: number;
  city: string;
}[];
type User = UnArray<Users>;
/**  {
	name: string,
	age: number,
	city: string
} */
type Str = UnArray<string>; // string
```

```txt
The UnArray type is similar to the one in the previous example. It takes a type T as input. We use the [extends keyword](https://medium.com/@developer.olly/typescript-extends-keyword-explained-101b1636c8e4) to check if T is an array type. If it is, we use the infer keyword to capture the type of the array's elements in a new type variable U which we define as the type(s) inside the array. We then return this type variable as the result of the conditional type. If T is not an array type, we simply return T itself as the result of the conditional type.
```
