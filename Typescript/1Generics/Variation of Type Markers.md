Another issue that we’re going to run into eventually is that we want parameters that have data types that are different from the return types. One way to solve this is to mix generic types and regular types with interfaces, as we do in the following code:

```ts
interface EchoInterface {
  [prop: string]: any;
}
function echo<T, U, V, W>(a: T, b: U, c: V, d: W): EchoInterface {
  return { a, b, c, d };
}
console.log(echo(1, "a", false, {}));
// {a: 1, b: "a", c: false, d: {}}
```

We can also leave out the return type, as we do in the following code:

```ts
function echo<T, U, V, W, X>(a: T, b: U, c: V, d: W) {
  return { a, b, c, d };
}
console.log(echo(1, "a", false, {}));
```

We get the same output as we do above. Note that in the two examples above, we can specify as many letters as we want as generic type markers. Generic type markers don’t have to be one letter. It’s just convention for it to be a single letter. We can write something like the following:

```ts
function echo<T, U, V, W, AA>(a: T, b: U, c: V, d: AA) {
  return { a, b, c, d };
}
```

Another way to define a generic function is to put the signature in the interface along with the generic type markers. When we declare the function by assigning it to a variable, we can set the type of the variable with the interface and then assign the generic function to it with the usual generic type markers added to the function. For example, we can write something like the following code:

```ts
interface EchoFn {
  <T>(a: T): T;
}
function echo<T>(a: T): T {
  return a;
}
const e: EchoFn = echo;
```

We may also add the generic type marker inside the <> to the interface declaration, as in the following:

```ts
interface EchoFn<T> {
  <T>(a: T): T;
}
```

Then when we declare the variable that we assign the function to, we have to specify the type of the interface explicitly, as in the following:

```ts
interface EchoFn<T> {
  <T>(a: T): T;
}
function echo<T>(a: T): T {
  return a;
}
const e: EchoFn<number> = echo;
```

In the code above, we have to add the number type declaration explicitly in the last line, instead of letting TypeScript infer it automatically.
