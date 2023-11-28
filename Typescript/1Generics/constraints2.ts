/**
 * Let’s say we want to make our identity function log out the length of the argument as well.
 * We may be tempted to write this:
 */
namespace ss {
  function identity<T>(arg: T): T {
    console.log(arg.length);
    return arg;
  }
}
/**
 * This makes sense as we haven’t defined Type to have a length property.
 * If we’re only interested in this function being used with arrays
 * we could change our code to the following and get rid of the error:
 */
namespace ss {
  function identity<T>(arg: Array<T>): Array<T> {
    console.log(arg.length);
    return arg;
  }
}
/**
 * This will now work for arrays of any type.
 * If we want it to work with simple strings as well
 * we can create an interface:
 */
namespace ss {
  interface HasLength {
    length: number;
  }

  function identity<T extends HasLength>(arg: T): T {
    console.log(arg.length);
    return arg;
  }

  identity("33");
  identity(33);
}
