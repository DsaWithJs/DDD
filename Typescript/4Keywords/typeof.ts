/**
 * the typeof type operator allows you
 * to capture the type of a value or expression at compile-time.
 */
/**
 * typeof is used to get the type of a variable,
 * but Fruit here is an interface, not a variable.
 */
namespace ss {
  interface Fruit {
    name: string;
    color: string;
    taste: string;
  }

  type FruitKeys = keyof typeof Fruit;
  // Equivalent to: type FruitKeys = "name" | "color" | "taste"

  function getProperty(fruit: typeof Fruit, key: FruitKeys) {
    return fruit[key];
  }

  const apple: Fruit = {
    name: "Apple",
    color: "Red",
    taste: "Sweet",
  };

  const color = getProperty(apple, "color"); // Accessing property "color" from the apple object
  console.log(color); // Output: "Red"
}
