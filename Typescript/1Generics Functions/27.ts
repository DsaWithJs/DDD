/**
 *  Example 1 — Type-Safe Generics
 */

namespace ss {
  function objectify<T, U>(value1: T, value2: U): { value1: T; value2: U } {
    return { value1, value2 };
  }

  // ✅ - Correct
  const obj1 = objectify<string, number>("Hello World", 10);
  const obj2 = objectify<number, boolean>(10, true);

  console.log(obj1); // Output: { value1: "Hello World", value2: 10 }
  console.log(obj2); // Output: { value1: 10, value2: true }

  // ❌ - Wrong
  const obj3 = objectify<string, number>(10, 10);
  const obj4 = objectify<string, number>(10, "Hello World");
}

/**
 * Example 2 — Generic Classes
 */
namespace ss {
  class MyCustomArray<T> {
    private items: T[];

    constructor(initialItems: T[]) {
      this.items = initialItems;
    }

    getItems(): T[] {
      return this.items;
    }

    addItem(item: T) {
      this.items.push(item);
    }
  }

  // ✅ - Correct
  const instance1 = new MyCustomArray<number>([1, 2]);
  instance1.addItem(3);

  const instance2 = new MyCustomArray<string>(["foo"]);
  instance2.addItem("bar");

  console.log(instance1.getItems()); // Output: [1, 2, 3]
  console.log(instance2.getItems()); // Output: ["foo", "bar"]

  // ❌ - Wrong
  instance1.addItem(true);
  instance2.addItem(4);
}

/**
 *  Example 3 — Generic Constraints
 */
namespace ss {
  function echo<T extends string | number>(value: T): T {
    return value;
  }

  // ✅ - Correct
  const result1 = echo<string>("Hello World");
  const result2 = echo<number>(10);

  console.log(result1); // Output: Hello World
  console.log(result2); // Output: 10

  // ❌ - Wrong
  const result3 = echo<number>("Foo");
  const result4 = echo<boolean>(true);
}
