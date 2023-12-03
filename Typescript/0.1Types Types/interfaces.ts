namespace ss {
  class Foo {
    bar: number;
    baz() {
      console.log(this.bar);
    }
  }

  // An interface extends a class!
  interface IFoo extends Foo {}

  let foo = {} as IFoo;

  let bar: number = foo.bar;
  foo.baz(); //type checks ok!
}
// And that is just the tip of the iceberg, real power comes in type!
