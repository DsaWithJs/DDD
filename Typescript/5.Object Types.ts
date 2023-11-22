/**
 * In TypeScript, we can explicitly specify the types of the book object.
 *
 */
namespace ss {
  const typedBook: {
    publicationDate: number;
    title: string;
  } = {
    publicationDate: Date.now(),
    title: "Odysee",
  };
}

/**
 * If we want to pass this object as a parameter to a function,
 * we can define the object type in two ways: anonymous or named.
 */
// Anonymous
const getBookDate = (book: { publicationDate: number; title: string }): number => {
  return book.publicationDate;
};

//Named (with an interface):
namespace ss {
  interface IBook {
    publicationDate: number;
    title: string;
  }

  const getBookDate = (book: IBook): number => {
    return book.publicationDate;
  };
}

// Named (with a type):
namespace ss {
  type Book = {
    publicationDate: number;
    title: string;
  };

  const getBookDate = (book: Book): number => {
    return book.publicationDate;
  };
}

//  For example, the following code will throw a TypeScript error:
namespace ss {
  const organization = {};
  organization.name = "Sony";

  // Property name does not exist on type {}.
}

/**
 * To solve this problem, we can use the Record utility type or an object index
 */
namespace ss {
  type Organization = Record<string, any>;

  const organization: Organization = {};

  organization.name = "Sony";
  organization.year = 40;
}

namespace ss {
  interface Organization {
    [key: string]: any;
  }

  const organization: Organization = {};

  organization.name = "Sony";
  organization.year = 40;
}

/**
 * object vs Object
 */
namespace ss {
  let myObject: object = { name: "John", age: 30 };
  console.log(myObject.length);
  // Property 'length' does not exist on type 'object'.
}

namespace ss {
  let myObject: Object = { name: "John", age: 30 };
  console.log(myObject.length);
  console.log(Object.keys(myObject)); // ["name", "age"]
  console.log(myObject.toString()); // [object Object]
}

/**
 * Note that we cannot directly access the properties of an object
 * defined as both an object and an Object type.
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

namespace ss {
  let firstObject: object;
  firstObject = { prop: 0 }; // OK
  firstObject = []; // OK
  firstObject = 42; // Type 'number' is not assignable to type 'object'.
  firstObject = "string"; // Type 'string' is not assignable to type 'object'.
  firstObject = false; // Type 'boolean' is not assignable to type 'object'.
  firstObject = null; // Type 'null' is not assignable to type 'object'.
  firstObject = undefined; // Type 'undefined' is not assignable to type 'object'.
}

namespace ss {
  let secondObject: {}; // or Object
  secondObject = { prop: 0 }; // OK
  secondObject = []; // OK
  secondObject = 42; // OK
  secondObject = "string"; // OK
  secondObject = false; // OK
  secondObject = null; // Type 'null' is not assignable to type '{}'.
  secondObject = undefined; // Type 'undefined' is not assignable to type '{}'.
}

namespace ss {
  let thirdObject: { [key: string]: any };
  thirdObject = { prop: 0 }; // OK
  thirdObject = []; // OK
  thirdObject = 42; // Type 'number' is not assignable to type '{ [key: string]: any; }'.
  thirdObject = "string";
  // Type 'string' is not assignable to type '{ [key: string]: any; }'.
  thirdObject = false;
  // Type 'boolean' is not assignable to type '{ [key: string]: any; }'.
  thirdObject = null; // Type 'null' is not assignable to type '{ [key: string]: any; }'.
  thirdObject = undefined;
  // Type 'undefined' is not assignable to type '{ [key: string]: any; }'.
}

namespace ss {
  let fourthObject: { [key: string]: string };
  fourthObject = { prop: "string" }; // OK
  fourthObject = { prop: 0 }; // Type 'number' is not assignable to type 'string'.
  fourthObject = [];
  // Type 'never[]' is not assignable to type '{ [key: string]: string; }'.
  fourthObject = 42;
  // Type 'number' is not assignable to type '{ [key: string]: string; }'.
  fourthObject = "string";
  // Type 'string' is not assignable to type '{ [key: string]: string; }'.
  fourthObject = false;
  // Type 'boolean' is not assignable to type '{ [key: string]: string; }'.
  fourthObject = null;
  // Type 'null' is not assignable to type '{ [key: string]: string; }'.
  fourthObject = undefined;
  // Type 'undefined' is not assignable to type '{ [key: string]: string; }'.
}
