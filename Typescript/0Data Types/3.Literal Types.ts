// Literal types allow you to specify exact values a variable can hold.

namespace ss {
  type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

  function sendRequest(url: string, method: HttpMethod): void {
    // Send an HTTP request using the specified method
  }

  sendRequest("/api/data", "POST"); // This is valid
  sendRequest("/api/data", "PATCH"); // Error: Argument of type '"PATCH"' is not assignable to parameter of type 'HttpMethod'.
}

namespace ss {
  type HttpStatusCode = 200 | 201 | 400 | 401 | 404 | 500;

  function handleResponse(statusCode: HttpStatusCode) {
    switch (statusCode) {
      case 200:
        console.log("Success!");
        break;
      case 201:
        console.log("Created!");
        break;
      case 400:
        console.log("Bad Request");
        break;
      case 401:
        console.log("Unauthorized");
        break;
      case 404:
        console.log("Not Found");
        break;
      case 500:
        console.log("Internal Server Error");
        break;
    }
  }

  handleResponse(200); // "Success!"
  handleResponse(404); // "Not Found"
}

/**
 * Template Literal Types
 */
namespace ss {
  type Color = "red" | "green" | "blue";

  type CSSBorderProperty = `border-${Color}-1px`;
  // "border-red-1px" | "border-green-1px" | "border-blue-1px"
}

namespace ss {
  type ButtonClassName<Prefix extends string> = `${Prefix}-button`;

  const primaryButton: ButtonClassName<"primary"> = "primary-button";
  const secondaryButton: ButtonClassName<"secondary"> = "secondary-button";

  console.log(primaryButton); // "primary-button"
  console.log(secondaryButton); // "secondary-button"

  // Type '"invalid"' is not assignable to type '"primary-button"'
  const invalidButton: ButtonClassName<"primary"> = "invalid";
}

namespace ss {
  type Path<Dir extends string, File extends string> = `${Dir}/${File}`;

  const imagePath: Path<"images", "cat.jpg"> = "images/cat.jpg";
  const dataPath: Path<"data", "file.json"> = "data/file.json";

  console.log(imagePath); // "images/cat.jpg"
  console.log(dataPath); // "data/file.json"

  // Type '"invalid/file.txt"' is not assignable to type '"images/cat.jpg"'
  const invalidPath: Path<"images", "cat.jpg"> = "invalid/file.txt";
}

/**
 * TypeScript 4.1 introduces template literal types,
 * which are essentially string literals with embedded expressions.
 * This allows you to form new types by concatenating existing types.
 */
namespace ss {
  type World = "world";
  type Greeting = `hello ${World}`;
  // Here, Greeting is the type ”hello world”.
}

namespace ss {
  type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";
  type APIEndpoint<Method extends HttpMethod, Route extends string> = `${Method} /api/${Route}`;

  type UserEndpoint = APIEndpoint<"GET", "users">; // 'GET /api/users'
}
