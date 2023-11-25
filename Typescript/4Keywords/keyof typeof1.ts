/**
What is keyof operator?
In TypeScript, the keyof operator is used to get a union type of all possible keys of interface or type.
 */
namespace ss {
  interface Person {
    name: string;
    age: number;
    address: string;
  }

  type PersonKeys = keyof Person;
  // "name" | "age" | "address"
  const name: PersonKeys = "name"; // OK
  const age: PersonKeys = "age"; // OK
  const address: PersonKeys = "address"; // OK
  const invalid: PersonKeys = "invalid"; // error
}

/**
 * What is typeof operator?
you can use the typeof operator to get the type of a variable or expression at compile-time.
 */
namespace ss {
  let myString = "hello";
  let myNumber = 42;

  console.log(typeof myString); // Output: string
  console.log(typeof myNumber); // Output: numbe
}

/**
 * So, how to use keyof typeof operator?
 * In TypeScript, the keyof typeof operator is used to get a union type of all keys in an object.
 */
namespace ss {
  const myObject = {
    name: "John",
    age: 30,
    city: "New York",
  };

  type MyObjectKeys = keyof typeof myObject;
  // MyObjectKeys is now a union type of 'name' | 'age' | 'city'
}

/**
 * when accessing properties of the object.
 */
namespace ss {
  const myObject = {
    name: "John",
    age: 30,
    city: "New York",
  };
  function printProperty(obj: typeof myObject, key: keyof typeof myObject) {
    console.log(obj[key]);
  }

  printProperty(myObject, "name"); // prints 'John'
  printProperty(myObject, "age"); // prints 30
  printProperty(myObject, "foo"); // error: Argument of type '"foo"' is not assignable to parameter of type '"name" | "age" | "city"'
}

/**
 *  keyof operator can't be used with a real object.
 */
namespace ss {
  const data = {
    id: 1,
    name: "John Doe",
    age: 25,
  };

  type DataKeys = keyof data; // error
  type DataKeysTypeOf = keyof typeof data; // "id" | "name" | "age"
}

/**
 * Why “keyof typeof” is useful? Because we can create a type from a real object.
 */
namespace ss {
  export const colors = {
    status: {
      success: "blue",
      info: "orange",
      error: "red",
    },
  };
  export type Color = keyof typeof colors.status; // "success" | "info" | "error"

  function getColor(colorType: Color) {
    return colors.status[colorType];
  }

  const successColor = getColor("success");
  console.log(successColor); // "blue"

  const infoColor = getColor("info");
  console.log(infoColor); // "orange"

  const errorColor = getColor("error");
  console.log(errorColor); //"red"

  const invalidColor = getColor("invalid");
  console.log(invalidColor); //error
}
/**
 * You can get values as well with (typeof)[keyof typeof].
 */
namespace ss {
  // import styled, { css } from "styled-components";

  export const SizeType = {
    Large: "large",
    Medium: "medium",
    Small: "small",
  } as const;
  // This is a type to convert readonly to prevent a type change unexpected

  export type SizeType = (typeof SizeType)[keyof typeof SizeType];
  // 'large' | 'medium' | 'small'

  export type ButtonSize = Exclude<SizeType, "large">;
  // exclude type to manage type more strict

  const StyledButtonSize = (size?: ButtonSize) => {
    switch (size) {
      case SizeType.Medium:
        return css`
          // some css
        `;
      case SizeType.Small:
        return css`
          // some css
        `;
    }
  };
}
