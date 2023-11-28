/**
 * Now you always have to pass an object.
 */
namespace ss {
  const createNewUser = <T,>(user: T) => {
    const newUser = { ...user, active: true, power: 100 };
    return newUser;
  };
  const user = createNewUser({ name: "John Doe", age: 21 });
  console.log(user);
  console.log(user.name); // works fine
}
/**
 * What if you always want to pass some interface?
 */
namespace ss {
  const createNewUser = <T,>(user: T) => {
    const newUser = { ...user, active: true, power: 100 };
    return newUser;
  };
  interface User {
    name: string;
    age: number;
  }

  const user = createNewUser<User>({ name: "John Doe", age: 21 });

  interface UserWithCountry extends User {
    country: string;
  }

  const user2 = createNewUser<UserWithCountry>({
    name: "John Doe",
    age: 21,
    country: "BD",
  });
}
/**
 * let me give you another example.
 */
namespace ss {
  interface User<T> {
    name: string;
    age: number;
    extraInfo: T;
  }
}
/**
 * We have this User interface and extraInfo property can be any type. 
 We just don't know. But don't pass any type.
 */
namespace ss{
    interface User<T> {
        name: string
        age: number
        extraInfo: T
    }
    interface Address {
        city: string
        country: string
    }
    const user: User<Address> = {
        name: 'Anjan',
        age: 20,
        extraInfo: {
            city: 'Dhaka',
            country: 'BD',
        },
    }
}
/**
 * Multiple types in the generics.
 */
namespace ss{
    interface Address{
        city: string,
        country:string
    }
    interface User<T, A> {
        name: string
        age: A
        extraInfo: T
    }
    const user: User<Address, number> = {
        name: 'Anjan',
        age: 20,
        extraInfo: {
            city: 'Dhaka',
            country: 'BD',
        },
    }
}
/**
 * Default types
 */
namespace ss{
    interface Address{
        city: string,
        country:string
    }

    interface User<T, A = number> {
        name: string
        age: A
        extraInfo: T
    }
    
    const user: User<Address> = {
        name: 'Anjan',
        age: 20,
        extraInfo: {
            city: 'Dhaka',
            country: 'BD',
        },
    }
}