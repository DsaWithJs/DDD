namespace ss {
  type Prefix = "prop";
  type Index = "1" | "2" | "3";
  type DynamicKey = `${Prefix}${Index}`;

  type DynamicProps = {
    [K in DynamicKey]: string;
  };
}
namespace ss {
  type Prefix = "app";
  type EventType = "init" | "update" | "destroy";
  type EventName = `${Prefix}:${EventType}`;

  const initEvent: EventName = "app:init";
}
namespace ss {
  type BaseType = "User";
  type Action = "Create" | "Update" | "Delete";
  type TypeName = `${Action}${BaseType}`;

  const create: TypeName = "CreateUser";

  // Type '"ModifyUser"' is not assignable to type '"CreateUser" | "UpdateUser" | "DeleteUser"'
  const modify: TypeName = "ModifyUser";
}
/**
 * Representing CSS values
 */
namespace ss {
  type Unit = "px" | "rem";
  type NumericValue = "1" | "2" | "3";
  type CSSLength = `${NumericValue}${Unit}`;

  const fontSize: CSSLength = "2rem";
}
/**
 * Type-safe i18n keys
 */
namespace ss {
  type Section = "home" | "about";
  type I18NKey = `translation.${Section}`;

  const homeKey: I18NKey = "translation.home";
}

namespace ss {
  // Defining a string literal type for colors
  type Color = "red" | "green" | "blue";

  // Using the string literal type to define a variable
  let favoriteColor: Color = "blue";

  // Defining a string literal type for HTTP methods
  type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

  // Using the string literal type to define a function argument
  function makeRequest(url: string, method: HttpMethod) {
    // ...
  }

  // Calling the function with a string literal type argument
  makeRequest("/users", "GET");
}
