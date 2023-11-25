/**
 * 1.6 — Partial Generics: Combining Generics with Partial to create optional properties.
 */

namespace ss {
  interface User {
    id: number;
    name: string;
    age?: number;
  }
  function updateUser<T extends Partial<User>>(user: User, updates: T): User {
    return {
      ...user,
      ...updates,
    };
  }
  const user: User = { id: 1, name: "John Doe" };
  const updatedUser = updateUser(user, { age: 26 }); // updatedUser: User
}
