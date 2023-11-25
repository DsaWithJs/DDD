## Understanding Readonly

```txt
Readonly is a utility type provided by TypeScript. It creates a type that has all the same properties as the input type, but each property is marked as readonly. This effectively means that you cannot reassign the properties of an object of this type once it's been created.

Here’s a simple example of how it works:
```

```ts
type Person = {
  name: string;
  age: number;
};

const john: Readonly<Person> = {
  name: "John",
  age: 30,
};

john.age = 31;

// Error: Cannot assign to 'age' because it is a read-only property.
```

```txt
In the example above, john is of type Readonly<Person>, which means all of its properties are readonly. Attempting to reassign any of these properties results in a TypeScript error.
```

## The Power of “as const”

```txt
as const is a little more complex. It is not a type, but a type assertion. When you use as const, you're telling TypeScript that you want the narrowest possible type to be inferred for your variable. This means:

Variables are inferred to be of a literal type, not a broader type.
Object properties are inferred as readonly.
Arrays are inferred to be readonly tuples.
```

```ts
const john = {
  name: "John",
  age: 30,
} as const;

john.age = 31;

// Error: Cannot assign to 'age' because it is a read-only property.
```

```ts
const age = 30 as const;

age = 31;

// Error: Cannot assign to 'age' because it is a read-only property.
```

```ts
const numbers = [1, 2, 3] as const;

numbers.push(4);

// Error: Property 'push' does not exist on type 'readonly [1, 2, 3]'.
```

```txt
Here, numbers is inferred to be a readonly tuple of [1, 2, 3], not an array of number[]. This means you can't modify the array using methods like push, or you’ll get an error that the array method only doesn’t exist.
```

## When to Use Readonly vs "as const"

```txt
Use Readonly when you want to create a type where all properties of an object are readonly. It’s particularly useful when creating interfaces or types that will be used across your codebase to enforce immutability.

Use as const when you want the narrowest type to be inferred for a variable, whether it's a single variable, an array, or an object. It's most useful when you're declaring constants or configuration objects where the values and structure won't change.

Remember, as const is a type assertion, so it won't create a new type that you can use elsewhere in your code. If you need to reuse a readonly type in multiple places, it’s better to create a Readonly type or interface.

To summarize, Readonly and as const are powerful tools in TypeScript for enforcing immutability. While Readonly is a utility type that makes all properties of an object readonly, as const is a type assertion that infers the narrowest possible type for a variable, making variables, object properties, and arrays readonly. Therefore, the choice between the two will largely depend on your specific use case.

Consider the following scenarios:

If you are working with an object and want to prevent its properties from being modified, both Readonly and as const can be used. But if the object type is to be reused in multiple places, Readonly is a better choice.
For individual variables, especially when dealing with constant values, as const is the way to go as it infers a literal type, preventing any changes to the variable.
If you are dealing with an array and want to prevent any modifications to it, as const should be used because it makes the array readonly and also infers it as a tuple with fixed length and types.
Ultimately, understanding the differences between Readonly and as const and their appropriate use cases will allow you to write more secure, predictable, and error-resistant TypeScript code.
```
