/**
 * Object:
 * Use the `object` type when the variable can hold any non-primitive value.
 */
namespace ss {
  let person: object = { name: "John", age: 30 };
}
/**
 * Custom Objects:
 * Define interfaces or classes to create custom object types.
 */
namespace ss {
  let user: { id: number; name: string } = { id: 1, name: "Alice" };
}

/**
 * object vs Object
 */

/**
 * object:
 * represents any non-primitive type in TypeScript.
 */
namespace ss {
  let myObject: object = { name: "John", age: 30 };
}

/**
 * Object type:
 * This is a built-in class in JavaScript (and therefore TypeScript)
 * that provides a set of methods for working with objects.
 */
namespace ss {
  let myObject: Object = { name: "John", age: 30 };

  console.log(Object.keys(myObject)); // ["name", "age"]
}

/**
 * Note that we cannot directly access the properties of an object
 *  defined as both an object and an Object type.
 */
namespace ss {
  // object type
  let myObject: object = {
    name: "John",
    age: 30,
  };

  console.log(myObject.name);
  // Property 'name' does not exist on type 'object'.

  // Object type
  let yourObject: Object = {
    name: "Jane",
    age: 25,
  };

  console.log(yourObject.name);
  // Property 'name' does not exist on type 'Object'.
}
