## Indexed Access Types

Index access types are types that are used to look up a specific type property in other types using square brackets [].

```ts
type Dog = {
  name: string;
  lastName: string;
  age: number;
};

type DogAge = Dog["age"]; // type number
```

Here we are accessing the property ‘age’ and receiving the type number.

## We can also access the types using a union:

```ts
type Dog = {
  name: string;
  lastName: string;
  age: number;
};

type DogNameOrAge = Dog["age" | "name"]; // type number | string
```

## 1. Index access type — Object to a union.

```ts
const Prizes = {
  FIRST: 1000,
  SECOND: 500,
  THIRD: 100,
} as const;

type PrizesType = typeof Prizes;
type PrizesTypeKeys = keyof PrizesType; // "FIRST" | "SECOND" | "THIRD"
type Prize = PrizesType[PrizesTypeKeys]; // 1000 | 500 | 100

function payUp(prize: Prize) {}
```

How does it work?

1. On line 5 we use the as const to make all fields of Prizes read-only.
2. Then we get its type using typeof .
3. We create a union from the type we just created using keyof .
4. We use index access type to create a union of its values.
5. profit!

## 2. Access nested types using another set of brackets.

```ts
type Dog = {
  name: string;
  lastName: string;
  age: number;
  owner: {
    name: string;
    age: number;
  };
};

type AgeOrName = "name" | "age";

type OwnerNameOrAge = Dog["owner"][AgeOrName]; // type number | string
```

## 3. Access arrays: types

```ts
const players = [
  { id: "asda", score: 100 },
  { id: "akjkjk", score: 180 },
  { id: "jgfj", score: 130 },
];

type Player = (typeof players)[number]; // {id:string;score:number}
```

# Index Signatures

Index signatures are used when we don’t know ahead of time the name of the type properties in object types, but we do know the type of values.

For example, using string as keys:

```ts
type EmployeesVacationDays = { [name: string]: number };

const employeesVacationDays: EmployeesVacationDays = {
  Matan: 0, // sad :(
  Adam: 27,
  John: 12,
};
```

We can also use number type as keys

```ts
type NumberArray = { [num: number]: number };

const numberArray: NumberArray = [3, 2, 1];

const stringNumberArray: NumberArray = {
  "0": 3,
  "1": 2,
  "2": 1,
};
```

numberArray and stringNumberArray are both of the same type.

Because when indexing with a number JS will actually convert the number into a string.

So, indexing with the number zero is the same as indexing with the string '0'.

Index signatures are a useful way to describe a dictionary, but they have one big constraint: they force all the “value” types to be the same.

```ts
type NotCompile = {
  [num: string]: string;
  x: number; // x of type number is not assignable to string
  job: "watching netflix"; // that's ok
};
```

We can solve this problem using a union as the value for the index signature.

```ts
type Compile = {
  [num: string]: string | number;
  x: number;
  job: "watching netflix";
};
```

## Mapped Types

What if we want a object type with only specific keys?

We can try to solve this with index signatures:

With index signatures we can only use arbitrary keys,
which means that box variable is valid Box type (even with ‘lef’ typo).

```ts
type Color = "red" | "blue" | "green";
type Sides = "right" | "top" | "bottom" | "left";

type Box = { [side: string]: Color };

const box: Box = {
  right: "blue",
  lef: "green", // lef is a type of Left
};
```

We want our box to have all Sides as a key and have **no other keys**.

Using Mapped Types:

```ts
type Box = { [Side in Sides]: Color };
```

Having a mental model of looping helps understanding Mapped types.

> - The in keyword in the mapped type indicates an “iteration process”.
> - To the right of in is the union we “iterate” over. In this case: Sides.
> - To the left of in is the item we are “iterating” with. In this case: Side.

```ts
type Color = "red" | "blue" | "green";

type Sides = "right" | "top" | "bottom" | "left";

type Box = { [Side in Sides]: Color };

const box: Box = {
  right: "blue",
  left: "green",
  top: "blue",
  bottom: "red",
};
```

We must have all Sides as keys and we can’t add any key other than Sides. If we do, it will cause a type error.

## Record using Mapped Types

The last example is a very specific way to create a map between specific keys to a value type.

```ts
type Box = { [Side in Sides]: Color };
```

We want to create a more generic and reusable type and for this we will
use generics **type parameters**.

We will call our generic type OwnRecord. The first type parameter will be KeyProps ,which will represent the union we “iterate” over.

```ts
type OwnRecord<KeyProps extends string> = { [Key in KeyProps]: ... };
```

We will put a constraint on our generic parameter, **KeyProps extends string**, which means we expect it to be a **string**.

We are missing the second parameter, the generic **value**

The generic value does not need to have any constraints as we want the user of this type to determine any **Value** type they want.

```ts
type OwnRecord<KeyProps extends string, Value> = { [Key in KeyProps]: Value };
```

That’s it, we have our very own generic record. Let’s build a Box with it!

```ts
type Color = "red" | "blue" | "green";
type Sides = "right" | "top" | "bottom" | "left";

type OwnRecord<KeyProps extends string, Value> = { [Key in KeyProps]: Value };
type Box = OwnRecord<Sides, Color>;
```

Box is exactly the same type as before, OwnRecord is generic and reusable, and similar to the built-in type Record.

```ts
type Record<K extends keyof any, T> = {
  [P in K]: T;
};
```

The only difference is **K extends keyof any**.

```ts
type KeyOfAny = keyof any; // string | number | symbol
```

This means the built-in Record type allows also to have number, symbol and string as key.

You might think we would stop here, huh? No way!

## Mapped Types with index access types

It’s time to combine the knowledge we acquired to build even more powerful types.

We want to create our own custom addEventListner that allows us to listen to specific event types.

We want to allow listening only to click, mouseenterand mouseleave.

```ts
function customEventListner(eventType: string, listener: (event: any) => void) {}
```

customEventListner needs to have more constrained types, for the eventType and for the listener.

To achieve this, we will use the built-in type of WindowEventMap and we will create a subset of it.

WindowEventMap is a mapping between an event name and the event type.
E.g click: MouseEvent .

Let’s use mapped types and index access types to achieve this.

```ts
type CustomEventMap = {
  [K in "click" | "mouseenter" | "mouseleave"]: WindowEventMap[K];
};
```

First, we iterate over the union using the mapped type. Then, we use the key to receive the value from the object type using index access type.

We got CustomEventMap but we want to create a more reusable type that will help us do it in an easier way in the future.

First, pull the union that we iterate out to a type parameter.

```ts
type PartEventMap<Keys extends keyof WindowEventMap> = {
  [K in Keys]: WindowEventMap[K];
};

type CustomEventMap = PartEventMap<"click" | "mouseenter" | "mouseleave">;
```

We introduced the type parameter Keys for the union and constrained it to be keyof WindowEventMap .
This means that only union of keys of WindowEventMap are acceptable as the type parameter.

Now we can use any subset of keys from WindowEventMap which is pretty generic.

Can we make it even more generic? Of course, we can!

We will parametrize WindowEventMap .

Can we make it even more generic? Of course, we can!

We will parametrize WindowEventMap .

```ts
type PartObj<ObjType, Keys extends keyof ObjType> = { [K in Keys]: ObjType[K] };

type CustomEventMap = PartObj<WindowEventMap, "click" | "mouseenter" | "mouseleave">;
```

We introduce a second type parameter named ObjType.
This is the type from which we are creating a sub object type.

Pay attention that Keys are constrained to be the keyof ObjType, therefore we are guaranteed to have in the result type only keys and value from ObjType .

Now we can create any sub object type we want! We have just built the fantastically useful TypeScript built-in Pick.

```ts
type CustomEventMap = Pick<WindowEventMap, "click" | "mouseenter" | "mouseleave">;
```

Which will generate the exact same type.

And now we are ready to have a typesafe customEventListner

```ts
function customEventListner<ET extends keyof CustomEventMap>(eventType: ET, listner: (event: CustomEventMap[ET]) => void) {
  window.addEventListener(eventType, listner);
}
```

We allow listening to subsets of events, and as a bonus, the listner is type safe, which is a great success!

What if instead of picking keys from an object type, we want to omit keys from an object type?

Try to figure it out for yourself before you keep scrolling.

We can use PartObj that we already built in order to solve this, the first part of it should probably stay identical.

We still need a type parameter for the union and the object type.

```ts
type OmitObj<ObjType,Keys extends keyof ObjType> =
```

Now we need to figure out which set of keys we need to iterate over.
We can’t simply iterate over keys, that will give us the same result.

We need to iterate on all other keys in the object type except the one in Keys.
Luckily we already know the tool for this job (from previous articles): Exclude.

```ts
type OmitObj<ObjType, Keys extends keyof ObjType> = {
  [K in Exclude<keyof ObjType, Keys>]: ObjType[K];
};
```

We are excluding the Keys from all the keys of ObjType (create a union without Keys) and iterating over them, which results in a subset of the object type with omit of certain keys.

And clearly this is another TypeScript built-in Omit<T, K>.
