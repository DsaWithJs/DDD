namespace ss {
  /* Declare an object that accepts Generics*/
  interface Person<T> {
    name: string;
    age: number;
    hobby: T; //It may be a string, object or other, the specific type will be declared when used in the future
  }

  /* Use, replace T with the desired type*/
  const personOne: Person<string> = {
    name: "Alicia",
    age: 21,
    hobby: "watch movie", //String, if you use other types at this time, the error will occur.
  };
}
/**
 * object example
 */
namespace ss {
  interface Person<T> {
    name: string;
    age: number;
    hobby: T; //It may be a string, object or other, the specific type will be declared when used in the future
  }
  const personOne: Person<object> = {
    name: "Alicia",
    age: 21,
    hobby: { name: "Watching American TV series" },
  };
}
/**
 * object literal example 2
 */
namespace ss {
  interface Person<T> {
    name: string;
    age: number;
    hobby: T; //It may be a string, object or other, the specific type will be declared when used in the future
  }

  const personOne: Person<{ name: string }> = {
    name: "Alicia",
    age: 21,
    hobby: { name: "Watching American TV series" },
  };
}
