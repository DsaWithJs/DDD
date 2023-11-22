#### The Extract utility constructs a type by extracting from Type all union members that are assignable to Union.

## Example 1: Basic Extraction

```ts
type T0 = Extract<"a" | "b" | "c", "a" | "f">;
// Result: type T0 = "a"

In this example, T0 is assigned the type "a" because it is the only member of the first union ("a" | "b" | "c") that's also present in the second union ("a" | "f").
```

## Example 2: Filtering Functions from Union

```ts
type T1 = Extract<string | number | (() => void), Function>;
// Result: type T1 = () => void
Here, T1 captures the type () => void, as it's the only function type within the given union (string | number | (() => void)).

```

## Example 3: Extracting Specific Shape from Union

```ts
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; x: number }
  | { kind: "triangle"; x: number; y: number };

type T2 = Extract<Shape, { kind: "circle" }>;
/* Result: type T2 = {
    kind: "circle";
    radius: number;
}
*/
In this case, T2 is assigned a type representing the shape of a circle. The Extract utility filters the union Shape and retains the object type with kind as "circle".

```

## Practical Use Cases

```text
1. Filtering Action Types in Redux: When managing complex states in Redux, Extract proves handy in filtering action types from the union of all possible actions, ensuring strict type checking.

2. Event Handling in React: Utilizing union types for various events in React components, Extract assists in isolating specific event types for handling, ensuring type safety.

```
