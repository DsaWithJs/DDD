namespace ss {
  function echo<T>(value: T): T {
    return value;
  }

  //calls the function with no errors from typescript
  echo("Hello World");
  echo(3.14159);
  echo(false);
  echo([1, 2, 3, 4]);
  echo({ id: 1, fullName: "John Doe" });
}
/**
 *
 */
namespace ss {
  interface Lengthy {
    length: number;
  }

  function printLength<T extends Lengthy>(item: T): void {
    console.log(`Length: ${item.length}`);
  }

  const stringItem = "Hello, World!";
  printLength(stringItem); // Output: Length: 13

  const arrayItem = [1, 2, 3, 4, 5];
  printLength(arrayItem); // Output: Length: 5

  const numberItem = 42; // Error: Type 'number' does not have a property 'length'
  printLength(numberItem);
}
/**
 *The function below accepts an array of objects, 
 finds an object by the id key property of the object, 
 and returns the key value we specified 
 as a parameter when calling the function.
 */
namespace ss {
  interface Person {
    id: number;
    name: string;
    age: number;
  }

  function getObjectValue<T extends { id: number }, K extends keyof T>(arr: T[], key: K, id: number): T[K] | undefined {
    const foundObject = arr.find((obj) => obj.id === id);
    return foundObject ? foundObject[key] : undefined;
  }

  const people: Person[] = [
    { id: 1, name: "John", age: 25 },
    { id: 2, name: "Jane", age: 30 },
    { id: 3, name: "Bob", age: 40 },
  ];

  const nameValue = getObjectValue(people, "name", 2);
  console.log(nameValue); // Output: Jane
}
/**
 * Generics can have default values.
 */
namespace ss {
  function getObjectValue<T extends { id: number }, K extends keyof T>(arr: T[], key: K, id: number = 2): T[K] | undefined {
    const foundObject = arr.find((obj) => obj.id === id);
    return foundObject ? foundObject[key] : undefined;
  }
}
/**
 * Instead of creating separate interfaces for each entity
 * (e.g., UserRepository, ProductRepository, etc.),
 * we can use generics to create a single,
 * generic Repository interface that can handle various entity types.
 */
namespace ss {
  interface Repository<T> {
    getById(id: string): T | undefined;
    getAll(): T[];
    create(item: T): void;
    update(item: T): void;
    delete(id: string): void;
  }
  class UserRepository implements Repository<User> {
    // Implementation specific to User entity
  }

  class ProductRepository implements Repository<Product> {
    // Implementation specific to Products operation
  }

  // Usage
  const userRepository: Repository<User> = new UserRepository();
  const user = userRepository.getById("123");
  userRepository.create(newUser);

  const productRepository: Repository<Product> = new ProductRepository();
  const products = productRepository.getAll();
  productRepository.update(updatedProduct);
}
