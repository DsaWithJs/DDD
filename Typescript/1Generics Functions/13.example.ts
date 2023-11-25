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

namespace ss {
  // generic map function
  const map = <T, U>(items: T[], fn: (item: T) => U): U[] => {
    const result: U[] = [];
    for (let item of items) {
      result.push(fn(item));
    }
    return result;
  };

  const doubleNumbers = map<number, number>([1, 2, 3, 4, 5], (item) => item * 2);
  // [2, 4, 6, 8, 10]

  const stringifyDoubleNumbers = map<number, string>([1, 2, 3, 4, 5], (item) => `${item * 2}`);
  // ['2', '4', '6', '8', '10']
}
