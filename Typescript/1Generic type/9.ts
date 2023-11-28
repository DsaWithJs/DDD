namespace ss {
  //Using the infer keyword to infer the type of a generic parameter
  type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

  function returnsNumber(): number {
    return 5;
  }
  let returnType: ReturnType<typeof returnsNumber>; // is inferred as number
}
/**
 *  the infer keyword is used to infer the return type of the function passed
 * to ReturnType and save it as returnType variable.
 */
namespace ss {
  type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

  function returnsNumber(): number {
    return 5;
  }

  let returnType: number;
}

namespace ss {
  type User = {
    id: number;
    name: string;
    address: string;
  };

  type KeysOfObject<T> = keyof T;

  type UserKeys = KeysOfObject<User>;

  const accessUser = (user: User, key: UserKeys) => {
    return user[key];
  };
  const user = {
    id: 1,
    name: "John Doe",
    address: "private",
  };
  accessUser(user, "address");
  accessUser(user, "SSN"); // ERROR: Argument of type '"SSN"' is not assignable to parameter of type 'keyof User'.
}
