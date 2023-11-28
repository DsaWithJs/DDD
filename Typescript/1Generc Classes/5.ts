namespace ss {
  class WrappedValue {
    constructor(public name: string, public value: string) {}
  }

  const data: WrappedValue[] = [new WrappedValue("First Name", "Jason"), new WrappedValue("Last Name", "Byrne")];
}

namespace ss {
  class WrappedValue<T> {
    constructor(public name: string, public value: T) {}
  }

  const data: WrappedValue<string | number | boolean>[] = [
    new WrappedValue<string>("First Name", "Jason"),
    new WrappedValue<string>("Last Name", "Byrne"),
    new WrappedValue<number>("Age", 40),
    new WrappedValue<boolean>("Vaccinated?", true),
  ];
}
