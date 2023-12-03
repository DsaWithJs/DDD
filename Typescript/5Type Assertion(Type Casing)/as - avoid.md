In general, a developer’s intention when using as is to validate that something is a particular shape and to hint to TypeScript about what that shape is.

In reality, as silently does more than provide a hint. It can also coerce data to look like a given type and only provide a partial match.

It can effectively lie about your data, leading to cascading logic errors and difficult-to-track run-time bugs.

Because of as's ability to lie to TypeScript, there are circumstances even with a seemingly innocent .reduce where this might cause damage. And when you do end up with a runtime error as a result, it is often very difficult to trace.

```ts
const response = await fetch("http://someendpoint.com/api/thing/1");
if (response.status === 200) {
  const responseData = (await response.json()) as TMyType;
}
```

When you receive an API response, you should be using type-guards and/or type assertions to ensure that the data you received.

```ts
// For this example, TMyType must have a property 'foo' that is a string.
type TMyType = {
  foo: string;
};
```

```ts
const assertMyType = (data: unknown): TMyType => {
  if (data && typeof data === "object" && "foo" in data && typeof data.foo === "string") {
    return data as TMyType;
  }
  throw new Error("TMyType Assertion failed.");
};
const doAThing = async () => {
  const response = await fetch("http://someendpoint.com/api/thing/1");
  if (response.status === 200) {
    const responseData = assertMyType(await response.json());
    doSomethingWithResponse(responseData);
  }
};
```

Firstly, you’ll notice I still used as here. Unfortunately, this is a strange quirk with TypeScript.

## Another common use case for `as`

```ts
const fruitSalad = fruits.reduce((acc, current) => {
  return [...acc, current.name];
}, [] as string[]);
```

.map, .reduce, and .filter among countless other functions use generics and TypeScript’s built-in type inferencing to implement meaningful type restrictions on code.

Don’t do as I did. Provide the type using the type generic system in angle brackets <> .

```ts
const fruitSalad = fruits.reduce<string[]>((acc, current) => {
  return [...acc, current.name];
}, []);
```

This avoids the small, but all too human chance of accidentally using as to enforce an incorrect type.
