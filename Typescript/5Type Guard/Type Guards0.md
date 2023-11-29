## How do you define a type guard?

To define a type guard, **_simply define a function
whose return type is a type predicate. _**

**_Since a type guard is just a function whose return type is a type predicate._**

So an **_isCat_** type guard is a function that has
the **animal is Cat** predicate as its return type as shown below:

```ts
const isCat = (animal: Animal): animal is Cat => {
  //Hey compiler, this animal is a Cat
  return true;
};
```

Note that I didn’t even have to implement any ‘serious’ logic in the function, all I had to do was return true because remember, predicates are functions that return Boolean values.

The **isCat** type guard tells the type system that we’ve confirmed that the **animal** argument passed is a **Cat**, so when the compiler does its **_control flow analysis_** and sees our type guard, it says “Oh! Whatever is passed into this function has to be a Cat if it returns true”.

It then narrows the argument type from Animal to Cat, that way, we are guaranteed that what the type we get at runtime will be a structure that is consistent the Cat interface definition.

To further appreciate type guards, let’s use it in an if-else block:

```ts
if (isCat(cat)) {
  cat.meow(); //Ts compiler sees this as a cat because of the type guard
} else {
  cat.meow(); //Property 'meow' does not exit on type 'never'.
}
```

Remember again that we didn’t implement any ‘serious’ logic in the isCat type guard, but the compiler sees the return type as a Cat because of the animal is Cat predicate; so it doesn’t throw any error in the if block of the code snippet above.

What happens in the else block however is more interesting.

Because the compiler expects a Cat type in the if block, it says whatever is in the else block has got to be a different type — that type is the never type which is a type used for values that never occur, hence the error message you see in the else block.

## Converting our utility function to a type guard

Since a type guard is just a function whose return type is a type predicate, all we need to do is to modify our utility function to return a type predicate.

To convert our utility function to a type guard, we would take advantage of that and make our return type a type predicate of the form **_arg is T_** where T is the argument type.

```ts
const isPresentObject = <T>(arg: T): arg is T => {
  if (arg && Object.keys(arg).length > 0) {
    return true;
  }
  return false;
};
```
