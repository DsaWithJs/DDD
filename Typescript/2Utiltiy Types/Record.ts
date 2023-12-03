/**
 * The Record utility type allows you to create an object type with specified keys mapped to a specific value type.
 */
namespace ss {
  type Person = {
    name: string;
    age: number;
  };

  type People = Record<string, Person>;

  const people: People = {
    person1: { name: "John Doe", age: 30 },
    person2: { name: "Jane Doe", age: 25 },
  };

  type Keys = "name" | "age" | "hobby" | "email";

  const man1: Record<Keys, string | number> = {
    name: "bytefer",
    aeg: 36, // Error
    hobby: "programming",
  };

  man1.email = "bytefer@gmail.com"; // Ok
}
namespace ss {
  /**
   * Represents a collection of students with student IDs as keys and their corresponding names as values.
   */
  type StudentCollection = Record<number, string>;

  /**
   * An instance of StudentCollection representing a group of students.
   */
  const students: StudentCollection = {
    1: "John Doe",
    2: "Jane Smith",
    3: "Alex Johnson",
    // This object can have any number of key value pairs as long as they satisfy the type for Record.
    // That is, key should be number and value has to be of string type.
  };
}

namespace ss {
  /**
   * Represents a collection of product IDs as keys and their corresponding availability status as values.
   */
  type ProductAvailability = Record<number, boolean>;

  /**
   * An instance of ProductAvailability representing the availability of different products.
   */
  const availability: ProductAvailability = {
    1: true,
    2: false,
    3: true,
    // This object can have any number of key-value pairs as long as they satisfy the type for Record.
    // The keys are of type number (representing product IDs) and the values are of type boolean (representing availability status).
  };
}
