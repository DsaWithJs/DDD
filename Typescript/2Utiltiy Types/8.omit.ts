/**
 * The Omit type is used to create a new type that omits the specified properties from an existing type.
 */
interface User {
  id: number;
  name: string;
  email: string;
}

type UserWithoutId = Omit<User, "id">;
//The UserWithoutId type can be used to create a new User object that does not have an id property.
