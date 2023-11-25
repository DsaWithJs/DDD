```txt
Typescript extends keyword is very powerful and helpful, it avoids unnecessary type properties duplication and also helps with type specificity. Here are the 2 prominent cases of using the extends keyword.
```

## Inheritance

```ts
interface Animal {
  name: string;
  weight: number;
}
interface Honeybadger {
  name: string;
  weight: number;
  skin: string;
  color: string;
}
/** 
	we can avoid duplication on the HoneyBadger by using the
 typescript extends keyword
*/
interface Honeybadger extends Animal {
  skin: string;
  color: string;
}
/** 
	Honeybadger inherits name and weight attributes from Animal, but also has 
	the skin and color property as well
*/
```

## Generics Constraints

```txt
For example, we can create a generic type function that receives a parameter of T and reuse that type within different contexts.
```

```ts
type Log<T> = (content: T) => void;
// Log T = string
const consoleString: Log<string> = (content) => console.log(content);
// Log T = {error: string}
const consoleError: Log<{ error: string }> = (content) => console.error(content);
```

```txt
However, we sometimes want to limit or constrain the generic type that can be used or passed,
and the extends shines in this regard. For example
```

```ts
type Log<T extends { name: string }> = (content: T) => void;
```

```ts
/** ❌ throws error 
	Type 'string' does not satisfy the constraint '{ name: string; }'
*/
const consoleString: Log<string> = (content) => console.log(content);
type User = {
  name: string;
};
type Animal = {
  name: string;
  age: number;
};
// ✅ passes
const consoleName: Log<User | Animal> = (content) => console.log(content.name);
```

```txt
In the code snippets above, type Log accepts a generic type T , but there is a condition on T, the condition using the extends keyword which states that T must have at least property name of type string , so T cannot be of type string or any other type that doesn’t have the property specified.

One key thing to notice is that the constraint on the type doesn’t have to be exact, the type Animal for example, still passes even though it has age as an additional property.
```

```ts
string extends string // true
string extends number // false
any extends number // true
never extends string // false

type Car = {
	name: string,
	model: string,
	make: string,
	year: number,
	engine: string,
}
type Name = {name: string}
Car extends Name // true
Car extends {legs: number} // false
```
