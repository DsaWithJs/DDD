/**
 * If we do not specify the type T when calling the function,
 * the compiler will define the type for us according to the parameter we give.
 */
namespace ss {
  function getRandomMember<T>(array: T[]): T {
    const randomMember: number = Math.floor(Math.random() * array.length);

    return array[randomMember];
  }

  console.log(getRandomMember(["Kudret", "İrem", "Ayşe", "Mehmet", 23, 23, 3, 37]));
}

/**
 * If we specify type T, it will force us to conform to type T.
 */
namespace ss {
  export function getRandomMember<T>(array: T[]): T {
    const randomMember: number = Math.floor(Math.random() * array.length);

    return array[randomMember];
  }

  // Compiles without errors
  console.log(getRandomMember<string>(["Kudret", "İrem", "Ayşe", "Mehmet"]));
  console.log(getRandomMember<number>([23, 23, 3, 37]));

  // Returns Error because the array passed as a parameter can only contain elements of number type. And the function can only return a value of type number.
  console.log(getRandomMember<number>([23, 23, 3, 37, "might"]));
}
