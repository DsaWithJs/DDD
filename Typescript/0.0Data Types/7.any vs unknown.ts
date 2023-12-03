namespace ss {
  let a: any = 1;
  a = "1";
  a = null;
  a = undefined;
  a = {};
  a = function () {};

  // Let's use `a`
  a(); // we can call it
  a.toUpperCase(); // we an use string methods on it
  a.non_existing_property.nested_non_existing_property; // 🤔
}
namespace ss {
  let a: unknown = 1;
  a = "1";
  a = null;
  a = undefined;
  a = {};
  a = function () {};

  // let's use `a`
  a(); // error: 'a' is of type 'unknown'.
  a.toUpperCase(); // error: 'a' is of type 'unknown'.
  a.non_existing_property; // error 'a' is of type 'unknown'.
}
