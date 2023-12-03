/**
 * ReturnType Utility Type
 * The ReturnType utility in Typescript allows you to extract
 * the return type of a function, and use it as a type in your own code.
 */
namespace ss {
  const add = (a: number, b: number): number => {
    return a + b;
  };

  type AddReturnType = ReturnType<typeof add>; // number

  const createAdd = (): AddReturnType => {
    return add(10, 20);
  };

  console.log(createAdd());
  // 30
}
