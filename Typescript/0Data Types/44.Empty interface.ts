interface AnyNonNullishValue {}
// equivalent to `type AnyNonNullishValue = {}` or
// `type AnyNonNullishValue = Object`

let value: AnyNonNullishValue;
// these are all fine, but might not be expected
value = 1;
value = "foo";
value = () => alert("foo");
value = {};
value = { foo: "bar" };
// these are errors
value = undefined;
value = null;
