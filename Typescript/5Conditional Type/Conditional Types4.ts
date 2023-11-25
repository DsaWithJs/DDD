namespace ss {
  type AnimalType = "bird" | "fish";

  type Animal<T> = T extends "bird" ? { type: T; flySpeed: number } : T extends "fish" ? { type: T; swimSpeed: number } : never;

  let parrot: Animal<"bird"> = { type: "bird", flySpeed: 10 };
  let salmon: Animal<"fish"> = { type: "fish", swimSpeed: 5 };
}

namespace ss {
  interface ProductId {
    id: string;
  }

  interface OrderId {
    id: number;
  }

  type Id<T> = T extends string ? ProductId : OrderId;

  let productId: Id<string>;
  // Equivalent to let productId: ProductId;

  let orderId: Id<number>;
  // Equivalent to let orderId: OrderId;
}

/**
 * Example 2: Mapping Over Union Types
 */
namespace ss {
  type StringOrNumber = string | number;

  type ConvertedType<T> = T extends string ? number : string;

  type ConvertedStringOrNumber = ConvertedType<StringOrNumber>;
}

/**
 * Example 3: Unpacking Promise Values
 */
namespace ss {
  type UnpackPromise<T> = T extends Promise<infer U> ? U : T;

  function fetchData(): Promise<string> {
    // implementation details
  }

  type Data = UnpackPromise<ReturnType<typeof fetchData>>;
}
