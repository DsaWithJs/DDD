Union Types

```ts
type MyUnion = string | number;
```

```txt
A union type describes a value that can be one of several types. We use the vertical bar (|) to separate each type, so string | number is the type of a value that can be a string, or a number.
```

## Intersection Types

```ts
type MyIntersection = { prop1: string } & { prop2: number };
```

```txt
An intersection type combines multiple types into one. This allows you to add together existing types to get a single type that has all the features you need, so MyIntersection is a type that expects an object containing prop1 and prop2.
```

```ts
type Days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
type WorkDays = Days[2 | 3 | 4]; // "Wednesday" | "Thursday" | "Friday"
```
