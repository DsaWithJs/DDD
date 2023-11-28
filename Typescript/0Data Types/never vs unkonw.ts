namespace ss {
  let data: any;
  data = "hello";
  console.log(data.toUpperCase());
  // No error, even though data could be of any type

  let otherData: unknown;
  otherData = "world";
  console.log(otherData.toUpperCase());
  // Error: Object is of type 'unknown'
}
/**
 * unkonw vs never
 */
namespace ss {
  function throwError(message: string): never {
    throw new Error(message);
  }

  let x: unknown;
  x = throwError("This will always throw an error"); // Error: Type 'never' is not assignable to type 'unknown'
  let y: never;
  y = throwError("This will always throw an error"); // No error, since 'never' is the correct type for a function that always throws
  let z: unknown;
  z = "Hello, world!";
  y = z; // Error: Type 'unknown' is not assignable to type 'never'
}

/**
 * Using the Unknown Type
 * Type Guards and Narrowing
 */
namespace ss {
  function isString(value: unknown): value is string {
    return typeof value === "string";
  }

  let data: unknown = "Hello, world!";
  if (isString(data)) {
    console.log(data.toUpperCase()); // No error, as data is now known to be a string
  }
}
/**
 * Dealing with Unknown Values
 */
namespace ss {
  let data: unknown = "Hello, world!";

  console.log((data as string).toUpperCase()); // No error, but be careful!
}
/**
 * Unknown in Union Types
 */
namespace ss {
  type ApiResponse = { success: true; data: string } | { success: false; error: string } | unknown;

  function handleApiResponse(response: ApiResponse) {
    if (typeof response === "object" && response !== null && "success" in response) {
      if (response.success) {
        console.log("Data:", response.data);
      } else {
        console.log("Error:", response.error);
      }
    } else {
      console.log("Unknown response:", response);
    }
  }
}
