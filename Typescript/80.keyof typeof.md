## typeof

```txt
To begin with, let’s analyse what typeof in TypeScript means. It is simple to use typeof with for example string variables once they are created

```

```ts
💻 CREATING A STRING TYPE VARIABLE AND USING typeof WITH IT

const myName: string = 'Daniel'

console.log(typeof myName) // output will be 'string'

const herName: typeof myName = 'Giselle' // type will be 'string'

```

```txt
Pretty simple, huh? We can use typeof to annotate a new variable directly, without having to define a type on separate lines, because the expression itself describes that it always returns the type of a variable.
```

```txt
However, there is an interesting phenomenon with TypeScript: if we declare myName without a type annotation, the log’s output will be the same (string); however, we are only able to assign Daniel as a value, meaning that Daniel is a literal type. Literals are more specific types of string, number or boolean. Here’s a quick example with relationship statuses:
```

```ts
💁‍♂️ USING A LITERAL TYPE

type User = {
  name: string,
  relationshipStatus: 'single' | 'married' // the OR operator in type declaration is a single | not a double ||
}

const user: User = {
  name: 'Daniel',
  relationshipStatus: 'married' // not a string, can't be 'cat person'

// So the only possible values for the relationshipStatus variable are married or single
```

## keyof

```txt
We continue with the example using the type User above in order to understand the idea behind keyof. Consider the result of keyof as a union of the User type keys
```

```ts
🛼 keyof RESULT IS A UNION OF LITERAL TYPES

type User = {
  name: string,
  relationshipStatus: 'single' | 'married'
}

const userProp: keyof User = 'name' // can be 'name' or 'relationshipStatus'

since those are the keys of the User type, the result of keyof User is going to be a union of literals: ’name’ | ‘relationshipStatus’.
```

## keyof typeof

```txt
By using the concepts of keyof and typeof, we can understand their combined usage with ease. As we already know, types can be defined with typeof by using string variables that have already been declared as references; the same is true for objects

```

```ts
🏋️‍♀️ USING typeof WITH AN OBJECT

const user = {
  name: 'Daniel',
  relationshipStatus: 'married',
  age: 34
}

const user2: typeof user = {
  name: 'Giselle',
  relationshipStatus: 'married',
  age: 31
}

// typeof user will be { name: string, relationshipStatus: string, age: number }

and we already know that we can use keyof on types

🧘‍♂️ USING keyof WITH typeof


const userProp: keyof typeof user = 'name'

// keyof typeof user will be 'name' | 'relationshipStatus' | 'age'
```

```txt
Let’s look at a real-world example last. Imagine for the moment that we are developing a finance tracking service with multiple categories for expenses. It goes without saying that we want to use them as constants to prevent typing errors
```

```ts
🎱 keyof typeof WITH A FINANCE TRACKING EXAMPLE

const EXPENSE_CATEGORIES = {
  CREDIT_CARD: 'CREDIT_CARD',
  MORTGAGE: 'MORTGAGE',
  CAR_LOAN: 'CAR_LOAN',
  STUDENT_LOAN: 'STUDENT_LOAN',
  OTHER: 'OTHER',
} as const

type Expense = {
  id: number,
  title: string,
  category: keyof typeof EXPENSE_CATEGORIES
}

const expense: Expense = {
  id: 0,
  title: 'new TV',
  category: EXPENSE_CATEGORIES.CREDIT_CARD // or 'CREDIT_CARD'
}
```
