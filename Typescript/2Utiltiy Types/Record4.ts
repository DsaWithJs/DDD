/**
 * The Record utility type allows to define types that map a set of strings to a set of values.
 */
/**
 * takes two type parameters:
 * the first is the string literal type to be used as keys,
 * and the second is the type of the values that the keys map to.
 */
namespace ss {
  type Fruit = "apple" | "banana" | "orange";

  type FruitInventory = Record<Fruit, number>;

  const inventory: FruitInventory = {
    apple: 5,
    banana: 10,
    orange: 3,
  };
}

/**
 * The Record type can also be used with other data types, not just strings.
 */
namespace ss {
  type NumberToBoolean = Record<number, boolean>;

  const myMap: NumberToBoolean = {
    1: true,
    2: false,
    3: true,
  };
}
