```txt
keyof is an operator in TypeScript that produces a union type of all the keys of an object type. For example:
```

```ts
type MyKeys = keyof { name: string; age: number };
// MyKeys is "name" | "age"
```
