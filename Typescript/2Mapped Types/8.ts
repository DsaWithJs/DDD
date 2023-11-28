/**
 * Inference with Mapped Types
 */
namespace ss {
  type ExtractProperties<T, U> = {
    [K in keyof T as T[K] extends U ? K : never]: T[K];
  };

  interface Person {
    id: number;
    name: string;
    age: number;
    address: string;
  }
  type NumericPersonProperties = ExtractProperties<Person, number>;

  const numericProperties: NumericPersonProperties = {
    id: 1,
    age: 25,
  };
}
/**
 * Mapped Type Modifiers with Generics
 */
namespace ss {
  type OptionalProperties<T, K extends keyof T> = Omit<T, K> & {
    [P in K]?: T[P];
  };

  interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
  }

  type ProductWithOptionalDescription = OptionalProperties<Product, "description">;

  const product: ProductWithOptionalDescription = {
    id: 1,
    name: "Widget",
    price: 9.99,
  };
}
