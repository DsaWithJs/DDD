## Union

```ts
namespace ss {
  interface A {
    firstName: string;
    lastName: string;
  }

  interface B {
    age: number;
  }

  type C = A | B;
}
```

## Intersection

```ts
namespace ss {
  interface A {
    firstName: string;
    lastName: string;
  }

  interface B {
    age: number;
  }

  type C = A & B;
}
```

## Combining them for something more advanced

What if we need something in between these two results? Recently i had the need to create a type that contained all common properties between two interfaces as required properties and the rest as optional properties. I played for a little while with the tools that typescript provides and i was able to come up with something that did what i needed. Let’s see how we can build such type.

First, let’s create a type with only common keys between the two interfaces. This line is saying that the resulting type Cwill have a key for each one that appears in Aand B.

```ts
namespace ss {
  interface A {
    firstName: string;
    lastName: string;
  }

  interface B {
    age: number;
  }

  type C = {
    [K in keyof A & keyof B]: A[K] | B[K];
  };
}
```

Then, we use the typescript’s utility Excludeto take out from Aall the keys that also appear in B, leaving out the uniques to Aand we specify the type that key had in A. By adding the question mark we make them optional.

```ts
interface A {
  firstName: string;
  lastName: string;
}

interface B {
  age: number;
}

type C = {
  [K in Exclude<keyof A, keyof A & keyof B>]?: A[K];
};
```

We can do the same thing for B now

```t
interface A {
 firstName: string
 lastName: string
}

interface B {
 age: number
}

type C = {
 [K in Exclude<keyof B, keyof A & keyof B>]?: b[K]
}
```

Now, using the intersection operator, we can combine them all into one type that will fulfill our requirement: the common keys to and will be required and the rest optional.

```ts
interface A {
  firstName: string;
  lastName: string;
}

interface B {
  age: number;
}

type C = {
  [K in keyof A & keyof B]: A[K] | B[K];
} & {
  [K in Exclude<keyof A, keyof A & keyof B>]?: A[K];
} & {
  [K in Exclude<keyof B, keyof A & keyof B>]?: b[K];
};
```

## Wrapping up

To wrap up, we can create our own utility type so we can reuse that we have done.

```ts
/**
 * Construct a type with the properties common to T and U as required properties and the rest as optional properties
 */
type SoftIntersection<T, U> = {
  [K in keyof T & keyof U]: T[K] | U[K];
} & {
  [K in Exclude<keyof T, keyof T & keyof U>]?: T[K];
} & {
  [K in Exclude<keyof U, keyof T & keyof U>]?: U[K];
};
```
