/**
 * Typeof
 */
namespace ss {
  function printAll(strs: string | string[] | null) {
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    } else {
      // do nothing
    }
  }
}
/**
 * Typeof Type Guards with numbers
 */
namespace ss {
  function printNumbers(nums: number | number[]) {
    if (typeof nums === "object") {
      for (const n of nums) {
        console.log(n);
      }
    } else if (typeof nums === "number") {
      console.log(nums);
    }
  }
}
/**
 * Typeof Type Guards with Booleans
 */
namespace ss {
  function printBool(bools: boolean | boolean[]) {
    if (typeof bools === "object") {
      for (const b of bools) {
        console.log(b ? "True" : "False");
      }
    } else if (typeof bools === "boolean") {
      console.log(bools ? "True" : "False");
    }
  }
}
/**
 * Typeof Type Guards with functions
 */
namespace ss {
  function execute(fn: Function | Function[]) {
    if (typeof fn === "object") {
      for (const f of fn) {
        f();
      }
    } else if (typeof fn === "function") {
      fn();
    }
  }
}
/**
 * Truthiness Narrowing
 */
namespace ss {
  function getUsersOnlineMessage(numUsersOnline: number) {
    if (numUsersOnline) {
      return `There are ${numUsersOnline} online now!`;
    }
    return "Nobody's here. :(";
  }
}
/**
 * Truthiness Narrowing with null and undefined
 */
namespace ss {
  interface Container {
    value: number | null | undefined;
  }
  function multiplyValue(container: Container, factor: number) {
    if (container.value) {
      container.value *= factor;
    }
  }
}
/**
 * Truthiness Narrowing con strings
 */
namespace ss {
  function printMessage(msg: string | null) {
    if (msg) {
      console.log(msg);
    } else {
      console.log("No message provided.");
    }
  }
}
/**
 * Truthiness Narrowing con arrays
 */
namespace ss {
  function printArray(arr: any[] | null) {
    if (arr) {
      console.log(arr.join(", "));
    } else {
      console.log("No array provided.");
    }
  }
}
/**
 *  Equality Narrowing
 */
namespace ss {
  function example(x: string | number, y: string | boolean) {
    if (x === y) {
      x.toUpperCase();
      y.toLowerCase();
    } else {
      console.log(x);
      console.log(y);
    }
  }
}
/**
 *  Equality Narrowing with null and undefined
 */
namespace ss {
  interface Container {
    value: number | null | undefined;
  }
  function multiplyValue(container: Container, factor: number) {
    if (container.value != null) {
      container.value *= factor;
    }
  }
}
/**
 *  Equality Narrowing con null
 */
namespace ss {
  function printValue(value: number | null) {
    if (value === null) {
      console.log("Value is null.");
    } else {
      console.log(`Value is ${value}.`);
    }
  }
}
/**
 *  Equality Narrowing con undefined
 */
namespace ss {
  function printValue(value: number | undefined) {
    if (value === undefined) {
      console.log("Value is undefined.");
    } else {
      console.log(`Value is ${value}.`);
    }
  }
}
