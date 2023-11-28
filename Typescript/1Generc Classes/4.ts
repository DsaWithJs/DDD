namespace ss {
  class Sample<T> {
    item: T;

    constructor(item: T) {
      this.item = item;
    }

    getItem(): T {
      return this.item;
    }
  }

  let strObj = new Sample<string>("ONE");
  strObj.getItem(); //=> "ONE"

  let numObj = new Sample<number>(1);
  numObj.getItem(); //=> 1
}
