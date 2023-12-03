namespace ss {
  type Color = "red" | "green" | "blue" | "yellow";

  function printColor(color: Color) {
    switch (color) {
      case "red":
        console.log("The color is red");
        break;
      case "green":
        console.log("The color is green");
        break;
      case "blue":
        console.log("The color is blue");
        break;
      default:
        // This is a safety net to catch any missing cases
        const _exhaustiveCheck: never = color;
    }
  }
}

/**
 * handle all cases
 */
namespace ss {
  type Color = "red" | "green" | "blue" | "yellow";

  function printColor(color: Color) {
    switch (color) {
      case "red":
        console.log("The color is red");
        break;
      case "green":
        console.log("The color is green");
        break;
      case "blue":
        console.log("The color is blue");
        break;
      case "yellow":
        console.log("The color is blue");
        break;
      default:
        // This is a safety net to catch any missing cases
        const _exhaustiveCheck: never = color;
    }
  }
}

/**
 *
 */
namespace ss {
  let funcA = () => {
    throw new Error("A");
  }; // return type of funcA is never

  let funcB = function () {
    throw new Error("B");
  }; // return type of funcB is never

  function funcC() {
    throw new Error("C");
  } // return type of funcC is void
}
/**
 * nevercan help make TypeScript code more type-safe
 * and catch errors at compile-time rather than runtime.
 */
