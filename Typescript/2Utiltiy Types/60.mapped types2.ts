// https://medium.com/interesting-coding/mastering-mapped-types-in-typescript-with-specific-examples-f5b973db2f49

type Animals = "cat" | "dog" | "bird";

type AnimalsObject = {
  [Animal in Animals]: { name: Animal };
};
//The Animal in Animals acts as a kind of index signature,
//which allows us to loop over each member of the Animals union.

//With keyof operator
/*
To create new object types from object types, 
we can use the keyof operator with mapped types.
*/
type MappedType<OriginalType> = {
  [Key in keyof OriginalType]: OriginalType[Key];
};
// MappedType: The new type we are creating using the mapped type.
// Key: A variable that represents each key in the OriginalType.
// OriginalType: The type whose properties we want to transform.

//.......................
interface Person {
  name: string;
  age: number;
}

type NullablePerson<T> = {
  [K in keyof T]: T[K] | null;
};

type NullableResult = NullablePerson<Person>;

//................................
interface Person2 {
  firstName: string;
  age: number;
}

const person: Person2 = {
  firstName: "John",
  age: 30,
};

type AddGetPrefix<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: T[K];
};

const getPerson: AddGetPrefix<Person2> = {
  getFirstName: "Johhny",
  getAge: 25,
};

/* Why use Capitalize<string & K>?

In the code, the expression Capitalize<string & K> takes the string
 representation of the key K and capitalizes the first letter.

For instance, if K is "name",
the expression Capitalize < string & K > will return "Name".
*/

/*
This operation ensures that if K is a pre-defined string, 
like "name", the Capitalize operation will capitalize the first letter 
to become “Name”. 

If K is a more dynamic value, determined perhaps by a variable, 
the string & K expression converts it to a string type. 
This means that even if it wasn’t originally a string, 
this expression makes it a string.
*/

interface GetPerson {
  getFirstName: string;
  getAge: number;
}

const getPersons: GetPerson = {
  getFirstName: "John",
  getAge: 30,
};

type RemoveGetPrefix<T> = {
  [K in keyof T as K extends `get${infer Rest}` ? Uncapitalize<Rest> : K]: T[K];
};

const onlyPerson: RemoveGetPrefix<GetPerson> = {
  firstName: "Johhny",
  age: 25,
};
