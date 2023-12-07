If you use TypeScript in the right way, you should rarely find yourself using explicit type assertion (like value as SomeType); however, sometimes, you’ll still feel an impulsion, like the following:

```ts
type Circle = { kind: "circle"; radius: number };
type Rect = { kind: "rect"; width: number; height: number };
type Shape = Circle | Rect;

function isCircle(shape: Shape) {
  return shape.kind === "circle";
}

function isRect(shape: Shape) {
  return shape.kind === "rect";
}

const myShapes: Shape[] = getShapes();

// error because TypeScript doesn't know the filtering
// narrows typing
const circles: Circle[] = myShapes.filter(isCircle);

// you may be inclined to add an assertion:
// const circles = myShapes.filter(isCircle) as Circle[];
```

A more elegant solution is to change isCircle and isRect to return type predicate instead, so they help TypeScript further narrow down types after the filter call. Here’s what that looks like:

```ts
function isCircle(shape: Shape): shape is Circle {
    return shape.kind === 'circle';
}

function isRect(shape: Shape): shape is Rect {
    return shape.kind === 'rect';
}

...
// now you get Circle[] type inferred correctly
const circles = myShapes.filter(isCircle);
```
