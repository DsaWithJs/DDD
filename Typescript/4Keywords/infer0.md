To better understand how infer works, let's take a look at the basic syntax of a conditional type:

```ts
type MyConditionalType<T> = T extends SomeType ? TrueType : FalseType;
```

In this example, T is a generic type parameter, and SomeType represents a type that T is being compared to. If T extends SomeType, the type of MyConditionalType<T> will be TrueType. If not, it will be FalseType.

### Now, let’s introduce the infer keyword into the mix:

```ts
type MyInferredType<T> = T extends SomeType<infer U> ? U : FalseType;
```

Here, we use the infer keyword to create a temporary type variable U within the true branch of the conditional type. If T extends SomeType, TypeScript will try to infer the type of U based on the type of T.

## ReturnType

ReturnType is a utility type that extracts the return type of a function. It's a perfect example of how the infer keyword can be used to create dynamic types. Here's the definition of ReturnType:

```ts
type ReturnType<T extends (...args: any[]) => any> = T extends (...args: any[]) => infer R ? R : any;
```

```ts
function greet(name: string): string {
  return `Hello, ${name}!`;
}
type GreetReturnType = ReturnType<typeof greet>; // GreetReturnType is inferred as 'string'
```

## Parameters

Another useful utility type that leverages the infer keyword is Parameters. This type extracts the parameter types of a function as a tuple. The definition of Parameters is as follows:

```ts
type Parameters<T extends (...args: any[]) => any> = T extends (...args: infer P) => any ? P : never;
```

In this example, we create a temporary type variable P to represent the parameter types of the function. If T is a function, TypeScript infers the parameter types and assigns them to P as a tuple.

```ts
function add(a: number, b: number): number {
  return a + b;
}
type AddParameters = Parameters<typeof add>; // AddParameters is inferred as [number, number]
```

Here, Parameters is used to infer the parameter types of the add function, which is a tuple [number, number].

## PromiseType

The PromiseType utility type can be used to extract the type that a Promise resolves to. This is particularly useful when dealing with asynchronous functions. Here's the definition of PromiseType:

```ts
type PromiseType<T extends Promise<any>> = T extends Promise<infer U> ? U : never;
```

In this example, we create a temporary type variable U to represent the type that the Promise resolves to. If T is a Promise, TypeScript infers the resolved type and assigns it to U. Here’s an example:

```ts
async function fetchData(): Promise<string> {
  return "Fetched data";
}
type FetchedDataType = PromiseType<ReturnType<typeof fetchData>>; // FetchedDataType is inferred as 'string'
```

In this case, PromiseType is used to infer the type that the fetchData function's promise resolves to, which is string.

## Advanced Usage: Conditional Types and Mapped Types

The infer keyword truly shines when combined with other advanced TypeScript features, such as conditional types and mapped types.

## Combining Infer with Conditional Types

Let’s say we want to create a utility type called IfFunction, which evaluates whether a type is a function or not. If it is, we want to extract the return type of the function. If not, we want to return the original type. We can achieve this using infer and conditional types:

```ts
type IfFunction<T> = T extends (...args: any[]) => any ? ReturnType<T> : T;
```

Here’s how it works:

```ts
type Test1 = IfFunction<() => string>; // Test1 is inferred as 'string'
type Test2 = IfFunction<number>; // Test2 is inferred as 'number'
```

## Combining Infer with Mapped Types

For instance, let’s say we want to create a utility type that changes all properties of an object to be functions that return the original property type. We can achieve this using infer and mapped types:

```ts
type Functionify<T> = {
  [K in keyof T]: T[K] extends (...args: any[]) => any ? T[K] : () => T[K];
};
```

Here’s how it works:

```ts
type OriginalObject = {
  a: string;
  b: number;
  c: () => boolean;
};

type FunctionifiedObject = Functionify<OriginalObject>;
// FunctionifiedObject is inferred as:
// {
//   a: () => string;
//   b: () => number;
//   c: () => boolean;
// }
```

## Limitations

While the infer keyword is incredibly powerful, it has some limitations:

> - It can only be used within conditional types.
>   -It’s not always possible for TypeScript to infer the correct type, especially when dealing with complex or recursive types. In such cases, developers may need to provide additional type annotations or refactor their types to help TypeScript infer the correct type.
