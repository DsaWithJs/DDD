namespace ss {
  interface CartItem {
    price: number;
  }

  interface Leash extends CartItem {
    size: "big" | "small" | "medium";
    color: "black" | "white";
  }

  interface SqueakyToy extends CartItem {
    shape: "ball" | "bone";
    color: "red" | "blue";
  }

  function calcCartTotal(cart: (SqueakyToy | Leash)[]): number {
    return cart.reduce((total, cartItem) => total + cartItem.price, 0);
  }

  const leash: Leash = {
    price: 10,
    size: "big",
    color: "black",
  };

  const squeakyToy: SqueakyToy = {
    price: 15,
    color: "red",
    shape: "bone",
  };

  calcCartTotal([leash, squeakyToy]); // output : 25
}
/**
 * This code compiles and works perfectly, but there is a small problem,
 * next week we will get a new delivery of Catnip.
 */
namespace ss {
  interface CartItem {
    price: number;
  }

  interface Leash extends CartItem {
    size: "big" | "small" | "medium";
    color: "black" | "white";
  }

  interface SqueakyToy extends CartItem {
    shape: "ball" | "bone";
    color: "red" | "blue";
  }

  interface Catnip extends CartItem {
    type: "strong" | "mellow";
  }

  function calcCartTotal(cart: (SqueakyToy | Leash)[]): number {
    return cart.reduce((total, cartItem) => total + cartItem.price, 0);
  }

  const leash: Leash = {
    price: 10,
    size: "big",
    color: "black",
  };

  const squeakyToy: SqueakyToy = {
    price: 15,
    color: "red",
    shape: "bone",
  };

  const catnip: Catnip = {
    price: 30,
    type: "strong",
  };

  calcCartTotal([leash, squeakyToy, catnip]);
}
/**
 * As we did not specify it in cart type in order for it to compile,
 * we have to add it to the union like so:
 */
namespace ss {
  interface CartItem {
    price: number;
  }

  interface Leash extends CartItem {
    size: "big" | "small" | "medium";
    color: "black" | "white";
  }

  interface SqueakyToy extends CartItem {
    shape: "ball" | "bone";
    color: "red" | "blue";
  }

  interface Catnip extends CartItem {
    type: "strong" | "mellow";
  }

  function calcCartTotal(cart: (SqueakyToy | Leash | Catnip)[]): number {
    return cart.reduce((total, cartItem) => total + cartItem.price, 0);
  }

  const leash: Leash = {
    price: 10,
    size: "big",
    color: "black",
  };

  const squeakyToy: SqueakyToy = {
    price: 15,
    color: "red",
    shape: "bone",
  };

  const catnip: Catnip = {
    price: 30,
    type: "strong",
  };

  calcCartTotal([leash, squeakyToy, catnip]);
}
/**
 * However, we don’t want to update the type of cart every time
 * we have a new item in the store. That’s a big problem!
 */
/**
 * T extends CartItem which means that the type parameter T has to be an object type
 * with price property of type number.
 * Of course, it can have many more properties.
 */
namespace ss {
  interface CartItem {
    price: number;
  }

  interface Leash extends CartItem {
    size: "big" | "small" | "medium";
    color: "black" | "white";
  }

  interface SqueakyToy extends CartItem {
    shape: "ball" | "bone";
    color: "red" | "blue";
  }

  function calcCartTotal<T extends CartItem>(cart: T[]): number {
    return cart.reduce((total, cartItem) => total + cartItem.price, 0);
  }

  const leash: Leash = {
    price: 10,
    size: "big",
    color: "black",
  };

  const squeakyToy: SqueakyToy = {
    price: 15,
    color: "red",
    shape: "bone",
  };

  calcCartTotal([leash, squeakyToy]); // output : 25
}
