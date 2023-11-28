namespace ss {
  function getPropertyValue<T, B extends keyof T>(target: T, key: B) {
    return target[key];
  }
  const myObj = {
    id: "0",
    name: "John Doe",
    age: 19,
  };
  getPropertyValue(myObj, "id");
  getPropertyValue(myObj, SSN);
  // ERROR: Cannot find name 'SSN'.
}
