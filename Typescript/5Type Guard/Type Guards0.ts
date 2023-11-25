/**
 * Type guards help you narrow down the type of a variable within a specific block of code.
 */

/**
 * You can create custom type guards using a special syntax with the is keyword in the return type:
 */
namespace ss {
  interface Dog {
    type: "dog";
    bark(): void;
  }

  interface Cat {
    type: "cat";
    meow(): void;
  }

  function isDog(animal: Dog | Cat): animal is Dog {
    return animal.type === "dog";
  }

  let pet: Dog | Cat = {
    type: "cat",
    meow: () => "dog",
  };

  if (isDog(pet)) {
    pet.bark(); // TypeScript knows pet is a Dog here
  } else {
    pet.meow(); // TypeScript knows pet is a Cat here
  }
}
