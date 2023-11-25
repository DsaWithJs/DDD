/**
 * Best example to use Generics
 */
namespace ss {
  type Collection<G> = {
    name: string;
    quantity: number;
    content: G[];
  };

  let bookCollection: Collection<string> = {
    name: "Nursery Books",
    quantity: 3,
    content: ["Goodnight Moon", "Humpty Dumpty"],
  };

  let primeNumberCollection: Collection<number> = {
    name: "First 5 Prime Numbers",
    quantity: 5,
    content: [2, 3, 4],
  };
}
/**
 * Generic Constraints ⇒ extends
 */
namespace ss {
  interface PersonName {
    firstName: string;
    lastName: string;
  }

  // Use T extends PersonName, restrict T to be a subcollection of the PersonName type
  function logPersonName<T extends PersonName>(person: T) {
    return ` ${person.firstName}  ${person.lastName} `;
  }
}
/**
 *Application of keyof in generics
 */
namespace ss {
  // Bring in the object and key to get the value of the object
  function getValue<T, K>(obj: T, key: K): T[K] {
    return obj[key]; // Error: Type 'K' cannot be used to index type 'T'.ts(2536)
  }

  // Add keyof to clearly tell TS that K comes from the key in the T object
  function getValue1<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }
}
