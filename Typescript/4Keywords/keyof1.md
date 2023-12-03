```txt
The keyof operator allows you to extract the keys of an object type as a union of string literals.
```

```txt
keyof is an operator in TypeScript that produces a union type of all the keys of an object type. For example:
```

```ts
type MyKeys = keyof { name: string; age: number };
// MyKeys is "name" | "age"
```

## The keyof operator was introduced in TypeScript 2.1.

```txt
This operator can be used to obtain all keys of a certain type,
and its return type is a union type.
```

```ts
interface Person {
  name: string;
  age: number;
  location: string;
}

type K1 = keyof Person; // "name" | "age" | "location"
type K2 = keyof Person[]; // number | "length" | "toString" | "pop" | ...
type K3 = keyof { [x: string]: Person }; // string | number
```

```ts
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
```

```txt
In the above getProperty function, we use K extends keyof T to ensure that the parameter key must be the key contained in the object, so that there will be no runtime errors. This is a type-safe solution, as opposed to simply calling let value = obj[key];.
```

```ts
const user = {
  name: "bytefer",
  age: 30,
};

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const username = getProperty(user, "name"); // Ok
const age = getProperty(user, "age"); // Ok
const sex = getProperty(user, "sex"); // Error
//Argument of type '"sex"' is not assignable to parameter of
//type '"name" | "age"'.
```
