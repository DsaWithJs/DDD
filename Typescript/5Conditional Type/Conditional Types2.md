## Conditional Types

```ts
type MyConditional<T> = T extends string ? "string type" : "non-string type";
```

```txt
This type takes a generic parameter, more on generics in our next post, T and checks if T extends string. If T extends string, the type evaluates to "string type", otherwise, it evaluates to "non-string type".
```

```txt
Conditional types allow you to create new types based on conditions. The syntax is similar to the ternary operator, using the extends keyword as a type constraint.
```

```ts
type NonNullable<T> = T extends null | undefined ? never : T;
```

```txt
In this example, we define a conditional type called NonNullable which takes a type T and checks whether it extends null or undefined. If extended, the result type is never, otherwise the primitive type T.
```


