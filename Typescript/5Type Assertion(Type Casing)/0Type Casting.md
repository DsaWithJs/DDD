## Avoid Type Casting

If your intention is to use TypeScript incorrectly and leave the door open to errors and unexpected behavior in your code, Type Casting is the fastest way to achieve this.

It commonly occurs when we forget to pass a type as a parameter to a Generic that has “any” or “unknown” as default values ​​or we use a library that has not been strictly typed.

```ts
const value: unknown = 1;
const a: string = value as string;

const value: unknown = 1;
const a: string = <string>value;
```

I am a programmer and I understand that the rush to finish a project on time and other conditions can prompt you to cast variables so that the TypeScript compiler does not return any incompatibility errors. But I think it's these moments where you see the difference between a sloppy developer and those who want to do their job well.
