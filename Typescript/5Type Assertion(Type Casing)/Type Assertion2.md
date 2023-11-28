```txt
When writing an expression (function call, arithmetic operation, etc.), you can also explicitly indicate the resulting type of the expression with a type assertion, which is necessary if you are calling a function where TypeScript cannot figure out the return type automatically. For example:
```

```ts
function numberStringSwap(value: any, radix: number = 10): any {
  if (typeof value === "string") {
    return parseInt(value, radix);
  } else if (typeof value === "number") {
    return String(value);
  }
}

const num = numberStringSwap("1234") as number;
const str = <string>numberStringSwap(1234);
```

```txt
In this example, the return value of numberStringSwap has been declared as any because the function might return more than one type. In order to remove the ambiguity, the type of the expression being assigned to num is explicitly asserted by the as number modifier after the call to numberStringSwap.
```
