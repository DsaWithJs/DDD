namespace ss {
  class Dog {
    bark() {}
  }

  class Cat {
    scratch() {}
  }

  type DogOrCat<T> = T extends "dog" ? Dog : Cat;

  let dog: DogOrCat<"dog">; // dog: Dog
  let cat: DogOrCat<"cat">; // cat: Cat
  let fish: DogOrCat<"fish">; // fish: Cat
}

namespace ss {
  type result1 = "s" extends string ? true : false;

  type result2 = string extends "s" ? true : false;
}
