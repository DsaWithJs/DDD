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

namespace ss {
  interface Product {
    name: string;
    description: string;
    price: number;
    category: string;
  }

  type ProductWithoutDescriptionAndCategory = Omit<Product, "description" | "category">;
  const product: ProductWithoutDescriptionAndCategory = {
    name: "Product 1",
    price: 10.99,
  };
}
