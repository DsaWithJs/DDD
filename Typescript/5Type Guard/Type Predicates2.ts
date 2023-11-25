/**
 *  Type Predicates
 */
namespace ss {
  function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
  }
}
/**
 *  Type Predicates with classes
 */
namespace ss {
  class Animal {
    constructor(public name: string) {}
  }
  class Dog extends Animal {
    bark() {
      return "Woof!";
    }
  }
  class Cat extends Animal {
    meow() {
      return "Meow!";
    }
  }
  function isDog(pet: Dog | Cat): pet is Dog {
    return (pet as Dog).bark !== undefined;
  }
}
/**
 *  Type Predicatescon interfaces
 */
namespace ss {
  interface Car {
    drive(): void;
  }

  interface Boat {
    sail(): void;
  }

  function isCar(vehicle: Car | Boat): vehicle is Car {
    return (vehicle as Car).drive !== undefined;
  }
}
/**
 *  Type Predicates with classes
 */
namespace ss {
  class Circle {
    radius: number;
  }

  class Square {
    side: number;
  }

  function isCircle(shape: Circle | Square): shape is Circle {
    return (shape as Circle).radius !== undefined;
  }
}
