const data = {
  name: "Alice",
  age: 28,
};

const key = "name";
console.log(data[key]);
/**
 data is inferred as:
{
  name: string;
  age: number;
}
 */

/**
 *1. Type Assertion:
 */
console.log(data[key as keyof typeof data]);

/**
 * 2. Defining the Key Type:
 */
namespace ss {
  const key: "name" | "age" = "name";
  console.log(data[key]);
}
/**
 * 3. Using an Index Signature:
 */
namespace ss {
  const data: { [key: string]: string | number } = {
    name: "Alice",
    age: 28,
  };

  const key = "name";
  console.log(data[key]);
}

/**
 * 4. Going the ‘any’ Route:
 */
namespace ss {
  const data: any = {
    name: "Alice",
    age: 28,
  };

  const key = "name";
  console.log(data[key]);
}
